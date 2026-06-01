package com.xy.dolphindb.navigation

import com.intellij.openapi.application.ReadAction
import com.intellij.openapi.editor.Document
import com.intellij.openapi.fileEditor.FileDocumentManager
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.psi.search.FilenameIndex
import com.intellij.psi.search.GlobalSearchScope

/**
 * Project-wide function definition lookup without requiring `use` imports.
 */
object DolphinDbProjectSymbolResolver {
    private val WORD_AT_CARET = Regex("""[a-zA-Z_][a-zA-Z0-9_:]*""")
    private val DEF_LINE = Regex("""^\s*(def|defg)\s+([a-zA-Z_]\w*)\s*\(""")
    private val MODULE_LINE = Regex("""^\s*module\s+([a-zA-Z0-9_:]+)""")

    data class WordAtCaret(
        val name: String,
        val functionName: String,
        val qualifiedModule: String?,
        val isFunctionCall: Boolean,
    )

    data class DefinitionSite(
        val file: VirtualFile,
        val line: Int,
        val column: Int,
    )

    fun wordAtCaret(document: Document, offset: Int): WordAtCaret? {
        val text = document.charsSequence
        if (offset < 0 || offset > text.length) {
            return null
        }
        val lineStart = document.getLineStartOffset(document.getLineNumber(offset))
        val lineEnd = document.getLineEndOffset(document.getLineNumber(offset))
        val lineText = text.subSequence(lineStart, lineEnd).toString()

        var match: MatchResult? = null
        for (candidate in WORD_AT_CARET.findAll(lineText)) {
            val start = lineStart + candidate.range.first
            val end = lineStart + candidate.range.last + 1
            if (offset in start until end) {
                match = candidate
                break
            }
        }
        val word = match?.value ?: return null

        val rest = lineText.substring(match!!.range.last + 1).trimStart()
        val isFunctionCall = rest.startsWith("(")

        val (qualifiedModule, functionName) = if (word.contains("::")) {
            val idx = word.lastIndexOf("::")
            word.substring(0, idx) to word.substring(idx + 2)
        } else {
            null to word
        }

        return WordAtCaret(
            name = word,
            functionName = functionName,
            qualifiedModule = qualifiedModule,
            isFunctionCall = isFunctionCall,
        )
    }

    fun findFunctionDefinitions(project: Project, word: WordAtCaret): List<DefinitionSite> {
        if (!word.isFunctionCall || word.functionName.isEmpty()) {
            return emptyList()
        }
        if (project.isDisposed) {
            return emptyList()
        }
        return ReadAction.compute<List<DefinitionSite>, RuntimeException> {
            val scope = GlobalSearchScope.projectScope(project)
            val files = FilenameIndex.getAllFilesByExt(project, "dos", scope)
            val sites = ArrayList<DefinitionSite>()

            val candidates = if (word.qualifiedModule != null) {
                val moduleName = word.qualifiedModule
                val moduleFiles = files.filter { file ->
                    val text = readFileText(file) ?: return@filter false
                    fileDeclaresModule(text, moduleName)
                }
                if (moduleFiles.isNotEmpty()) moduleFiles else files.toList()
            } else {
                files.toList()
            }

            for (file in candidates) {
                val text = readFileText(file) ?: continue
                sites.addAll(findDefinitionsInText(file, text, word.functionName))
            }
            sites.distinctBy { "${it.file.path}:${it.line}:${it.column}" }
        }
    }

    private fun readFileText(file: VirtualFile): String? {
        val document = FileDocumentManager.getInstance().getDocument(file)
        if (document != null) {
            return document.text
        }
        return try {
            String(file.contentsToByteArray(), Charsets.UTF_8)
        } catch (_: Exception) {
            null
        }
    }

    private fun fileDeclaresModule(text: String, moduleName: String): Boolean {
        val normalized = text.replace("\r\n", "\n")
        for (line in normalized.lineSequence()) {
            val trimmed = line.trim()
            if (trimmed.startsWith("//")) {
                continue
            }
            val match = MODULE_LINE.matchEntire(trimmed) ?: continue
            if (match.groupValues[1] == moduleName) {
                return true
            }
        }
        return false
    }

    private fun findDefinitionsInText(
        file: VirtualFile,
        text: String,
        functionName: String,
    ): List<DefinitionSite> {
        val lines = text.replace("\r\n", "\n").split('\n')
        val result = ArrayList<DefinitionSite>()
        for ((lineIndex, line) in lines.withIndex()) {
            val trimmed = line.trimStart()
            if (trimmed.startsWith("//")) {
                continue
            }
            val match = DEF_LINE.find(line) ?: continue
            if (match.groupValues[2] != functionName) {
                continue
            }
            val defKeyword = match.groupValues[1]
            val nameIndex = line.indexOf(
                functionName,
                line.indexOf(defKeyword, match.range.first),
            )
            if (nameIndex >= 0) {
                result.add(DefinitionSite(file, lineIndex, nameIndex))
            }
        }
        return result
    }
}

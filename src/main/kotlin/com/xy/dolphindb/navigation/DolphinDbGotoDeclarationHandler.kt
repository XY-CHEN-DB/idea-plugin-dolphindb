package com.xy.dolphindb.navigation

import com.intellij.codeInsight.navigation.actions.GotoDeclarationHandler
import com.intellij.openapi.editor.Document
import com.intellij.openapi.editor.Editor
import com.intellij.openapi.fileEditor.FileDocumentManager
import com.intellij.openapi.util.io.FileUtil
import com.intellij.openapi.vfs.LocalFileSystem
import com.intellij.openapi.project.DumbService
import com.intellij.openapi.project.Project
import com.intellij.platform.lsp.api.LspServerManager
import com.intellij.platform.lsp.api.LspServerState
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiManager
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.lsp.DolphinDbLspServerSupportProvider
import org.eclipse.lsp4j.DefinitionParams
import org.eclipse.lsp4j.Location
import org.eclipse.lsp4j.LocationLink
import org.eclipse.lsp4j.Position
import java.util.concurrent.ExecutionException

class DolphinDbGotoDeclarationHandler : GotoDeclarationHandler {
    override fun getGotoDeclarationTargets(
        sourceElement: PsiElement?,
        offset: Int,
        editor: Editor?,
    ): Array<PsiElement>? {
        if (sourceElement == null || editor == null) {
            return null
        }
        val containingFile = sourceElement.containingFile ?: return null
        val virtualFile = containingFile.virtualFile ?: return null
        if (virtualFile.fileType != DolphinDbFileType.INSTANCE) {
            return null
        }

        val project = sourceElement.project
        if (project.isDisposed || DumbService.isDumb(project)) {
            return null
        }

        val wordAtCaret = DolphinDbProjectSymbolResolver.wordAtCaret(editor.document, offset)
        val lspLocations = requestDefinitions(project, virtualFile, editor, offset)
        val projectSites = if (wordAtCaret != null && wordAtCaret.isFunctionCall) {
            DolphinDbProjectSymbolResolver.findFunctionDefinitions(project, wordAtCaret)
        } else {
            emptyList()
        }

        val seen = LinkedHashSet<String>()
        val targets = ArrayList<PsiElement>()
        for (location in lspLocations) {
            val element = resolveLocationToPsiElement(project, location) ?: continue
            val key = navigationKey(element) ?: continue
            if (seen.add(key)) {
                targets.add(element)
            }
        }
        for (site in projectSites) {
            val element = resolveDefinitionSite(project, site) ?: continue
            val key = navigationKey(element) ?: continue
            if (seen.add(key)) {
                targets.add(element)
            }
        }

        return if (targets.isEmpty()) null else targets.toTypedArray()
    }

    private fun requestDefinitions(
        project: Project,
        virtualFile: com.intellij.openapi.vfs.VirtualFile,
        editor: Editor,
        offset: Int,
    ): List<Location> {
        val servers = LspServerManager.getInstance(project)
            .getServersForProvider(DolphinDbLspServerSupportProvider::class.java)
            .filter { it.state == LspServerState.Running }

        val position = documentOffsetToPosition(editor.document, offset)

        for (server in servers) {
            if (!server.descriptor.isSupportedFile(virtualFile)) {
                continue
            }
            try {
                val docId = server.getDocumentIdentifier(virtualFile)
                val params = DefinitionParams(docId, position)
                val result = server.sendRequestSync { ls ->
                    ls.textDocumentService.definition(params)
                }
                val locations = toLocations(result)
                if (locations.isNotEmpty()) {
                    return locations
                }
            } catch (_: ExecutionException) {
                // try next server
            } catch (_: InterruptedException) {
                Thread.currentThread().interrupt()
                return emptyList()
            }
        }
        return emptyList()
    }

    private fun resolveDefinitionSite(project: Project, site: DolphinDbProjectSymbolResolver.DefinitionSite): PsiElement? {
        val document = FileDocumentManager.getInstance().getDocument(site.file) ?: return null
        val offset = positionToOffset(document, Position(site.line, site.column))
        val psiFile = PsiManager.getInstance(project).findFile(site.file) ?: return null
        return psiFile.findElementAt(offset) ?: psiFile
    }

    private fun resolveLocationToPsiElement(project: Project, location: Location): PsiElement? {
        val descriptor = LspServerManager.getInstance(project)
            .getServersForProvider(DolphinDbLspServerSupportProvider::class.java)
            .firstOrNull { it.state == LspServerState.Running }
            ?.descriptor
            ?: return null

        val targetFile = descriptor.findFileByUri(location.uri)
            ?: findVirtualFileByPath(location.uri)
            ?: return null
        val document = FileDocumentManager.getInstance().getDocument(targetFile) ?: return null
        val targetOffset = positionToOffset(document, location.range.start)
        val psiFile = PsiManager.getInstance(project).findFile(targetFile) ?: return null
        return psiFile.findElementAt(targetOffset) ?: psiFile
    }

    private fun toLocations(result: Any?): List<Location> = when (result) {
        null -> emptyList()
        is Location -> listOf(result)
        is List<*> -> result.mapNotNull { item ->
            when (item) {
                is Location -> item
                is LocationLink -> Location(
                    item.targetUri,
                    item.targetSelectionRange ?: item.targetRange,
                )
                else -> null
            }
        }
        else -> emptyList()
    }

    private fun documentOffsetToPosition(document: Document, offset: Int): Position {
        val line = document.getLineNumber(offset)
        val lineStart = document.getLineStartOffset(line)
        return Position(line, offset - lineStart)
    }

    private fun positionToOffset(document: Document, position: Position): Int =
        document.getLineStartOffset(position.line) + position.character

    private fun navigationKey(element: PsiElement): String? {
        val file = element.containingFile.virtualFile ?: return null
        val start = element.textRange.startOffset
        return "${file.path}:$start"
    }

    private fun findVirtualFileByPath(uriOrPath: String): com.intellij.openapi.vfs.VirtualFile? {
        val path = when {
            uriOrPath.startsWith("file:") -> {
                try {
                    java.net.URI(uriOrPath).path
                } catch (_: Exception) {
                    uriOrPath.removePrefix("file://")
                }
            }
            else -> uriOrPath
        } ?: return null
        val normalized = FileUtil.toSystemIndependentName(path)
        return LocalFileSystem.getInstance().findFileByPath(normalized)
            ?: LocalFileSystem.getInstance().refreshAndFindFileByPath(normalized)
    }

}

package com.xy.dolphindb.docs

import com.intellij.model.Pointer
import com.intellij.openapi.util.TextRange
import com.intellij.platform.backend.documentation.DocumentationResult
import com.intellij.platform.backend.documentation.DocumentationTarget
import com.intellij.platform.backend.documentation.DocumentationTargetProvider
import com.intellij.platform.backend.presentation.TargetPresentation
import com.intellij.psi.PsiFile
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.psi.DolphinDbPsiUtil

class DolphinDbDocumentationProvider : DocumentationTargetProvider {
    override fun documentationTargets(file: PsiFile, offset: Int): List<DocumentationTarget> {
        if (file.fileType != DolphinDbFileType.INSTANCE) {
            return emptyList()
        }

        val range = DolphinDbPsiUtil.identifierRangeAtOffset(file, offset) ?: return emptyList()
        val word = range.substring(file.text)
        if (word.isBlank()) {
            return emptyList()
        }

        val markdown = DocsService.getInstance().getBuiltinMarkdown(word) ?: return emptyList()
        return listOf(BuiltinDocumentationTarget(word, range, markdown))
    }

    private class BuiltinDocumentationTarget(
        private val name: String,
        private val range: TextRange,
        private val markdown: String,
    ) : DocumentationTarget {
        override fun createPointer(): Pointer<out DocumentationTarget> =
            Pointer.hardPointer(BuiltinDocumentationTarget(name, range, markdown))

        override fun computePresentation(): TargetPresentation =
            TargetPresentation.builder(name).presentableText(name).presentation()

        override fun computeDocumentationHint(): String =
            DocsHtmlRenderer.documentationHint(markdown)

        override fun computeDocumentation(): DocumentationResult =
            DocumentationResult.documentation(DocsHtmlRenderer.markdownToHtml(markdown))
    }
}

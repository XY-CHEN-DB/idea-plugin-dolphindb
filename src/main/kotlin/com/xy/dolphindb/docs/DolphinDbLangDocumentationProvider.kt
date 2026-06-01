package com.xy.dolphindb.docs

import com.intellij.lang.documentation.AbstractDocumentationProvider
import com.intellij.openapi.editor.Editor
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiFile
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.psi.DolphinDbPsiUtil
import com.xy.dolphindb.psi.DolphinDbTokenTypes

class DolphinDbLangDocumentationProvider : AbstractDocumentationProvider() {
    override fun getCustomDocumentationElement(
        editor: Editor,
        file: PsiFile,
        contextElement: PsiElement?,
        targetOffset: Int,
    ): PsiElement? {
        if (file.fileType != DolphinDbFileType.INSTANCE) {
            return null
        }

        val range = DolphinDbPsiUtil.identifierRangeAtOffset(file, targetOffset) ?: return null
        val word = range.substring(file.text)
        if (DocsService.getInstance().getBuiltinMarkdown(word) == null) {
            return null
        }

        val element = file.findElementAt(range.startOffset)
        if (element != null && element.node.elementType == DolphinDbTokenTypes.IDENTIFIER) {
            return element
        }
        return contextElement?.takeIf { it.node.elementType == DolphinDbTokenTypes.IDENTIFIER }
    }

    override fun generateDoc(element: PsiElement, originalElement: PsiElement?): String? {
        val markdown = docsMarkdownForElement(element) ?: return null
        return DocsHtmlRenderer.markdownToHtml(markdown)
    }

    override fun generateHoverDoc(element: PsiElement, originalElement: PsiElement?): String? =
        generateDoc(element, originalElement)

    override fun getQuickNavigateInfo(element: PsiElement, originalElement: PsiElement?): String? {
        val markdown = docsMarkdownForElement(element) ?: return null
        return DocsHtmlRenderer.documentationHint(markdown)
    }

    private fun docsMarkdownForElement(element: PsiElement): String? {
        val file = element.containingFile ?: return null
        if (file.fileType != DolphinDbFileType.INSTANCE) {
            return null
        }

        val word = when (element.node.elementType) {
            DolphinDbTokenTypes.IDENTIFIER -> element.text
            else -> DolphinDbPsiUtil.identifierAtOffset(file, element.textOffset)
        } ?: return null

        return DocsService.getInstance().getBuiltinMarkdown(word)
    }
}

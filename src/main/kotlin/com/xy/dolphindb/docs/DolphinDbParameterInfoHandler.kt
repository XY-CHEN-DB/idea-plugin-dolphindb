package com.xy.dolphindb.docs

import com.intellij.lang.parameterInfo.CreateParameterInfoContext
import com.intellij.lang.parameterInfo.ParameterInfoContext
import com.intellij.lang.parameterInfo.ParameterInfoHandler
import com.intellij.lang.parameterInfo.ParameterInfoUIContext
import com.intellij.lang.parameterInfo.UpdateParameterInfoContext
import com.intellij.openapi.project.DumbAware
import com.intellij.psi.PsiFile
import com.xy.dolphindb.DolphinDbFileType

class DolphinDbParameterInfoHandler : ParameterInfoHandler<PsiFile, SignatureHelpResult>, DumbAware {
    override fun findElementForParameterInfo(context: CreateParameterInfoContext): PsiFile? {
        val help = resolveSignatureHelp(context) ?: return null
        context.setItemsToShow(arrayOf(help))
        return context.file
    }

    override fun showParameterInfo(element: PsiFile, context: CreateParameterInfoContext) {
        context.showHint(element, context.offset, this)
    }

    override fun findElementForUpdatingParameterInfo(context: UpdateParameterInfoContext): PsiFile? {
        val help = resolveSignatureHelp(context) ?: return null
        context.setHighlightedParameter(help)
        context.setCurrentParameter(help.activeParameter ?: 0)
        return context.file
    }

    override fun updateParameterInfo(element: PsiFile, context: UpdateParameterInfoContext) {
        val help = resolveSignatureHelp(context) ?: return
        context.setHighlightedParameter(help)
        context.setCurrentParameter(help.activeParameter ?: 0)
    }

    override fun updateUI(item: SignatureHelpResult, context: ParameterInfoUIContext) {
        val signatureText = item.signature.full
        val highlight = parameterHighlightRange(item.signature, item.activeParameter)
        context.setupUIComponentPresentation(
            signatureText,
            highlight?.first ?: -1,
            highlight?.second ?: -1,
            false,
            false,
            false,
            context.defaultParameterColor,
        )
    }

    private fun resolveSignatureHelp(context: ParameterInfoContext): SignatureHelpResult? {
        val file = context.file
        if (file.fileType != DolphinDbFileType.INSTANCE) {
            return null
        }

        val text = textBeforeOffset(file, context.offset) ?: return null
        return DocsService.getInstance().getSignatureHelp(text)
    }

    private fun textBeforeOffset(file: PsiFile, offset: Int): String? {
        val document = file.viewProvider.document ?: return null
        val startLine = (document.getLineNumber(offset) - MAX_MATCH_LINES).coerceAtLeast(0)
        val startOffset = document.getLineStartOffset(startLine)
        if (offset <= startOffset) {
            return null
        }
        return document.charsSequence.subSequence(startOffset, offset).toString()
    }

    companion object {
        private const val MAX_MATCH_LINES = 30
    }
}

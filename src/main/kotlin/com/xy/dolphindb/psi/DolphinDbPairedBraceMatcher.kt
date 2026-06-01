package com.xy.dolphindb.psi

import com.intellij.lang.BracePair
import com.intellij.lang.PairedBraceMatcher
import com.intellij.psi.PsiFile
import com.intellij.psi.tree.IElementType

internal class DolphinDbPairedBraceMatcher : PairedBraceMatcher {
    override fun getPairs(): Array<BracePair> = PAIRS

    override fun isPairedBracesAllowedBeforeType(lbraceType: IElementType, contextType: IElementType?): Boolean =
        contextType != DolphinDbTokenTypes.STRING && contextType != DolphinDbTokenTypes.LINE_COMMENT

    override fun getCodeConstructStart(file: PsiFile, openingBraceOffset: Int): Int = openingBraceOffset

    companion object {
        private val PAIRS = arrayOf(
            BracePair(DolphinDbTokenTypes.LPAREN, DolphinDbTokenTypes.RPAREN, true),
            BracePair(DolphinDbTokenTypes.LBRACE, DolphinDbTokenTypes.RBRACE, true),
            BracePair(DolphinDbTokenTypes.LBRACKET, DolphinDbTokenTypes.RBRACKET, false),
            BracePair(DolphinDbTokenTypes.LT, DolphinDbTokenTypes.GT, false),
        )
    }
}

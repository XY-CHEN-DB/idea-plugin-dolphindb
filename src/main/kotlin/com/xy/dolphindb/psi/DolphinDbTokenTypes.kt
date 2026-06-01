package com.xy.dolphindb.psi

import com.intellij.psi.tree.IElementType
import com.xy.dolphindb.DolphinDbLanguage

object DolphinDbTokenTypes {
    @JvmField
    val IDENTIFIER = IElementType("IDENTIFIER", DolphinDbLanguage)

    @JvmField
    val LINE_COMMENT = IElementType("LINE_COMMENT", DolphinDbLanguage)

    @JvmField
    val STRING = IElementType("STRING", DolphinDbLanguage)

    @JvmField
    val OTHER = IElementType("OTHER", DolphinDbLanguage)

    @JvmField
    val LPAREN = IElementType("LPAREN", DolphinDbLanguage)

    @JvmField
    val RPAREN = IElementType("RPAREN", DolphinDbLanguage)

    @JvmField
    val LBRACE = IElementType("LBRACE", DolphinDbLanguage)

    @JvmField
    val RBRACE = IElementType("RBRACE", DolphinDbLanguage)

    @JvmField
    val LBRACKET = IElementType("LBRACKET", DolphinDbLanguage)

    @JvmField
    val RBRACKET = IElementType("RBRACKET", DolphinDbLanguage)

    @JvmField
    val LT = IElementType("LT", DolphinDbLanguage)

    @JvmField
    val GT = IElementType("GT", DolphinDbLanguage)
}

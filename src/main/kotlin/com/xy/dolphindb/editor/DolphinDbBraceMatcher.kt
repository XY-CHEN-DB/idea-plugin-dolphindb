package com.xy.dolphindb.editor

import com.intellij.codeInsight.highlighting.BraceMatcher
import com.intellij.codeInsight.highlighting.BraceMatchingUtil
import com.intellij.openapi.editor.highlighter.HighlighterIterator
import com.intellij.openapi.fileTypes.FileType
import com.intellij.psi.PsiFile
import com.intellij.psi.tree.IElementType
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.psi.DolphinDbTokenTypes
import org.jetbrains.plugins.textmate.editor.TextMateEditorUtils
import org.jetbrains.plugins.textmate.language.syntax.lexer.TextMateElementType
import org.jetbrains.plugins.textmate.language.syntax.lexer.TextMateScope

/**
 * Brace matching for `.dos` files highlighted via TextMate.
 * [com.intellij.lang.PairedBraceMatcher] is not used when [TextMateEditorHighlighterProvider] is active.
 */
class DolphinDbBraceMatcher : BraceMatcher {
    override fun getBraceTokenGroupId(tokenType: IElementType): Int {
        braceGroupFromDolphinDbToken(tokenType)?.let { return it }
        val scopeName = (tokenType as? TextMateElementType)?.scope?.scopeName ?: return BraceMatchingUtil.UNDEFINED_TOKEN_GROUP
        if (isStringOrComment(scopeName)) {
            return BraceMatchingUtil.UNDEFINED_TOKEN_GROUP
        }
        return braceGroupFromScope(scopeName.toString())
    }

    override fun isLBraceToken(iterator: HighlighterIterator, fileText: CharSequence, fileType: FileType): Boolean {
        if (fileType != DolphinDbFileType.INSTANCE || iterator.start >= iterator.end) {
            return false
        }
        val scope = textMateScope(iterator)
        if (isStringOrComment(scope)) {
            return false
        }
        if (TextMateEditorUtils.findRightHighlightingPair(iterator.start, fileText, scope) != null) {
            return true
        }
        return isLeftBraceChar(fileText, iterator.start)
    }

    override fun isRBraceToken(iterator: HighlighterIterator, fileText: CharSequence, fileType: FileType): Boolean {
        if (fileType != DolphinDbFileType.INSTANCE || iterator.start >= iterator.end) {
            return false
        }
        val scope = textMateScope(iterator)
        if (isStringOrComment(scope)) {
            return false
        }
        if (TextMateEditorUtils.findLeftHighlightingPair(iterator.end, fileText, scope) != null) {
            return true
        }
        return iterator.end > 0 && isRightBraceChar(fileText, iterator.end - 1)
    }

    override fun isPairBraces(tokenType: IElementType, tokenType2: IElementType): Boolean {
        val group = getBraceTokenGroupId(tokenType)
        return group != BraceMatchingUtil.UNDEFINED_TOKEN_GROUP && group == getBraceTokenGroupId(tokenType2)
    }

    override fun isStructuralBrace(iterator: HighlighterIterator, text: CharSequence, fileType: FileType): Boolean = false

    override fun getOppositeBraceTokenType(type: IElementType): IElementType? {
        braceOppositeFromDolphinDbToken(type)?.let { return it }
        val scopeName = (type as? TextMateElementType)?.scope?.scopeName?.toString()
        if (scopeName != null) {
            if (isStringOrComment(scopeName)) {
                return null
            }
            if (braceGroupFromScope(scopeName) != BraceMatchingUtil.UNDEFINED_TOKEN_GROUP) {
                // One IElementType per scope; isLBraceToken / isRBraceToken distinguish by character.
                return type
            }
            // Unscoped single-char token (e.g. bare ')') before grammar refresh — still non-null for TypedHandler.
            return type
        }
        return null
    }

    override fun isPairedBracesAllowedBeforeType(lbraceType: IElementType, contextType: IElementType?): Boolean = true

    override fun getCodeConstructStart(file: PsiFile, openingBraceOffset: Int): Int = openingBraceOffset

    private fun textMateScope(iterator: HighlighterIterator): TextMateScope? =
        (iterator.tokenType as? TextMateElementType)?.scope

    private fun isStringOrComment(scope: TextMateScope?): Boolean = isStringOrComment(scope?.scopeName)

    private fun isStringOrComment(scopeName: CharSequence?): Boolean {
        val name = scopeName?.toString() ?: return false
        return name.contains("string") || name.contains("comment")
    }

    private fun isLeftBraceChar(fileText: CharSequence, offset: Int): Boolean =
        fileText[offset] in LEFT_BRACES

    private fun isRightBraceChar(fileText: CharSequence, offset: Int): Boolean =
        fileText[offset] in RIGHT_BRACES

    private fun braceGroupFromDolphinDbToken(type: IElementType): Int? =
        when (type) {
            DolphinDbTokenTypes.LPAREN, DolphinDbTokenTypes.RPAREN -> 0
            DolphinDbTokenTypes.LBRACE, DolphinDbTokenTypes.RBRACE -> 1
            DolphinDbTokenTypes.LBRACKET, DolphinDbTokenTypes.RBRACKET -> 2
            DolphinDbTokenTypes.LT, DolphinDbTokenTypes.GT -> 3
            else -> null
        }

    private fun braceOppositeFromDolphinDbToken(type: IElementType): IElementType? =
        when (type) {
            DolphinDbTokenTypes.LPAREN -> DolphinDbTokenTypes.RPAREN
            DolphinDbTokenTypes.RPAREN -> DolphinDbTokenTypes.LPAREN
            DolphinDbTokenTypes.LBRACE -> DolphinDbTokenTypes.RBRACE
            DolphinDbTokenTypes.RBRACE -> DolphinDbTokenTypes.LBRACE
            DolphinDbTokenTypes.LBRACKET -> DolphinDbTokenTypes.RBRACKET
            DolphinDbTokenTypes.RBRACKET -> DolphinDbTokenTypes.LBRACKET
            DolphinDbTokenTypes.LT -> DolphinDbTokenTypes.GT
            DolphinDbTokenTypes.GT -> DolphinDbTokenTypes.LT
            else -> null
        }

    private fun braceGroupFromScope(scopeName: String): Int =
        when {
            scopeName.contains("bracket.round") -> 0
            scopeName.contains("bracket.curly") -> 1
            scopeName.contains("bracket.square") -> 2
            else -> BraceMatchingUtil.UNDEFINED_TOKEN_GROUP
        }

    companion object {
        private const val LEFT_BRACES = "({[<"
        private const val RIGHT_BRACES = ")}]>"
    }
}

package com.xy.dolphindb.psi

import com.intellij.openapi.editor.Document
import com.intellij.openapi.util.TextRange
import com.intellij.psi.PsiFile

object DolphinDbPsiUtil {
    fun identifierAtOffset(file: PsiFile, offset: Int): String? {
        val range = identifierRangeAtOffset(file, offset) ?: return null
        return range.substring(file.text)
    }

    fun identifierRangeAtOffset(file: PsiFile, offset: Int): TextRange? {
        val text = file.text
        if (offset < 0 || offset > text.length) {
            return null
        }

        var start = if (offset == text.length) offset - 1 else offset
        if (start < 0) {
            return null
        }

        if (start < text.length && !DolphinDbLexer.isIdentifierPart(text[start]) &&
            start > 0 && DolphinDbLexer.isIdentifierPart(text[start - 1])
        ) {
            start--
        }

        while (start > 0 && DolphinDbLexer.isIdentifierPart(text[start - 1])) {
            start--
        }

        var end = start
        while (end < text.length && DolphinDbLexer.isIdentifierPart(text[end])) {
            end++
        }

        if (start >= end) {
            return null
        }
        return TextRange(start, end)
    }

    fun identifierPrefixAtOffset(document: Document, offset: Int): String {
        val text = document.charsSequence
        var start = offset.coerceIn(0, text.length)
        while (start > 0 && DolphinDbLexer.isIdentifierPart(text[start - 1])) {
            start--
        }
        return text.subSequence(start, offset.coerceIn(0, text.length)).toString()
    }
}

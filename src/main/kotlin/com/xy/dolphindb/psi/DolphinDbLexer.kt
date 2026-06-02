package com.xy.dolphindb.psi

import com.intellij.lexer.LexerBase
import com.intellij.psi.TokenType
import com.intellij.psi.tree.IElementType

class DolphinDbLexer : LexerBase() {
    private lateinit var buffer: CharSequence
    private var end = 0
    private var currentPosition = 0
    private var tokenStart = 0
    private var currentTokenType: IElementType? = null

    override fun start(buffer: CharSequence, startOffset: Int, endOffset: Int, initialState: Int) {
        this.buffer = buffer
        this.end = endOffset
        currentPosition = startOffset
        tokenStart = startOffset
        advance()
    }

    override fun getState(): Int = 0

    override fun getTokenType(): IElementType? = currentTokenType

    override fun getTokenStart(): Int = tokenStart

    override fun getTokenEnd(): Int = currentPosition

    override fun getBufferSequence(): CharSequence = buffer

    override fun getBufferEnd(): Int = end

    override fun advance() {
        tokenStart = currentPosition
        if (tokenStart >= end) {
            currentTokenType = null
            return
        }

        val char = buffer[currentPosition]
        when {
            char.isWhitespace() -> {
                while (currentPosition < end && buffer[currentPosition].isWhitespace()) {
                    currentPosition++
                }
                currentTokenType = TokenType.WHITE_SPACE
            }

            char == '/' && currentPosition + 1 < end && buffer[currentPosition + 1] == '/' -> {
                while (currentPosition < end && buffer[currentPosition] != '\n') {
                    currentPosition++
                }
                currentTokenType = DolphinDbTokenTypes.LINE_COMMENT
            }

            char == '/' && currentPosition + 1 < end && buffer[currentPosition + 1] == '*' -> {
                currentPosition += 2
                while (currentPosition < end) {
                    if (
                        buffer[currentPosition] == '*' &&
                        currentPosition + 1 < end &&
                        buffer[currentPosition + 1] == '/'
                    ) {
                        currentPosition += 2
                        break
                    }
                    currentPosition++
                }
                currentTokenType = DolphinDbTokenTypes.BLOCK_COMMENT
            }

            char == '"' || char == '\'' || char == '`' -> {
                val quote = char
                currentPosition++
                while (currentPosition < end && buffer[currentPosition] != quote) {
                    if (buffer[currentPosition] == '\\' && currentPosition + 1 < end) {
                        currentPosition += 2
                    } else {
                        currentPosition++
                    }
                }
                if (currentPosition < end) {
                    currentPosition++
                }
                currentTokenType = DolphinDbTokenTypes.STRING
            }

            isIdentifierStart(char) -> {
                currentPosition++
                while (currentPosition < end && isIdentifierPart(buffer[currentPosition])) {
                    currentPosition++
                }
                currentTokenType = DolphinDbTokenTypes.IDENTIFIER
            }

            char == '(' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.LPAREN
            }

            char == ')' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.RPAREN
            }

            char == '{' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.LBRACE
            }

            char == '}' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.RBRACE
            }

            char == '[' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.LBRACKET
            }

            char == ']' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.RBRACKET
            }

            char == '<' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.LT
            }

            char == '>' -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.GT
            }

            else -> {
                currentPosition++
                currentTokenType = DolphinDbTokenTypes.OTHER
            }
        }
    }

    companion object {
        fun isIdentifierStart(char: Char): Boolean =
            char.isLetter() || char == '_' || char == '!'

        fun isIdentifierPart(char: Char): Boolean =
            char.isLetterOrDigit() || char == '_' || char == '!'
    }
}

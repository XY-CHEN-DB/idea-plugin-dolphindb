package com.xy.dolphindb.psi

import com.intellij.extapi.psi.ASTWrapperPsiElement
import com.intellij.lang.ASTNode
import com.intellij.lang.ParserDefinition
import com.intellij.openapi.project.Project
import com.intellij.psi.FileViewProvider
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiFile
import com.intellij.psi.TokenType
import com.intellij.psi.tree.IFileElementType
import com.intellij.psi.tree.TokenSet
import com.xy.dolphindb.DolphinDbLanguage

class DolphinDbParserDefinition : ParserDefinition {
    override fun createLexer(project: Project) = DolphinDbLexer()

    override fun createParser(project: Project) = DolphinDbParser()

    override fun getFileNodeType(): IFileElementType = FILE

    override fun getWhitespaceTokens(): TokenSet = TokenSet.create(TokenType.WHITE_SPACE)

    override fun getCommentTokens(): TokenSet =
        TokenSet.create(DolphinDbTokenTypes.LINE_COMMENT, DolphinDbTokenTypes.BLOCK_COMMENT)

    override fun getStringLiteralElements(): TokenSet = TokenSet.create(DolphinDbTokenTypes.STRING)

    override fun createElement(node: ASTNode): PsiElement = when (node.elementType) {
        DolphinDbTokenTypes.IDENTIFIER -> DolphinDbIdentifier(node)
        else -> ASTWrapperPsiElement(node)
    }

    override fun createFile(viewProvider: FileViewProvider): PsiFile = DolphinDbFile(viewProvider)

    companion object {
        @JvmField
        val FILE = IFileElementType(DolphinDbLanguage)
    }
}

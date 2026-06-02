package com.xy.dolphindb.editor

import com.intellij.lang.Commenter

/**
 * Enables line/block comment actions (e.g. Ctrl+/ / Ctrl+Shift+/) for `.dos` files.
 * TextMate highlighting does not register a commenter; PSI must provide one.
 */
class DolphinDbCommenter : Commenter {
    override fun getLineCommentPrefix(): String = "//"

    override fun getBlockCommentPrefix(): String = "/*"

    override fun getBlockCommentSuffix(): String = "*/"

    override fun getCommentedBlockCommentPrefix(): String = "/*"

    override fun getCommentedBlockCommentSuffix(): String = "*/"
}

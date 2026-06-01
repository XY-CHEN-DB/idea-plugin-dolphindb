package com.xy.dolphindb

import com.intellij.openapi.fileTypes.LanguageFileType
import javax.swing.Icon

class DolphinDbFileType : LanguageFileType(DolphinDbLanguage) {
    override fun getName(): String = "DolphinDB"

    override fun getDescription(): String = "DolphinDB Script"

    override fun getDefaultExtension(): String = "dos"

    override fun getIcon(): Icon = DolphinDbIcons.FILE

    companion object {
        @JvmField
        val INSTANCE: DolphinDbFileType = DolphinDbFileType()
    }
}

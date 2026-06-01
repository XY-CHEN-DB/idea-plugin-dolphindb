package com.xy.dolphindb.psi

import com.intellij.extapi.psi.PsiFileBase
import com.intellij.openapi.fileTypes.FileType
import com.intellij.psi.FileViewProvider
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.DolphinDbLanguage

class DolphinDbFile(viewProvider: FileViewProvider) : PsiFileBase(viewProvider, DolphinDbLanguage) {
    override fun getFileType(): FileType = DolphinDbFileType.INSTANCE
}

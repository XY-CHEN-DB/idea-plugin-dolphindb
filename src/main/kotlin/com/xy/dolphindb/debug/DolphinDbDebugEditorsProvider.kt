package com.xy.dolphindb.debug

import com.intellij.openapi.editor.EditorFactory
import com.intellij.openapi.fileTypes.FileType
import com.intellij.openapi.project.Project
import com.intellij.xdebugger.XSourcePosition
import com.intellij.xdebugger.evaluation.EvaluationMode
import com.intellij.xdebugger.evaluation.XDebuggerEditorsProvider
import com.xy.dolphindb.DolphinDbFileType

class DolphinDbDebugEditorsProvider : XDebuggerEditorsProvider() {
    override fun getFileType(): FileType = DolphinDbFileType.INSTANCE

    override fun createDocument(
        project: Project,
        text: String,
        position: XSourcePosition?,
        mode: EvaluationMode,
    ): com.intellij.openapi.editor.Document =
        EditorFactory.getInstance().createDocument(text)
}

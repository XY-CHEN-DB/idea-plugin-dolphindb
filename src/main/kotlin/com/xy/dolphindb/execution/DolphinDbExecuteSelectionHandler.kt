package com.xy.dolphindb.execution

import com.intellij.openapi.actionSystem.DataContext
import com.intellij.openapi.editor.Caret
import com.intellij.openapi.editor.Editor
import com.intellij.openapi.editor.actionSystem.EditorActionHandler
import com.xy.dolphindb.DolphinDbFileType

internal class DolphinDbExecuteSelectionHandler : EditorActionHandler() {
    override fun doExecute(editor: Editor, caret: Caret?, dataContext: DataContext) {
        val project = editor.project ?: return
        val script = DolphinDbEditorScriptText.selectedOrLine(editor) ?: return
        DolphinDbExecuteSupport.executeScript(project, script)
    }

    override fun isEnabledForCaret(editor: Editor, caret: Caret, dataContext: DataContext): Boolean =
        isDolphinDbEditor(editor)

    companion object {
        fun isDolphinDbEditor(editor: Editor): Boolean {
            val file = editor.virtualFile ?: return false
            return file.fileType == DolphinDbFileType.INSTANCE || file.extension == "dos"
        }
    }
}

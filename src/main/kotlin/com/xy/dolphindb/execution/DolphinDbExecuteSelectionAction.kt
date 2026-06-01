package com.xy.dolphindb.execution

import com.intellij.openapi.actionSystem.CustomShortcutSet
import com.intellij.openapi.actionSystem.AnActionEvent
import com.intellij.openapi.actionSystem.CommonDataKeys
import com.intellij.openapi.editor.actionSystem.EditorAction
import com.intellij.openapi.project.DumbAware
import com.xy.dolphindb.DolphinDbBundle
import java.awt.event.InputEvent
import java.awt.event.KeyEvent
import javax.swing.KeyStroke

class DolphinDbExecuteSelectionAction :
    EditorAction(DolphinDbExecuteSelectionHandler()),
    DumbAware {
    init {
        templatePresentation.text = DolphinDbBundle.message("execution.action.selection")
        templatePresentation.description = DolphinDbBundle.message("execution.action.selection.description")
        templatePresentation.icon = com.intellij.icons.AllIcons.Actions.Execute
        registerCustomShortcutSet(
            CustomShortcutSet(
                KeyStroke.getKeyStroke(KeyEvent.VK_E, InputEvent.CTRL_DOWN_MASK),
            ),
            null,
        )
    }

    override fun update(event: AnActionEvent) {
        val editor = event.getData(CommonDataKeys.EDITOR)
        event.presentation.isEnabledAndVisible = editor != null && DolphinDbExecuteSelectionHandler.isDolphinDbEditor(editor)
    }
}

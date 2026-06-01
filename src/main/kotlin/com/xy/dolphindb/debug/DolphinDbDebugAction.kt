package com.xy.dolphindb.debug

import com.intellij.openapi.actionSystem.ActionUpdateThread
import com.intellij.openapi.actionSystem.AnAction
import com.intellij.openapi.actionSystem.AnActionEvent
import com.intellij.openapi.actionSystem.CommonDataKeys
import com.intellij.openapi.ui.Messages
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.settings.DolphinDbSettings

class DolphinDbDebugAction : AnAction(
    DolphinDbBundle.message("debug.action.title"),
    DolphinDbBundle.message("debug.action.description"),
    com.intellij.icons.AllIcons.Debugger.Db_set_breakpoint,
) {
    override fun getActionUpdateThread(): ActionUpdateThread = ActionUpdateThread.BGT

    override fun update(event: AnActionEvent) {
        val file = event.getData(CommonDataKeys.EDITOR)?.virtualFile
            ?: event.getData(CommonDataKeys.VIRTUAL_FILE)
        val enabled = file != null && DolphinDbDebugLaunchResolver.isDebuggableFile(file)
        event.presentation.isEnabledAndVisible = enabled
    }

    override fun actionPerformed(event: AnActionEvent) {
        val project = event.project ?: return
        val editor = event.getData(CommonDataKeys.EDITOR)
        val file = editor?.virtualFile
            ?: event.getData(CommonDataKeys.VIRTUAL_FILE)?.takeIf(DolphinDbDebugLaunchResolver::isDebuggableFile)
            ?: return
        if (!ensureConnectionConfigured(project)) {
            return
        }
        val launch = if (editor != null) {
            DolphinDbDebugLaunch.fromEditorForDebug(file, editor)
        } else {
            val text = DolphinDbDebugLaunchResolver.readScriptText(file) ?: return
            DolphinDbDebugLaunch(file, text)
        }
        DolphinDbDebugSessionStarter.startSession(project, launch)
    }

    private fun ensureConnectionConfigured(project: com.intellij.openapi.project.Project): Boolean {
        val connection = DolphinDbSettings.getInstance().activeConnection()
        if (connection.url.isNotBlank()) {
            return true
        }
        Messages.showErrorDialog(
            project,
            DolphinDbBundle.message("debug.error.noUrl"),
            DolphinDbBundle.message("debug.action.title"),
        )
        return false
    }
}

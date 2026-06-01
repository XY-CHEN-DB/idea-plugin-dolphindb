package com.xy.dolphindb.execution

import com.intellij.openapi.components.Service
import com.intellij.openapi.project.Project
import com.intellij.openapi.wm.ToolWindowManager

@Service(Service.Level.PROJECT)
class DolphinDbResultsService(private val project: Project) {
    private val panel = DolphinDbResultsPanel()

    fun panel(): DolphinDbResultsPanel = panel

    fun showResult(result: DolphinDbExecutionResult) {
        panel.showResult(result)
        ToolWindowManager.getInstance(project)
            .getToolWindow(TOOL_WINDOW_ID)
            ?.activate(null)
    }

    companion object {
        const val TOOL_WINDOW_ID = "DolphinDB Results"

        fun getInstance(project: Project): DolphinDbResultsService =
            project.getService(DolphinDbResultsService::class.java)
    }
}

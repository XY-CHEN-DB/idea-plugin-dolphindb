package com.xy.dolphindb.browser

import com.intellij.openapi.actionSystem.ActionManager
import com.intellij.openapi.actionSystem.ActionToolbar
import com.intellij.openapi.actionSystem.DefaultActionGroup
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.project.Project
import com.intellij.openapi.ui.Messages
import com.intellij.openapi.wm.ToolWindow
import com.intellij.ui.ScrollPaneFactory
import com.intellij.ui.content.ContentFactory
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.connection.DolphinDbSessionService
import javax.swing.JPanel

class DolphinDbBrowserPanel(private val project: Project) : JPanel() {
    private val tree = DolphinDbBrowserTree(project)

    init {
        layout = java.awt.BorderLayout()
        val actionGroup = DefaultActionGroup(
            DolphinDbBrowserConnectAction(project, tree),
            DolphinDbBrowserDisconnectAction(project, tree),
            DolphinDbBrowserRefreshAction(project, tree),
        )
        val toolbar = ActionManager.getInstance()
            .createActionToolbar("DolphinDB Browser", actionGroup, true)
        toolbar.targetComponent = tree
        add(toolbar.component, java.awt.BorderLayout.NORTH)
        add(ScrollPaneFactory.createScrollPane(tree), java.awt.BorderLayout.CENTER)
        tree.reloadAsync(project)
    }
}

internal class DolphinDbBrowserConnectAction(
    private val project: Project,
    private val tree: DolphinDbBrowserTree,
) : com.intellij.openapi.actionSystem.AnAction(
    DolphinDbBundle.message("browser.action.connect"),
    null,
    com.intellij.icons.AllIcons.Actions.Execute,
) {
    override fun actionPerformed(e: com.intellij.openapi.actionSystem.AnActionEvent) {
        ApplicationManager.getApplication().executeOnPooledThread {
            val result = DolphinDbSessionService.getInstance(project).connect()
            ApplicationManager.getApplication().invokeLater {
                if (!result.success) {
                    Messages.showWarningDialog(
                        project,
                        result.message,
                        DolphinDbBundle.message("browser.title"),
                    )
                }
                tree.reloadAsync(project)
            }
        }
    }
}

internal class DolphinDbBrowserDisconnectAction(
    private val project: Project,
    private val tree: DolphinDbBrowserTree,
) : com.intellij.openapi.actionSystem.AnAction(
    DolphinDbBundle.message("browser.action.disconnect"),
    null,
    com.intellij.icons.AllIcons.Actions.Suspend,
) {
    override fun actionPerformed(e: com.intellij.openapi.actionSystem.AnActionEvent) {
        DolphinDbSessionService.getInstance(project).disconnect()
        tree.reloadAsync(project)
    }

    override fun update(e: com.intellij.openapi.actionSystem.AnActionEvent) {
        e.presentation.isEnabled = DolphinDbSessionService.getInstance(project).isConnected()
    }
}

internal class DolphinDbBrowserRefreshAction(
    private val project: Project,
    private val tree: DolphinDbBrowserTree,
) : com.intellij.openapi.actionSystem.AnAction(
    DolphinDbBundle.message("browser.action.refresh"),
    null,
    com.intellij.icons.AllIcons.Actions.Refresh,
) {
    override fun actionPerformed(e: com.intellij.openapi.actionSystem.AnActionEvent) {
        tree.reloadAsync(project)
    }

    override fun update(e: com.intellij.openapi.actionSystem.AnActionEvent) {
        e.presentation.isEnabled = DolphinDbSessionService.getInstance(project).isConnected()
    }
}

class DolphinDbBrowserToolWindowFactory : com.intellij.openapi.wm.ToolWindowFactory {
    override fun createToolWindowContent(project: Project, toolWindow: ToolWindow) {
        val panel = DolphinDbBrowserPanel(project)
        val content = ContentFactory.getInstance().createContent(panel, "", false)
        toolWindow.contentManager.addContent(content)
    }
}

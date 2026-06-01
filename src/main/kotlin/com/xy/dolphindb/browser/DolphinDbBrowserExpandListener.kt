package com.xy.dolphindb.browser

import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.project.Project
import com.intellij.ui.treeStructure.Tree
import com.xy.dolphindb.DolphinDbBundle
import javax.swing.event.TreeExpansionEvent
import javax.swing.event.TreeExpansionListener
import javax.swing.tree.DefaultMutableTreeNode
import javax.swing.tree.TreePath

internal class DolphinDbBrowserExpandListener(
    private val project: Project,
    private val tree: DolphinDbBrowserTree,
) : TreeExpansionListener {
    override fun treeExpanded(event: TreeExpansionEvent) {
        val node = event.path.lastPathComponent as? DefaultMutableTreeNode ?: return
        val item = node.userObject as? DolphinDbBrowserTreeItem ?: return
        if (!item.lazy || !hasLoadingPlaceholder(node)) {
            return
        }
        ApplicationManager.getApplication().executeOnPooledThread {
            val children = DolphinDbBrowserDataLoader.loadChildren(project, item)
            ApplicationManager.getApplication().invokeLater {
                tree.setChildren(node, children)
                tree.expandPath(event.path)
            }
        }
    }

    override fun treeCollapsed(event: TreeExpansionEvent) = Unit

    private fun hasLoadingPlaceholder(node: DefaultMutableTreeNode): Boolean {
        if (node.childCount != 1) {
            return false
        }
        val first = node.getChildAt(0) as? DefaultMutableTreeNode ?: return false
        val firstItem = first.userObject as? DolphinDbBrowserTreeItem ?: return false
        return firstItem.kind == DolphinDbBrowserNodeKind.MESSAGE && firstItem.label == LOADING_LABEL
    }

    companion object {
        const val LOADING_LABEL = "..."
    }
}

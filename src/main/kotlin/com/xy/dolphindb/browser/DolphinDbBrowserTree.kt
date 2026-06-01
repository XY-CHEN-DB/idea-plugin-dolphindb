package com.xy.dolphindb.browser

import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.project.Project
import com.intellij.ui.treeStructure.Tree
import com.xy.dolphindb.DolphinDbBundle
import javax.swing.tree.DefaultMutableTreeNode
import javax.swing.tree.TreePath

internal class DolphinDbBrowserTree(private val project: Project) : Tree() {
    private val rootNode = DefaultMutableTreeNode(
        DolphinDbBrowserTreeItem(
            kind = DolphinDbBrowserNodeKind.ROOT,
            label = "DolphinDB",
            payload = DolphinDbBrowserPayload.None,
        ),
    )

    init {
        model = javax.swing.tree.DefaultTreeModel(rootNode)
        cellRenderer = DolphinDbBrowserTreeRenderer()
        isRootVisible = false
        showsRootHandles = true
        addTreeExpansionListener(DolphinDbBrowserExpandListener(project, this))
    }

    fun reloadAsync(project: Project) {
        ApplicationManager.getApplication().executeOnPooledThread {
            val items = DolphinDbBrowserDataLoader.loadRoot(project)
            ApplicationManager.getApplication().invokeLater {
                setRootItems(items)
            }
        }
    }

    fun setRootItems(items: List<DolphinDbBrowserTreeItem>) {
        rootNode.removeAllChildren()
        items.forEach { item ->
            rootNode.add(createNode(item))
        }
        (model as javax.swing.tree.DefaultTreeModel).reload(rootNode)
        expandPath(TreePath(rootNode.path))
    }

    fun setChildren(node: DefaultMutableTreeNode, items: List<DolphinDbBrowserTreeItem>) {
        node.removeAllChildren()
        if (items.isEmpty()) {
            node.add(
                createLeafNode(
                    DolphinDbBrowserTreeItem(
                        kind = DolphinDbBrowserNodeKind.MESSAGE,
                        label = DolphinDbBundle.message("browser.empty"),
                        lazy = false,
                    ),
                ),
            )
        } else {
            items.forEach { item ->
                node.add(createNode(item))
            }
        }
        (model as javax.swing.tree.DefaultTreeModel).nodeStructureChanged(node)
    }

    private fun createNode(item: DolphinDbBrowserTreeItem): BrowserTreeNode {
        val node = BrowserTreeNode(item)
        if (item.lazy) {
            node.add(
                createLeafNode(
                    DolphinDbBrowserTreeItem(
                        kind = DolphinDbBrowserNodeKind.MESSAGE,
                        label = DolphinDbBrowserExpandListener.LOADING_LABEL,
                        lazy = false,
                    ),
                ),
            )
        }
        return node
    }

    private fun createLeafNode(item: DolphinDbBrowserTreeItem): BrowserTreeNode =
        BrowserTreeNode(item)
}

private class BrowserTreeNode(item: DolphinDbBrowserTreeItem) : DefaultMutableTreeNode(item) {
    override fun toString(): String =
        (userObject as? DolphinDbBrowserTreeItem)?.let(DolphinDbBrowserDisplay::displayText).orEmpty()
}

internal class DolphinDbBrowserTreeRenderer : com.intellij.ui.ColoredTreeCellRenderer() {
    override fun customizeCellRenderer(
        tree: javax.swing.JTree,
        value: Any?,
        selected: Boolean,
        expanded: Boolean,
        leaf: Boolean,
        row: Int,
        hasFocus: Boolean,
    ) {
        val item = treeItem(value) ?: return
        icon = iconFor(item)
        append(DolphinDbBrowserDisplay.primaryText(item), labelAttributes(item))
        DolphinDbBrowserDisplay.secondaryText(item)?.let { secondary ->
            append("  ($secondary)", com.intellij.ui.SimpleTextAttributes.GRAYED_ATTRIBUTES)
        }
        toolTipText = tooltipFor(item)
    }

    private fun treeItem(value: Any?): DolphinDbBrowserTreeItem? = when (value) {
        is BrowserTreeNode -> value.userObject as? DolphinDbBrowserTreeItem
        is DefaultMutableTreeNode -> value.userObject as? DolphinDbBrowserTreeItem
        is DolphinDbBrowserTreeItem -> value
        else -> null
    }

    private fun tooltipFor(item: DolphinDbBrowserTreeItem): String? =
        DolphinDbBrowserDisplay.secondaryText(item)

    private fun labelAttributes(item: DolphinDbBrowserTreeItem) =
        when (item.kind) {
            DolphinDbBrowserNodeKind.STATUS -> com.intellij.ui.SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES
            DolphinDbBrowserNodeKind.MESSAGE -> com.intellij.ui.SimpleTextAttributes.GRAYED_ATTRIBUTES
            else -> com.intellij.ui.SimpleTextAttributes.SIMPLE_CELL_ATTRIBUTES
        }

    private fun iconFor(item: DolphinDbBrowserTreeItem) = when (item.kind) {
        DolphinDbBrowserNodeKind.SECTION -> com.intellij.icons.AllIcons.Nodes.Folder
        DolphinDbBrowserNodeKind.CATALOG -> com.intellij.icons.AllIcons.Nodes.ModuleGroup
        DolphinDbBrowserNodeKind.SCHEMA,
        DolphinDbBrowserNodeKind.DFS_DATABASE,
        -> com.intellij.icons.AllIcons.Nodes.Folder
        DolphinDbBrowserNodeKind.TABLE -> com.intellij.icons.AllIcons.Nodes.DataTables
        DolphinDbBrowserNodeKind.COLUMN -> com.intellij.icons.AllIcons.Nodes.Field
        DolphinDbBrowserNodeKind.STATUS -> if (item.detail == DolphinDbBundle.message("browser.status.connected")) {
            com.intellij.icons.AllIcons.General.InspectionsOK
        } else {
            com.intellij.icons.AllIcons.General.Warning
        }
        else -> null
    }
}

internal data class DolphinDbBrowserTreeItem(
    val kind: DolphinDbBrowserNodeKind,
    val label: String,
    val detail: String = "",
    val payload: DolphinDbBrowserPayload = DolphinDbBrowserPayload.None,
    val lazy: Boolean = kind != DolphinDbBrowserNodeKind.COLUMN &&
        kind != DolphinDbBrowserNodeKind.MESSAGE &&
        kind != DolphinDbBrowserNodeKind.STATUS,
)

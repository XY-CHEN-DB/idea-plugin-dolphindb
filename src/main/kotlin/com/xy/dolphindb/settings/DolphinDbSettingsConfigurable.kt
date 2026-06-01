package com.xy.dolphindb.settings

import com.intellij.openapi.options.BoundConfigurable
import com.intellij.openapi.ui.DialogPanel
import com.intellij.ui.CollectionListModel
import com.intellij.ui.ToolbarDecorator
import com.intellij.ui.components.JBList
import com.intellij.ui.components.JBPasswordField
import com.intellij.ui.components.JBTextField
import com.intellij.ui.dsl.builder.Align
import com.intellij.ui.dsl.builder.panel
import com.intellij.openapi.project.ProjectManager
import com.xy.dolphindb.DolphinDbBundle
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.progress.ProgressManager
import com.intellij.openapi.progress.Task
import com.intellij.openapi.ui.Messages
import com.xy.dolphindb.connection.DolphinDbConnectionTester
import com.xy.dolphindb.connection.DolphinDbSessionService
import java.util.UUID
import javax.swing.DefaultListCellRenderer
import javax.swing.JCheckBox
import javax.swing.JLabel
import javax.swing.JPanel

class DolphinDbSettingsConfigurable : BoundConfigurable(DolphinDbBundle.message("settings.connections.title")) {
    private val settings = DolphinDbSettings.getInstance()
    private val listModel = CollectionListModel<DolphinDbConnectionState>()
    private var activeConnectionId: String = settings.activeConnectionId()

    private lateinit var connectionList: JBList<DolphinDbConnectionState>
    private lateinit var activeLabel: JLabel
    private lateinit var nameField: JBTextField
    private lateinit var urlField: JBTextField
    private lateinit var usernameField: JBTextField
    private lateinit var passwordField: JBPasswordField
    private lateinit var autologinBox: JCheckBox
    private lateinit var keepAliveIntervalField: JBTextField
    private lateinit var nodePathField: JBTextField
    private var lastSelectedIndex: Int = -1
    private var suppressSelectionHandler = false

    override fun createPanel(): DialogPanel = panel {
        group(DolphinDbBundle.message("settings.connections.title")) {
            row {
                cell(createConnectionListPanel())
                    .align(Align.FILL)
            }
            row {
                activeLabel = label("").component
            }
            row(DolphinDbBundle.message("settings.connection.name")) {
                nameField = textField().component
            }
            row(DolphinDbBundle.message("settings.connection.url")) {
                urlField = textField().component
            }
            row(DolphinDbBundle.message("settings.connection.username")) {
                usernameField = textField().component
            }
            row(DolphinDbBundle.message("settings.connection.password")) {
                passwordField = passwordField().component
                comment(DolphinDbBundle.message("settings.connection.password.hint"))
            }
            row {
                autologinBox = checkBox(DolphinDbBundle.message("settings.connection.autologin")).component
            }
            row(DolphinDbBundle.message("settings.connection.keepAliveInterval")) {
                keepAliveIntervalField = textField().component
                comment(DolphinDbBundle.message("settings.connection.keepAliveInterval.comment"))
            }
            row {
                button(DolphinDbBundle.message("settings.connection.testConnect")) {
                    testSelectedConnection()
                }
            }
        }
        group(DolphinDbBundle.message("settings.lsp.group")) {
            row(DolphinDbBundle.message("settings.lsp.nodePath")) {
                nodePathField = textField().component
                comment(DolphinDbBundle.message("settings.lsp.nodePath.comment"))
            }
        }
    }.apply {
        reset()
    }

    private fun createConnectionListPanel(): JPanel {
        connectionList = JBList(listModel).apply {
            cellRenderer = object : DefaultListCellRenderer() {
                override fun getListCellRendererComponent(
                    list: javax.swing.JList<*>,
                    value: Any?,
                    index: Int,
                    isSelected: Boolean,
                    cellHasFocus: Boolean,
                ): java.awt.Component {
                    super.getListCellRendererComponent(list, value, index, isSelected, cellHasFocus)
                    val connection = value as? DolphinDbConnectionState
                    if (connection != null) {
                        val prefix = if (connection.id == activeConnectionId) "★ " else "  "
                        val label = displayName(connection)
                        text = prefix + label
                    }
                    return this
                }
            }
            selectionModel.addListSelectionListener { e ->
                if (e.valueIsAdjusting || suppressSelectionHandler) return@addListSelectionListener
                val newIndex = connectionList.selectedIndex
                if (lastSelectedIndex >= 0 && lastSelectedIndex != newIndex) {
                    saveConnectionAtIndex(lastSelectedIndex)
                }
                lastSelectedIndex = newIndex
                if (newIndex >= 0) {
                    loadSelectedConnection()
                }
            }
        }
        return ToolbarDecorator.createDecorator(connectionList)
            .setAddAction {
                val connection = DolphinDbConnectionState(
                    id = UUID.randomUUID().toString(),
                    name = if (listModel.isEmpty) "default" else "connection-${listModel.size + 1}",
                )
                listModel.add(connection)
                connectionList.selectedIndex = listModel.size - 1
                if (listModel.size == 1) {
                    activeConnectionId = connection.id
                }
                loadSelectedConnection()
            }
            .setRemoveAction {
                val index = connectionList.selectedIndex
                if (index < 0 || listModel.size <= 1) {
                    return@setRemoveAction
                }
                val removed = listModel.getElementAt(index)
                DolphinDbCredentials.removePassword(removed.id)
                listModel.remove(index)
                if (removed.id == activeConnectionId) {
                    activeConnectionId = listModel.getElementAt(0).id
                }
                connectionList.selectedIndex = index.coerceAtMost(listModel.size - 1)
                loadSelectedConnection()
            }
            .addExtraAction(
                object : com.intellij.openapi.actionSystem.AnAction(
                    DolphinDbBundle.message("settings.connection.setActive"),
                    null,
                    com.intellij.icons.AllIcons.Nodes.Favorite,
                ) {
                    override fun actionPerformed(e: com.intellij.openapi.actionSystem.AnActionEvent) {
                        val selected = connectionList.selectedValue ?: return
                        activeConnectionId = selected.id
                        updateActiveLabel()
                        connectionList.repaint()
                    }
                },
            )
            .createPanel()
    }

    override fun reset() {
        suppressSelectionHandler = true
        try {
            listModel.removeAll()
            settings.connections().forEach { listModel.add(it.copy(password = "")) }
            activeConnectionId = settings.activeConnectionId()
            val index = listModel.items.indexOfFirst { it.id == activeConnectionId }.coerceAtLeast(0)
            connectionList.selectedIndex = index
            lastSelectedIndex = index
            loadSelectedConnection()
            nodePathField.text = settings.nodePath
            keepAliveIntervalField.text = settings.keepAliveIntervalSeconds.toString()
        } finally {
            suppressSelectionHandler = false
        }
    }

    override fun isModified(): Boolean {
        if (nodePathField.text.trim() != settings.nodePath) {
            return true
        }
        if (parseKeepAliveInterval() != settings.keepAliveIntervalSeconds) {
            return true
        }
        if (activeConnectionId != settings.activeConnectionId()) {
            return true
        }
        if (!connectionsEqualIgnoringPassword(listModel.items, settings.connections())) {
            return true
        }
        return isDetailModified()
    }

    override fun apply() {
        saveConnectionAtIndex(connectionList.selectedIndex)
        val previousConnections = settings.connections()
        val previousActiveId = settings.activeConnectionId()
        settings.updateConnections(listModel.items, activeConnectionId)
        settings.nodePath = nodePathField.text.trim()
        settings.keepAliveIntervalSeconds = parseKeepAliveInterval()
        if (previousActiveId != activeConnectionId || !connectionsEqualIgnoringPassword(listModel.items, previousConnections)) {
            disconnectOpenProjects()
        } else {
            restartKeepAliveOnOpenProjects()
        }
    }

    private fun restartKeepAliveOnOpenProjects() {
        for (project in ProjectManager.getInstance().openProjects) {
            DolphinDbSessionService.getInstance(project).restartKeepAliveIfConnected()
        }
    }

    private fun parseKeepAliveInterval(): Int =
        keepAliveIntervalField.text.trim().toIntOrNull()?.coerceAtLeast(0) ?: settings.keepAliveIntervalSeconds

    private fun disconnectOpenProjects() {
        for (project in ProjectManager.getInstance().openProjects) {
            DolphinDbSessionService.getInstance(project).disconnect()
        }
    }

    private fun loadSelectedConnection() {
        val selected = connectionList.selectedValue
        if (selected == null) {
            nameField.text = ""
            urlField.text = ""
            usernameField.text = ""
            passwordField.text = ""
            autologinBox.isSelected = false
            updateActiveLabel()
            return
        }
        nameField.text = selected.name
        urlField.text = selected.url
        usernameField.text = selected.username
        passwordField.text = ""
        autologinBox.isSelected = selected.autologin
        updateActiveLabel()
    }

    private fun saveSelectedConnection() {
        saveSelectedConnectionQuietly()
    }

    private fun saveSelectedConnectionQuietly() {
        saveConnectionAtIndex(connectionList.selectedIndex)
    }

    private fun saveConnectionAtIndex(index: Int) {
        if (index < 0 || index >= listModel.size) {
            return
        }
        val connectionId = listModel.getElementAt(index).id
        val password = String(passwordField.password).ifBlank {
            DolphinDbCredentials.getPassword(connectionId)
        }
        listModel.setElementAt(
            listModel.getElementAt(index).copy(
                name = nameField.text.trim(),
                url = urlField.text.trim(),
                username = usernameField.text.trim(),
                password = password,
                autologin = autologinBox.isSelected,
            ),
            index,
        )
    }

    private fun isDetailModified(): Boolean {
        val selected = connectionList.selectedValue ?: return false
        val typedPassword = String(passwordField.password)
        val storedPassword = DolphinDbCredentials.getPassword(selected.id)
        val passwordModified = typedPassword.isNotEmpty() && typedPassword != storedPassword
        return nameField.text.trim() != selected.name ||
            urlField.text.trim() != selected.url ||
            usernameField.text.trim() != selected.username ||
            passwordModified ||
            autologinBox.isSelected != selected.autologin
    }

    private fun connectionsEqualIgnoringPassword(
        a: List<DolphinDbConnectionState>,
        b: List<DolphinDbConnectionState>,
    ): Boolean {
        if (a.size != b.size) return false
        return a.zip(b).all { (left, right) ->
            left.id == right.id &&
                left.name == right.name &&
                left.url == right.url &&
                left.username == right.username &&
                left.autologin == right.autologin
        }
    }

    private fun updateActiveLabel() {
        val selected = connectionList.selectedValue
        activeLabel.text = when {
            selected == null -> ""
            selected.id == activeConnectionId ->
                DolphinDbBundle.message("settings.connection.activeHint", displayName(selected))
            else -> DolphinDbBundle.message("settings.connection.inactiveHint")
        }
    }

    private fun displayName(connection: DolphinDbConnectionState): String =
        connection.name.ifBlank { connection.url }.ifBlank { connection.id }

    private fun testSelectedConnection() {
        saveSelectedConnectionQuietly()
        val profile = currentConnectionFromFields()
        ProgressManager.getInstance().run(
            object : Task.Modal(
                ProjectManager.getInstance().openProjects.firstOrNull()
                    ?: ProjectManager.getInstance().defaultProject,
                DolphinDbBundle.message("settings.connection.testConnect.progress"),
                true,
            ) {
                private lateinit var result: DolphinDbSessionService.ConnectResult

                override fun run(indicator: com.intellij.openapi.progress.ProgressIndicator) {
                    indicator.isIndeterminate = true
                    result = DolphinDbConnectionTester.test(profile)
                }

                override fun onSuccess() {
                    ApplicationManager.getApplication().invokeLater {
                        if (result.success) {
                            Messages.showInfoMessage(
                                result.message,
                                DolphinDbBundle.message("settings.connection.testConnect"),
                            )
                        } else {
                            Messages.showErrorDialog(
                                result.message,
                                DolphinDbBundle.message("settings.connection.testConnect"),
                            )
                        }
                    }
                }
            },
        )
    }

    private fun currentConnectionFromFields(): DolphinDbConnectionState {
        val selected = connectionList.selectedValue
        val connectionId = selected?.id ?: UUID.randomUUID().toString()
        val password = String(passwordField.password).ifBlank {
            DolphinDbCredentials.getPassword(connectionId)
        }
        return DolphinDbConnectionState(
            id = connectionId,
            name = nameField.text.trim().ifBlank { "default" },
            url = urlField.text.trim(),
            username = usernameField.text.trim(),
            password = password,
            autologin = autologinBox.isSelected,
        )
    }
}

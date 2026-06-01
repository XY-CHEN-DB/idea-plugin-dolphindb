package com.xy.dolphindb.settings

import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.components.BaseState
import com.intellij.openapi.components.SimplePersistentStateComponent
import com.intellij.openapi.components.State
import com.intellij.openapi.components.Storage
import java.util.UUID

@State(name = "DolphinDbSettings", storages = [Storage("dolphindb.xml")])
class DolphinDbSettings : SimplePersistentStateComponent<DolphinDbSettings.State>(State()) {
    /** Node.js executable path for LSP only. Empty = use PATH. */
    var nodePath: String
        get() = state.nodePath.orEmpty()
        set(value) {
            state.nodePath = value
        }

    /** Interval in seconds for keep-alive pings on the persistent session; 0 disables. */
    var keepAliveIntervalSeconds: Int
        get() = state.keepAliveIntervalSeconds.coerceAtLeast(0)
        set(value) {
            state.keepAliveIntervalSeconds = value.coerceAtLeast(0)
        }

    fun connections(): List<DolphinDbConnectionState> {
        migrateLegacyIfNeeded()
        normalizeConnections()
        return state.connections.map { it.toConnection() }
    }

    fun activeConnection(): DolphinDbConnectionState {
        migrateLegacyIfNeeded()
        val connections = state.connections.map { it.toConnection() }
        if (connections.isEmpty()) {
            return defaultConnection()
        }
        val activeId = state.activeConnectionId
        return connections.firstOrNull { it.id == activeId } ?: connections.first()
    }

    /** @deprecated use [activeConnection] */
    fun primaryConnection(): DolphinDbConnectionState = activeConnection()

    fun activeConnectionId(): String = activeConnection().id

    fun setActiveConnectionId(id: String) {
        state.activeConnectionId = id
    }

    fun updateConnections(connections: List<DolphinDbConnectionState>, activeId: String) {
        val previousIds = state.connections.mapNotNull { it.id }.toSet()
        val newIds = connections.map { it.id }.toSet()
        previousIds.filter { it !in newIds }.forEach { DolphinDbCredentials.removePassword(it) }

        state.connections.clear()
        connections.forEach { connection ->
            state.connections.add(ConnectionEntryState.from(connection))
        }
        state.activeConnectionId = activeId
        clearLegacyFields()
    }

    /** @deprecated use [updateConnections] */
    fun updatePrimaryConnection(connection: DolphinDbConnectionState) {
        val connections = connections().toMutableList()
        val index = connections.indexOfFirst { it.id == connection.id }
        if (index >= 0) {
            connections[index] = connection
        } else if (connections.isEmpty()) {
            connections.add(connection)
        } else {
            connections[0] = connection
        }
        updateConnections(connections, connection.id)
    }

    private fun migrateLegacyIfNeeded() {
        if (state.connections.isNotEmpty()) {
            return
        }
        val legacyUrl = state.connectionUrl.orEmpty()
        if (legacyUrl.isBlank()) {
            val defaultEntry = ConnectionEntryState.from(defaultConnection())
            state.connections.add(defaultEntry)
            state.activeConnectionId = defaultEntry.id
            return
        }
        val entryId = UUID.randomUUID().toString()
        val entry = ConnectionEntryState().apply {
            id = entryId
            name = state.connectionName.orEmpty().ifBlank { "default" }
            url = legacyUrl
            username = state.username.orEmpty()
            autologin = state.autologin
        }
        state.connections.add(entry)
        state.activeConnectionId = entry.id
        clearLegacyFields()
    }

    private fun clearLegacyFields() {
        state.connectionName = null
        state.connectionUrl = null
        state.username = null
        state.autologin = false
    }

    /** Repair entries whose name/url were wiped by an earlier selection-listener bug. */
    private fun normalizeConnections() {
        if (state.connections.isEmpty()) {
            return
        }
        state.connections.forEachIndexed { index, entry ->
            if (entry.id.isNullOrBlank()) {
                entry.id = UUID.randomUUID().toString()
            }
            if (entry.name.isNullOrBlank()) {
                entry.name = if (index == 0) "default" else "connection-${index + 1}"
            }
            if (entry.url.isNullOrBlank()) {
                entry.url = "ws://127.0.0.1:8848"
            }
            if (entry.username.isNullOrBlank()) {
                entry.username = "admin"
            }
        }
    }

    private fun defaultConnection(): DolphinDbConnectionState =
        DolphinDbConnectionState(
            id = UUID.randomUUID().toString(),
            name = "default",
            url = "ws://127.0.0.1:8848",
            autologin = true,
            username = "admin",
            password = "123456",
        )

    class State : BaseState() {
        var nodePath: String? by string()
        var keepAliveIntervalSeconds: Int by property(60)
        var activeConnectionId: String? by string()
        var connections by list<ConnectionEntryState>()

        // Legacy single-connection fields (migrated on read)
        var connectionName: String? by string("default")
        var connectionUrl: String? by string("ws://127.0.0.1:8848")
        var autologin: Boolean by property(true)
        var username: String? by string("admin")
    }

    companion object {
        fun getInstance(): DolphinDbSettings = ApplicationManager.getApplication().getService(DolphinDbSettings::class.java)
    }
}

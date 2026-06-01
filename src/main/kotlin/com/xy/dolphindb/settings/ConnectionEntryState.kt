package com.xy.dolphindb.settings

import com.intellij.openapi.components.BaseState
import java.util.UUID

class ConnectionEntryState : BaseState() {
    var id: String? by string()
    var name: String? by string()
    var url: String? by string()
    var username: String? by string()
    var autologin: Boolean by property(true)

    fun toConnection(): DolphinDbConnectionState {
        val connectionId = id.orEmpty().ifBlank { UUID.randomUUID().toString() }
        val base = DolphinDbConnectionState(
            id = connectionId,
            name = name.orEmpty(),
            url = url.orEmpty(),
            autologin = autologin,
            username = username.orEmpty(),
        )
        return base.copy(password = DolphinDbCredentials.resolvePassword(base))
    }

    companion object {
        fun from(connection: DolphinDbConnectionState): ConnectionEntryState {
            DolphinDbCredentials.setPassword(connection.id, connection.username, connection.password)
            return ConnectionEntryState().apply {
                id = connection.id
                name = connection.name
                url = connection.url
                autologin = connection.autologin
                username = connection.username
            }
        }
    }
}

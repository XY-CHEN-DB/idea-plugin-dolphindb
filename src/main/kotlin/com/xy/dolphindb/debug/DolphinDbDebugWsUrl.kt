package com.xy.dolphindb.debug

import com.xy.dolphindb.connection.DolphinDbConnectionEndpoint

internal object DolphinDbDebugWsUrl {
    fun fromSettingsUrl(url: String): String {
        val trimmed = url.trim()
        if (trimmed.startsWith("ws://", ignoreCase = true) ||
            trimmed.startsWith("wss://", ignoreCase = true)
        ) {
            return trimmed
        }
        val endpoint = DolphinDbConnectionEndpoint.parse(trimmed)
            ?: return trimmed
        return "ws://${endpoint.host}:${endpoint.port}"
    }
}

package com.xy.dolphindb.connection

import java.net.URI

internal object DolphinDbConnectionEndpoint {
    data class Endpoint(val host: String, val port: Int)

    fun parse(url: String): Endpoint? {
        val trimmed = url.trim()
        if (trimmed.isEmpty()) {
            return null
        }
        return when {
            trimmed.startsWith("ws://", ignoreCase = true) ||
                trimmed.startsWith("wss://", ignoreCase = true) -> {
                val uri = URI(trimmed)
                val host = uri.host ?: return null
                val port = if (uri.port > 0) uri.port else 8848
                Endpoint(host, port)
            }
            trimmed.contains(":") -> {
                val lastColon = trimmed.lastIndexOf(':')
                val host = trimmed.substring(0, lastColon).trim()
                val port = trimmed.substring(lastColon + 1).trim().toIntOrNull() ?: return null
                Endpoint(host, port)
            }
            else -> Endpoint(trimmed, 8848)
        }
    }
}

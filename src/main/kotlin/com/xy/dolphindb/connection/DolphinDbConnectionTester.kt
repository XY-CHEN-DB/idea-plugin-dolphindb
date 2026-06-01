package com.xy.dolphindb.connection

import com.xy.dolphindb.settings.DolphinDbConnectionState
import com.xxdb.DBConnection

object DolphinDbConnectionTester {
    fun test(profile: DolphinDbConnectionState): DolphinDbSessionService.ConnectResult {
        if (profile.url.isBlank()) {
            return DolphinDbSessionService.ConnectResult(
                false,
                "Server URL is empty",
            )
        }
        val endpoint = DolphinDbConnectionEndpoint.parse(profile.url)
            ?: return DolphinDbSessionService.ConnectResult(
                false,
                "Invalid server URL: ${profile.url}",
            )

        val credentials = DolphinDbConnectionAuth.resolve(profile)
            ?: return DolphinDbSessionService.ConnectResult(
                false,
                "Password is not configured. Enter the password in Settings and click Apply.",
            )

        val db = DBConnection()
        return try {
            if (!DolphinDbConnectionAuth.connect(db, endpoint.host, endpoint.port, credentials)) {
                DolphinDbSessionService.ConnectResult(
                    false,
                    "Failed to connect to ${endpoint.host}:${endpoint.port}",
                )
            } else {
                DolphinDbSessionService.ConnectResult(
                    true,
                    "Connected to ${profile.name.ifBlank { "default" }} " +
                        "(${endpoint.host}:${endpoint.port}) as ${credentials.username}",
                )
            }
        } catch (error: Exception) {
            DolphinDbSessionService.ConnectResult(
                false,
                error.message ?: "Connection failed",
            )
        } finally {
            runCatching { db.close() }
        }
    }
}

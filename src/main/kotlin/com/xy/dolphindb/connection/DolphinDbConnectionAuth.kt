package com.xy.dolphindb.connection

import com.intellij.openapi.diagnostic.logger
import com.xy.dolphindb.settings.DolphinDbConnectionState
import com.xy.dolphindb.settings.DolphinDbCredentials
import com.xxdb.DBConnection

internal object DolphinDbConnectionAuth {
    private val LOG = logger<DolphinDbConnectionAuth>()

    data class Credentials(
        val username: String,
        val password: String,
    )

    fun resolve(settings: DolphinDbConnectionState): Credentials? {
        val username = settings.username.trim()
        val password = DolphinDbCredentials.resolvePassword(settings)
        if (username.isNotEmpty() && password.isEmpty()) {
            return null
        }
        return Credentials(username, password)
    }

    fun connect(db: DBConnection, host: String, port: Int, credentials: Credentials): Boolean {
        if (!db.connect(host, port, credentials.username, credentials.password)) {
            return false
        }
        ensureAuthenticated(db, credentials)
        return true
    }

    fun ensureAuthenticated(db: DBConnection, credentials: Credentials) {
        if (credentials.username.isBlank() || credentials.password.isBlank()) {
            return
        }
        val currentUser = currentUsername(db)
        if (currentUser != null &&
            !currentUser.equals("guest", ignoreCase = true) &&
            currentUser.equals(credentials.username, ignoreCase = true)
        ) {
            return
        }
        try {
            db.login(credentials.username, credentials.password, false)
        } catch (error: Exception) {
            LOG.warn("DolphinDB login failed for user ${credentials.username}", error)
            throw error
        }
        verifyLoggedInAs(db, credentials)
    }

    fun verifyLoggedInAs(db: DBConnection, credentials: Credentials) {
        val loggedInAs = currentUsername(db)
            ?: throw IllegalStateException(
                "Could not verify DolphinDB login. Check username and password in Settings → Tools → DolphinDB.",
            )
        if (loggedInAs.equals("guest", ignoreCase = true)) {
            throw IllegalStateException(
                "Connected as guest (no privileges). Open Settings → Tools → DolphinDB, enter the password, click Apply, then Disconnect and Connect again.",
            )
        }
        if (!loggedInAs.equals(credentials.username, ignoreCase = true)) {
            throw IllegalStateException(
                "Logged in as \"$loggedInAs\" but Settings expects \"${credentials.username}\". Disconnect and Connect again after updating credentials.",
            )
        }
    }

    internal fun currentUsername(db: DBConnection): String? =
        runCatching {
            DolphinDbJavaEntityConverter.toStringList(db.run("getCurrentSessionAndUser()")).getOrNull(1)
        }.getOrNull()
}

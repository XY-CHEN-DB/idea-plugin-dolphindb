package com.xy.dolphindb.settings

import com.intellij.credentialStore.CredentialAttributes
import com.intellij.credentialStore.Credentials
import com.intellij.credentialStore.generateServiceName
import com.intellij.ide.passwordSafe.PasswordSafe

object DolphinDbCredentials {
    private fun attributes(connectionId: String) =
        CredentialAttributes(generateServiceName("DolphinDB", connectionId))

    fun getPassword(connectionId: String): String =
        PasswordSafe.instance.getPassword(attributes(connectionId)).orEmpty()

    fun setPassword(connectionId: String, username: String, password: String) {
        if (password.isBlank()) return
        PasswordSafe.instance.set(attributes(connectionId), Credentials(username, password))
    }

    fun removePassword(connectionId: String) {
        PasswordSafe.instance.set(attributes(connectionId), null)
    }

    /**
     * Returns stored password, or seeds the default dev password for admin when nothing is stored yet.
     */
    fun resolvePassword(connection: DolphinDbConnectionState): String {
        val stored = getPassword(connection.id).ifBlank { connection.password.trim() }
        if (stored.isNotBlank()) {
            return stored
        }
        if (connection.username.trim().equals("admin", ignoreCase = true)) {
            val defaultPassword = "123456"
            setPassword(connection.id, connection.username.trim(), defaultPassword)
            return defaultPassword
        }
        return ""
    }
}

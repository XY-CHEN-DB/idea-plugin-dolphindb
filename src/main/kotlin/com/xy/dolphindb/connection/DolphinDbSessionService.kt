package com.xy.dolphindb.connection

import com.intellij.openapi.Disposable
import com.intellij.openapi.components.Service
import com.intellij.openapi.diagnostic.logger
import com.intellij.openapi.project.Project
import com.xy.dolphindb.settings.DolphinDbConnectionState
import com.xy.dolphindb.settings.DolphinDbSettings
import com.xxdb.DBConnection
import java.util.concurrent.Executors
import java.util.concurrent.ScheduledFuture
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicReference

@Service(Service.Level.PROJECT)
class DolphinDbSessionService(private val project: Project) : Disposable {
    private val connectionRef = AtomicReference<DBConnection?>(null)
    private val connectedFlag = AtomicBoolean(false)
    private val connectionLock = Any()
    private val keepAliveExecutor = Executors.newSingleThreadScheduledExecutor { runnable ->
        Thread(runnable, "DolphinDB-KeepAlive-${project.name}")
    }
    private var keepAliveTask: ScheduledFuture<*>? = null

    fun isConnected(): Boolean = connectedFlag.get() && activeConnection() != null

    fun connect(profile: DolphinDbConnectionState? = null): ConnectResult {
        val settings = profile ?: DolphinDbSettings.getInstance().activeConnection()
        if (settings.url.isBlank()) {
            return ConnectResult(false, "Server URL is not configured in Settings → Tools → DolphinDB")
        }
        val endpoint = DolphinDbConnectionEndpoint.parse(settings.url)
            ?: return ConnectResult(false, "Invalid server URL: ${settings.url}")

        synchronized(connectionLock) {
            closeConnectionQuietly()
            val credentials = DolphinDbConnectionAuth.resolve(settings)
                ?: return ConnectResult(
                    false,
                    "Password is not configured for \"${settings.name.ifBlank { "default" }}\". " +
                        "Open Settings → Tools → DolphinDB, enter the password, and click Apply.",
                )
            val db = DBConnection()
            return try {
                if (!DolphinDbConnectionAuth.connect(db, endpoint.host, endpoint.port, credentials)) {
                    runCatching { db.close() }
                    ConnectResult(false, "Failed to connect to ${endpoint.host}:${endpoint.port}")
                } else {
                    val loggedInAs = DolphinDbConnectionAuth.currentUsername(db) ?: credentials.username
                    connectionRef.set(db)
                    connectedFlag.set(true)
                    scheduleKeepAlive()
                    ConnectResult(
                        true,
                        "Connected to ${settings.name.ifBlank { endpoint.host }} " +
                            "(${endpoint.host}:${endpoint.port}) as $loggedInAs",
                    )
                }
            } catch (error: Exception) {
                runCatching { db.close() }
                LOG.warn("DolphinDB connect failed", error)
                ConnectResult(false, error.message ?: "Connection failed")
            }
        }
    }

    fun disconnect() {
        synchronized(connectionLock) {
            closeConnectionQuietly()
        }
    }

    fun restartKeepAliveIfConnected() {
        synchronized(connectionLock) {
            if (connectedFlag.get() && activeConnection() != null) {
                scheduleKeepAlive()
            }
        }
    }

    fun <T> withConnectionOutcome(block: (DBConnection) -> T): DolphinDbConnectionOutcome<T> {
        synchronized(connectionLock) {
            val connection = activeConnection()
            if (connection == null || !connectedFlag.get()) {
                return DolphinDbConnectionOutcome.NotConnected
            }
            val settings = DolphinDbSettings.getInstance().activeConnection()
            val credentials = DolphinDbConnectionAuth.resolve(settings)
                ?: return DolphinDbConnectionOutcome.Error(
                    IllegalStateException(
                        "Password is not configured for \"${settings.name.ifBlank { "default" }}\". " +
                            "Open Settings → Tools → DolphinDB, enter the password, and click Apply.",
                    ),
                )
            return try {
                DolphinDbConnectionAuth.ensureAuthenticated(connection, credentials)
                DolphinDbConnectionOutcome.Success(block(connection))
            } catch (error: Exception) {
                LOG.warn("DolphinDB session operation failed", error)
                DolphinDbConnectionOutcome.Error(error)
            }
        }
    }

    fun <T> withConnection(block: (DBConnection) -> T): T? =
        when (val outcome = withConnectionOutcome(block)) {
            is DolphinDbConnectionOutcome.Success -> outcome.value
            else -> null
        }

    fun <T> withConnectionOrEphemeral(block: (DBConnection) -> T): T? {
        when (val outcome = withConnectionOutcome(block)) {
            is DolphinDbConnectionOutcome.Success -> return outcome.value
            is DolphinDbConnectionOutcome.Error -> return null
            DolphinDbConnectionOutcome.NotConnected -> Unit
        }
        return runEphemeral(block)
    }

    override fun dispose() {
        synchronized(connectionLock) {
            closeConnectionQuietly()
        }
        keepAliveExecutor.shutdownNow()
    }

    private fun activeConnection(): DBConnection? = connectionRef.get()

    private fun closeConnectionQuietly() {
        cancelKeepAlive()
        connectedFlag.set(false)
        connectionRef.getAndSet(null)?.let { connection ->
            runCatching { connection.close() }
        }
    }

    private fun scheduleKeepAlive() {
        cancelKeepAlive()
        val intervalSec = DolphinDbSettings.getInstance().keepAliveIntervalSeconds
        if (intervalSec <= 0) {
            return
        }
        keepAliveTask = keepAliveExecutor.scheduleWithFixedDelay(
            { sendKeepAlive() },
            intervalSec.toLong(),
            intervalSec.toLong(),
            TimeUnit.SECONDS,
        )
    }

    private fun cancelKeepAlive() {
        keepAliveTask?.cancel(false)
        keepAliveTask = null
    }

    private fun sendKeepAlive() {
        synchronized(connectionLock) {
            if (!connectedFlag.get()) {
                return
            }
            val connection = connectionRef.get() ?: return
            val settings = DolphinDbSettings.getInstance().activeConnection()
            val credentials = DolphinDbConnectionAuth.resolve(settings) ?: return
            try {
                DolphinDbConnectionAuth.ensureAuthenticated(connection, credentials)
                connection.run("1")
            } catch (error: Exception) {
                LOG.warn("DolphinDB keep-alive failed; closing session", error)
                closeConnectionQuietly()
            }
        }
    }

    private fun <T> runEphemeral(block: (DBConnection) -> T): T? {
        val settings = DolphinDbSettings.getInstance().activeConnection()
        if (settings.url.isBlank()) {
            return null
        }
        val endpoint = DolphinDbConnectionEndpoint.parse(settings.url) ?: return null
        val credentials = DolphinDbConnectionAuth.resolve(settings) ?: return null
        val db = DBConnection()
        return try {
            if (!DolphinDbConnectionAuth.connect(db, endpoint.host, endpoint.port, credentials)) {
                return null
            }
            block(db)
        } catch (error: Exception) {
            LOG.warn("DolphinDB ephemeral connection failed", error)
            null
        } finally {
            runCatching { db.close() }
        }
    }

    data class ConnectResult(
        val success: Boolean,
        val message: String,
    )

    companion object {
        private val LOG = logger<DolphinDbSessionService>()

        fun getInstance(project: Project): DolphinDbSessionService =
            project.getService(DolphinDbSessionService::class.java)
    }
}

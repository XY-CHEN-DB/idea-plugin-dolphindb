package com.xy.dolphindb.debug

import com.google.gson.JsonElement
import com.intellij.openapi.diagnostic.logger
import java.net.URI
import java.net.http.HttpClient
import java.net.http.WebSocket
import java.nio.ByteBuffer
import java.util.concurrent.CompletableFuture
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicInteger
import java.util.function.Consumer

internal typealias DebugEventHandler = (DebugReceiveMessage) -> Unit

/**
 * WebSocket debug client (protocol `debug`). Serializes RPC calls like the VS Code [Remote] class.
 */
internal class DolphinDbDebugRemote(
    private val url: String,
    private val username: String,
    private val password: String,
    private val onError: Consumer<Throwable>,
) {
    companion object {
        private const val DEFAULT_RPC_TIMEOUT_MS = 8_000L
    }

    private val log = logger<DolphinDbDebugRemote>()
    private val client = HttpClient.newBuilder().build()
    private val nextId = AtomicInteger(0)
    private val handlers = ConcurrentHashMap<Int, (DebugReceiveMessage) -> Unit>()
    private val pendingCalls = ConcurrentHashMap<Int, String>()
    private val events = ConcurrentHashMap<String, DebugEventHandler>()

    @Volatile
    private var webSocket: WebSocket? = null

    @Volatile
    private var terminated = false

    @Volatile
    private var callChain: CompletableFuture<*> = CompletableFuture.completedFuture(null)

    fun terminate() {
        terminated = true
        webSocket?.sendClose(WebSocket.NORMAL_CLOSURE, "bye")
        webSocket = null
        handlers.clear()
        pendingCalls.clear()
    }

    fun on(event: String, handler: DebugEventHandler) {
        events[event] = handler
    }

    fun connect(): CompletableFuture<Void> {
        if (terminated) {
            return CompletableFuture.failedFuture(IllegalStateException("Debug session terminated"))
        }
        if (webSocket != null) {
            return CompletableFuture.completedFuture(null)
        }
        val future = CompletableFuture<Void>()
        client.newWebSocketBuilder()
            .subprotocols("debug")
            .buildAsync(URI(url.trim()), object : WebSocket.Listener {
                override fun onOpen(socket: WebSocket) {
                    webSocket = socket
                    socket.request(1)
                    when {
                        shouldLogin() -> {
                            call<JsonElement>("login", listOf(username.trim(), password))
                                .whenComplete { _, error ->
                                    if (error != null) {
                                        future.completeExceptionally(error)
                                    } else {
                                        future.complete(null)
                                    }
                                }
                        }
                        username.isNotBlank() -> {
                            future.completeExceptionally(
                                IllegalStateException(
                                    "Password is not configured. Open Settings → Tools → DolphinDB, enter the password, and click Apply.",
                                ),
                            )
                        }
                        else -> future.complete(null)
                    }
                }

                override fun onBinary(socket: WebSocket, data: ByteBuffer, last: Boolean): CompletableFuture<*>? {
                    val bytes = ByteArray(data.remaining())
                    data.get(bytes)
                    handleIncoming(bytes)
                    socket.request(1)
                    return null
                }

                override fun onError(socket: WebSocket, error: Throwable) {
                    onError.accept(error)
                    if (!future.isDone) {
                        future.completeExceptionally(error)
                    }
                }

                override fun onClose(socket: WebSocket, statusCode: Int, reason: String): CompletableFuture<*>? {
                    webSocket = null
                    return null
                }
            })
        return future
    }

    private fun shouldLogin(): Boolean = username.isNotBlank() && password.isNotEmpty()

    fun <T> call(func: String, args: Any? = null): CompletableFuture<T?> {
        if (terminated) {
            return CompletableFuture.completedFuture(null)
        }
        val result = CompletableFuture<T?>()
        val scheduled = callChain.handle { _, _ -> null }.thenCompose {
            connect().thenCompose {
                invokeCall(func, args, result)
            }
        }
        callChain = scheduled
        scheduled.whenComplete { _, error ->
            if (error != null && !result.isDone) {
                result.completeExceptionally(error)
            }
        }
        return result
    }

    private fun <T> invokeCall(func: String, args: Any?, result: CompletableFuture<T?>): CompletableFuture<Void> {
        val id = nextId.getAndIncrement()
        val callDone = CompletableFuture<Void>()
        pendingCalls[id] = func
        CompletableFuture.delayedExecutor(DEFAULT_RPC_TIMEOUT_MS, TimeUnit.MILLISECONDS).execute {
            if (handlers.remove(id) != null) {
                pendingCalls.remove(id)
                val timeout = IllegalStateException("$func timed out after ${DEFAULT_RPC_TIMEOUT_MS}ms")
                if (!result.isDone) {
                    result.completeExceptionally(timeout)
                }
                callDone.completeExceptionally(timeout)
            }
        }
        handlers[id] = { message ->
            handlers.remove(id)
            pendingCalls.remove(id)
            if (message.message == "OK") {
                @Suppress("UNCHECKED_CAST")
                result.complete(message.data as? T)
                callDone.complete(null)
            } else {
                val error = IllegalStateException("$func: ${message.message}")
                result.completeExceptionally(error)
                callDone.completeExceptionally(error)
            }
        }
        sendPacked(id, func, args).whenComplete { _, error ->
            if (error != null) {
                handlers.remove(id)
                pendingCalls.remove(id)
                if (!result.isDone) {
                    result.completeExceptionally(error)
                }
                callDone.completeExceptionally(error)
            }
        }
        return callDone
    }

    private fun sendPacked(id: Int, func: String, args: Any?): CompletableFuture<Void> {
        val socket = webSocket
            ?: return CompletableFuture.failedFuture(
                IllegalStateException(
                    "Debug server connection failed. Ensure DolphinDB server is >= 2.00.10.1 or 1.30.22.1",
                ),
            )
        return try {
            val payload = DolphinDbDebugDictCodec.packMessage(id, func, args)
            socket.sendBinary(ByteBuffer.wrap(payload), true)
            CompletableFuture.completedFuture(null)
        } catch (error: Exception) {
            handlers.remove(id)
            CompletableFuture.failedFuture(error)
        }
    }

    private fun handleIncoming(bytes: ByteArray) {
        val message = DolphinDbDebugMessageParser.parse(bytes) ?: return
        log.debug("debug message: id=${message.id} event=${message.event} status=${message.message}")
        try {
            val event = message.event
            if (event != null) {
                if (message.message != "OK" && event != "ERROR" && event != "SYNTAX") {
                    throw IllegalStateException(message.message)
                }
                val handler = events[event]
                    ?: throw IllegalStateException("Unknown event from server: $event")
                handler(message)
            } else {
                val id = message.id ?: throw IllegalStateException("Message without id or event")
                if (message.message != "OK") {
                    val func = pendingCalls[id]
                    val detail = if (func != null) "$func: ${message.message}" else message.message
                    throw IllegalStateException(detail)
                }
                val handler = handlers[id]
                    ?: throw IllegalStateException("Unknown function id from server: $id")
                handler(message)
            }
        } catch (error: Exception) {
            if (!terminated) {
                log.warn("Handle debug message failed", error)
                onError.accept(error)
            }
        }
    }
}

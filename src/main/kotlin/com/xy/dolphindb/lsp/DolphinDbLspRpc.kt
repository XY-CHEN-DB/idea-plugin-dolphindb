package com.xy.dolphindb.lsp

import org.eclipse.lsp4j.jsonrpc.Endpoint
import org.eclipse.lsp4j.jsonrpc.services.EndpointProxy
import org.eclipse.lsp4j.services.LanguageServer
import java.lang.reflect.Proxy
import java.util.concurrent.CompletableFuture

internal object DolphinDbLspRpc {
    fun request(server: LanguageServer, method: String, params: Any?): CompletableFuture<*> {
        val endpoint = endpointOf(server)
        return endpoint.request(method, params)
    }

    private fun endpointOf(server: LanguageServer): Endpoint {
        val handler = Proxy.getInvocationHandler(server)
        check(handler is EndpointProxy) { "Unexpected LanguageServer proxy: ${handler.javaClass.name}" }
        val field = EndpointProxy::class.java.getDeclaredField("delegate")
        field.isAccessible = true
        return field.get(handler) as Endpoint
    }
}

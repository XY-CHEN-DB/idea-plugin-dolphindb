package com.xy.dolphindb.lsp

import com.google.gson.Gson
import com.google.gson.JsonElement
import com.intellij.openapi.project.Project
import com.intellij.platform.lsp.api.Lsp4jClient
import com.intellij.platform.lsp.api.LspServerNotificationsHandler
import com.xy.dolphindb.docs.BuiltinCompletionBridge
import org.eclipse.lsp4j.jsonrpc.services.JsonRequest
import org.eclipse.lsp4j.jsonrpc.services.JsonSegment
import java.util.concurrent.CompletableFuture

class DolphinDbLspClient(
    private val project: Project,
    handler: LspServerNotificationsHandler,
) : Lsp4jClient(handler), DolphinDbLspClientRequests {
    private val gson = Gson()
    private val bridge = LspBridgeService.getInstance(project)

    @JsonRequest("lsp/getFiles")
    fun lspGetFiles(): CompletableFuture<List<LspBridgeService.DdbUri>> =
        CompletableFuture.completedFuture(bridge.getDosFiles())

    @JsonRequest("lsp/getBuiltinCompletions")
    fun lspGetBuiltinCompletions(request: BuiltinCompletionBridge.Request): CompletableFuture<List<BuiltinCompletionBridge.BuiltinCompletionItem>> =
        CompletableFuture.completedFuture(BuiltinCompletionBridge.completions(request.query))

    @JsonRequest("ddb/getAllCatalogs")
    fun ddbGetAllCatalogs(): CompletableFuture<List<String>> =
        bridge.handleDatabaseRequest("ddb/getAllCatalogs", null).thenApply { decodeList(it) }

    @JsonRequest("ddb/getClusterDFSDatabases")
    fun ddbGetClusterDfsDatabases(): CompletableFuture<List<String>> =
        bridge.handleDatabaseRequest("ddb/getClusterDFSDatabases", null).thenApply { decodeList(it) }

    @JsonRequest("ddb/getSharedTables")
    fun ddbGetSharedTables(): CompletableFuture<List<String>> =
        bridge.handleDatabaseRequest("ddb/getSharedTables", null).thenApply { decodeList(it) }

    @JsonRequest("ddb/listTables")
    fun ddbListTables(dbUrl: String): CompletableFuture<List<String>> =
        bridge.handleDatabaseRequest("ddb/listTables", gson.toJsonTree(dbUrl)).thenApply { decodeList(it) }

    @JsonRequest("ddb/schema")
    fun ddbSchema(dbHandle: String): CompletableFuture<Map<String, Any?>> =
        bridge.handleDatabaseRequest("ddb/schema", gson.toJsonTree(dbHandle)).thenApply { decodeMap(it) }

    @JsonRequest("ddb/getSchemaByCatalog")
    fun ddbGetSchemaByCatalog(catalog: String): CompletableFuture<List<String>> =
        bridge.handleDatabaseRequest("ddb/getSchemaByCatalog", gson.toJsonTree(catalog)).thenApply { decodeList(it) }

    @JsonRequest("ddb/getSchemaTables")
    fun ddbGetSchemaTables(catalogAndSchema: List<String>): CompletableFuture<List<String>> =
        bridge.handleDatabaseRequest("ddb/getSchemaTables", gson.toJsonTree(catalogAndSchema)).thenApply { decodeList(it) }

    private fun decodeList(element: JsonElement?): List<String> {
        if (element == null || element.isJsonNull) {
            return emptyList()
        }
        return gson.fromJson(element, Array<String>::class.java)?.toList().orEmpty()
    }

    @Suppress("UNCHECKED_CAST")
    private fun decodeMap(element: JsonElement?): Map<String, Any?> {
        if (element == null || element.isJsonNull) {
            return emptyMap()
        }
        return gson.fromJson(element, Map::class.java) as? Map<String, Any?> ?: emptyMap()
    }
}

@JsonSegment("dolphindb")
interface DolphinDbLspClientRequests

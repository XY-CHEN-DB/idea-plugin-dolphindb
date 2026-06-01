package com.xy.dolphindb.connection

import com.google.gson.Gson
import com.google.gson.JsonElement
import com.intellij.openapi.components.Service
import com.intellij.openapi.diagnostic.logger
import com.intellij.openapi.project.Project
import com.xy.dolphindb.settings.DolphinDbSettings
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors

@Service(Service.Level.PROJECT)
class MinimalConnectionService(private val project: Project) {
    private val gson = Gson()
    private val executor = Executors.newSingleThreadExecutor { runnable ->
        Thread(runnable, "DolphinDB-Java-Bridge")
    }

    fun handleLspRequest(method: String, params: JsonElement?): CompletableFuture<JsonElement?> {
        val connection = DolphinDbSettings.getInstance().activeConnection()
        if (connection.url.isBlank()) {
            return CompletableFuture.completedFuture(defaultEmpty(method))
        }

        return CompletableFuture.supplyAsync({
            val session = DolphinDbSessionService.getInstance(project)
            session.withConnectionOrEphemeral { db ->
                runBridgeRequest(db, method, params)
            } ?: defaultEmpty(method)
        }, executor)
    }

    private fun runBridgeRequest(
        db: com.xxdb.DBConnection,
        method: String,
        params: JsonElement?,
    ): JsonElement? = try {
        when (method) {
            "ddb/getAllCatalogs" -> gson.toJsonTree(DolphinDbJavaGateway.fetchCatalogs(db))
            "ddb/getClusterDFSDatabases" -> gson.toJsonTree(DolphinDbJavaGateway.fetchDfsDatabases(db))
            "ddb/getSharedTables" -> gson.toJsonTree(DolphinDbJavaGateway.fetchSharedTables(db))
            "ddb/listTables" -> {
                val dbUrl = jsonString(params) ?: return defaultEmpty(method)
                gson.toJsonTree(DolphinDbJavaGateway.fetchTables(db, dbUrl))
            }
            "ddb/schema" -> {
                val handle = jsonString(params) ?: return defaultEmpty(method)
                gson.toJsonTree(DolphinDbJavaEntityConverter.toSchemaMap(db.run("schema($handle)")))
            }
            "ddb/getSchemaByCatalog" -> {
                val catalog = jsonString(params) ?: return defaultEmpty(method)
                gson.toJsonTree(DolphinDbJavaGateway.fetchSchemasByCatalog(db, catalog).map { it.schema })
            }
            "ddb/getSchemaTables" -> {
                val parts = jsonStringList(params)
                if (parts.size < 2) {
                    defaultEmpty(method)
                } else {
                    val entry = DolphinDbJavaGateway.fetchSchemasByCatalog(db, parts[0])
                        .firstOrNull { it.schema == parts[1] }
                    if (entry == null) {
                        defaultEmpty(method)
                    } else {
                        gson.toJsonTree(DolphinDbJavaGateway.fetchTables(db, entry.dbUrl))
                    }
                }
            }
            else -> defaultEmpty(method)
        }
    } catch (error: Exception) {
        LOG.warn("DolphinDB Java bridge error for $method", error)
        defaultEmpty(method)
    }

    private fun jsonString(params: JsonElement?): String? {
        if (params == null || params.isJsonNull) {
            return null
        }
        return if (params.isJsonPrimitive) params.asString else params.toString().trim('"')
    }

    private fun jsonStringList(params: JsonElement?): List<String> {
        if (params == null || params.isJsonNull || !params.isJsonArray) {
            return emptyList()
        }
        return params.asJsonArray.mapNotNull { element ->
            if (element.isJsonNull) null else element.asString
        }
    }

    private fun defaultEmpty(method: String): JsonElement? = when (method) {
        "ddb/schema" -> gson.toJsonTree(emptyMap<String, Any?>())
        else -> gson.toJsonTree(emptyList<String>())
    }

    companion object {
        private val LOG = logger<MinimalConnectionService>()

        fun getInstance(project: Project): MinimalConnectionService =
            project.getService(MinimalConnectionService::class.java)
    }
}

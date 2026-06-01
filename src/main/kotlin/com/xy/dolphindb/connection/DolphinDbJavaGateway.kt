package com.xy.dolphindb.connection

import com.intellij.openapi.diagnostic.logger
import com.xxdb.DBConnection
import com.xxdb.data.BasicBoolean
import com.xxdb.data.BasicTable
import com.xxdb.data.Entity
import com.xxdb.data.Vector

data class DolphinDbSchemaEntry(
    val schema: String,
    val dbUrl: String,
)

data class DolphinDbColumnDef(
    val name: String,
    val typeString: String,
)

object DolphinDbJavaGateway {
    private val LOG = logger<DolphinDbJavaGateway>()

    /** Catalog API — optional on older servers; never throw. */
    fun fetchCatalogs(db: DBConnection): List<String> =
        runOptionalListApi("getAllCatalogs") {
            DolphinDbJavaEntityConverter.toStringList(db.run("getAllCatalogs()"))
        }

    fun fetchDfsDatabases(db: DBConnection): List<String> {
        val entity = runCatching { db.run("getClusterDFSDatabases()") }
            .recoverCatching { db.run("getClusterDFSDatabases", emptyList()) }
            .getOrThrow()
        val parsed = DolphinDbJavaEntityConverter.toStringList(entity)
        if (parsed.isEmpty() && entity != null) {
            val rows = (entity as? Vector)?.rows()
            LOG.warn(
                "getClusterDFSDatabases returned ${entity.javaClass.simpleName}" +
                    (rows?.let { " with $it row(s)" } ?: "") +
                    " but no database paths were parsed",
            )
        }
        return parsed
    }

    fun fetchSharedTables(db: DBConnection): List<String> {
        val entity = db.run("objs", listOf(BasicBoolean(true)))
        val table = entity as? BasicTable ?: return emptyList()
        val formColumn = table.getColumn("form") as? Vector ?: return emptyList()
        val nameColumn = table.getColumn("name") as? Vector ?: return emptyList()
        return buildList {
            for (i in 0 until table.rows()) {
                if (formColumn.getString(i).equals("TABLE", ignoreCase = true)) {
                    add(nameColumn.getString(i))
                }
            }
        }
    }

    /** Catalog API — optional on older servers; never throw. */
    fun fetchSchemasByCatalog(db: DBConnection, catalog: String): List<DolphinDbSchemaEntry> =
        runOptionalListApi("getSchemaByCatalog") {
            val entity = db.run("getSchemaByCatalog", listOf(basicString(catalog)))
            val table = entity as? BasicTable ?: return@runOptionalListApi emptyList()
            val schemaColumn = table.getColumn("schema") as? Vector ?: return@runOptionalListApi emptyList()
            val dbUrlColumn = table.getColumn("dbUrl") as? Vector ?: return@runOptionalListApi emptyList()
            buildList {
                for (i in 0 until table.rows()) {
                    add(
                        DolphinDbSchemaEntry(
                            schema = schemaColumn.getString(i),
                            dbUrl = dbUrlColumn.getString(i),
                        ),
                    )
                }
            }
        }

    fun fetchTables(db: DBConnection, dbUrl: String): List<String> {
        val entity = db.run("listTables", listOf(basicString(dbUrl)))
        return tableColumnStrings(entity, "tableName")
    }

    fun fetchColumnDefs(db: DBConnection, schemaHandle: String): List<DolphinDbColumnDef> {
        val entity = db.run("schema($schemaHandle)")
        return DolphinDbJavaEntityConverter.toColumnDefs(entity)
    }

    fun schemaHandleForDfsTable(dbPath: String, tableName: String): String {
        val normalizedPath = dbPath.removeSuffix("/")
        return """loadTable("$normalizedPath", "$tableName")"""
    }

    fun schemaHandleForSharedTable(tableName: String): String = tableName

    private fun tableColumnStrings(entity: Entity, column: String): List<String> {
        val table = entity as? BasicTable ?: return DolphinDbJavaEntityConverter.toStringList(entity)
        val vector = runCatching { table.getColumn(column) as Vector }.getOrNull() ?: return emptyList()
        return (0 until vector.rows()).map { vector.getString(it) }
    }

    private inline fun <T> runOptionalListApi(apiName: String, block: () -> List<T>): List<T> =
        try {
            block()
        } catch (error: Exception) {
            LOG.info("$apiName unavailable or failed (${error.message}); returning empty list")
            emptyList()
        }
}

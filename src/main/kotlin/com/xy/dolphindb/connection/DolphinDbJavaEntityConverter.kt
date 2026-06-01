package com.xy.dolphindb.connection

import com.xxdb.data.BasicAnyVector
import com.xxdb.data.BasicDictionary
import com.xxdb.data.BasicString
import com.xxdb.data.BasicStringVector
import com.xxdb.data.BasicTable
import com.xxdb.data.Entity
import com.xxdb.data.Scalar
import com.xxdb.data.Vector
import com.xy.dolphindb.connection.DolphinDbColumnDef

internal object DolphinDbJavaEntityConverter {
    fun toStringList(entity: Entity?): List<String> {
        if (entity == null) {
            return emptyList()
        }
        return when (entity) {
            is BasicTable -> tableToStringList(entity)
            is BasicStringVector -> vectorToStringList(entity)
            is BasicAnyVector -> anyVectorToStringList(entity)
            is Vector -> vectorToStringList(entity)
            is BasicString -> listOf(entity.getString())
            is Scalar -> listOf(entity.getString())
            else -> emptyList()
        }
    }

    fun toSchemaMap(entity: Entity?): Map<String, Any?> {
        val columnDefs = toColumnDefs(entity)
        return mapOf(
            "colDefs" to columnDefs.map { mapOf("name" to it.name, "typeString" to it.typeString) },
        )
    }

    fun toColumnDefs(entity: Entity?): List<DolphinDbColumnDef> {
        if (entity == null) {
            return emptyList()
        }
        val colDefs = when (entity) {
            is BasicDictionary -> entity.get("colDefs")
            else -> entity
        }
        return when (colDefs) {
            is BasicTable -> tableToColumnDefs(colDefs)
            else -> emptyList()
        }
    }

    private fun tableToColumnDefs(table: BasicTable): List<DolphinDbColumnDef> {
        val names = columnStrings(table, "name")
        if (names.isEmpty()) {
            return emptyList()
        }
        val types = if (hasColumn(table, "typeString")) {
            columnStrings(table, "typeString")
        } else {
            emptyList()
        }
        return names.mapIndexed { index, name ->
            DolphinDbColumnDef(
                name = name,
                typeString = types.getOrElse(index) { "" },
            )
        }
    }

    private fun tableToStringList(table: BasicTable): List<String> {
        for (column in PREFERRED_COLUMNS) {
            if (hasColumn(table, column)) {
                return columnStrings(table, column)
            }
        }
        if (table.columns() == 1) {
            return columnStrings(table, table.getColumnName(0))
        }
        return emptyList()
    }

    private fun vectorToStringList(vector: Vector): List<String> =
        (0 until vector.rows()).mapNotNull { index ->
            runCatching { vector.getString(index) }.getOrNull()
        }

    private fun anyVectorToStringList(vector: BasicAnyVector): List<String> =
        (0 until vector.rows()).mapNotNull { index ->
            runCatching {
                when (val value = vector.get(index)) {
                    is BasicString -> value.getString()
                    is Scalar -> value.getString()
                    else -> value?.toString()
                }
            }.getOrNull()
        }

    private fun columnStrings(table: BasicTable, column: String): List<String> {
        val vector = table.getColumn(column) as? Vector ?: return emptyList()
        return vectorToStringList(vector)
    }

    private fun hasColumn(table: BasicTable, column: String): Boolean =
        runCatching { table.getColumn(column) }.isSuccess

    private val PREFERRED_COLUMNS = listOf("name", "tableName", "schema", "catalog")
}

internal fun basicString(value: String): BasicString = BasicString(value)

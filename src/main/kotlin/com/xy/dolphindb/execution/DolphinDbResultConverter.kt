package com.xy.dolphindb.execution

import com.xxdb.data.BasicTable
import com.xxdb.data.Entity
import com.xxdb.data.Vector
import com.xy.dolphindb.DolphinDbBundle

internal object DolphinDbResultConverter {
    private const val MAX_TABLE_ROWS = 1000

    fun toExecutionPayload(entity: Entity?): Pair<String, DolphinDbTableGrid?> {
        if (entity == null) {
            return "" to null
        }
        return when {
            entity.isTable -> formatTable(entity as BasicTable)
            entity.isVector -> formatVector(entity) to null
            entity.isMatrix -> "${entity.getDataForm()} ${entity.rows()} x ${entity.columns()}" to null
            entity.isDictionary -> "${entity.getDataForm()}" to null
            entity.isChart -> "${entity.getDataForm()}" to null
            else -> entity.getString().orEmpty() to null
        }
    }

    private fun formatTable(table: BasicTable): Pair<String, DolphinDbTableGrid> {
        val columnCount = table.columns()
        val columnNames = (0 until columnCount).map { table.getColumnName(it) }
        val totalRows = table.rows()
        val visibleRows = minOf(totalRows, MAX_TABLE_ROWS)
        val rows = buildList {
            for (row in 0 until visibleRows) {
                add(
                    (0 until columnCount).map { column ->
                        cellString(table, column, row)
                    },
                )
            }
        }
        val summary = if (totalRows > MAX_TABLE_ROWS) {
            DolphinDbBundle.message("execution.table.summary.truncated", totalRows, columnCount, MAX_TABLE_ROWS)
        } else {
            DolphinDbBundle.message("execution.table.summary", totalRows, columnCount)
        }
        return summary to DolphinDbTableGrid(
            columnNames = columnNames,
            rows = rows,
            totalRows = totalRows,
            truncated = totalRows > MAX_TABLE_ROWS,
        )
    }

    private fun formatVector(entity: Entity): String {
        if (entity !is Vector) {
            return entity.getString().orEmpty()
        }
        val limit = minOf(entity.rows(), 20)
        val values = (0 until limit).mapNotNull { index ->
            runCatching { entity.getString(index) }.getOrNull()
        }
        val suffix = if (entity.rows() > limit) " ..." else ""
        return values.joinToString(", ", prefix = "[", postfix = "]$suffix")
    }

    private fun cellString(table: BasicTable, column: Int, row: Int): String {
        val vector = runCatching { table.getColumn(column) as Vector }.getOrNull() ?: return ""
        return runCatching { vector.getString(row) }.getOrDefault("")
    }
}

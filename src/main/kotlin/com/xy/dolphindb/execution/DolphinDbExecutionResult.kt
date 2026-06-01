package com.xy.dolphindb.execution

data class DolphinDbTableGrid(
    val columnNames: List<String>,
    val rows: List<List<String>>,
    val totalRows: Int,
    val truncated: Boolean,
)

sealed class DolphinDbExecutionResult {
    data class Success(
        val scriptPreview: String,
        val elapsedMs: Long,
        val consoleText: String,
        val table: DolphinDbTableGrid?,
    ) : DolphinDbExecutionResult()

    data class Failure(
        val scriptPreview: String,
        val elapsedMs: Long,
        val message: String,
        val consoleText: String = "",
    ) : DolphinDbExecutionResult()
}

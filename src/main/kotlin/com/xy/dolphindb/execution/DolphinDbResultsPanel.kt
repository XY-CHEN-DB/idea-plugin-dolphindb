package com.xy.dolphindb.execution

import com.intellij.ui.JBColor
import com.intellij.ui.ScrollPaneFactory
import com.intellij.ui.components.JBLabel
import com.intellij.ui.table.JBTable
import com.intellij.util.ui.JBUI
import java.awt.BorderLayout
import java.awt.Font
import javax.swing.JPanel
import javax.swing.JSplitPane
import javax.swing.JTextArea
import javax.swing.table.DefaultTableModel

class DolphinDbResultsPanel : JPanel(BorderLayout()) {
    private val statusLabel = JBLabel(" ")
    private val consoleArea = JTextArea().apply {
        isEditable = false
        lineWrap = true
        wrapStyleWord = true
        font = Font(Font.MONOSPACED, Font.PLAIN, 12)
        border = JBUI.Borders.empty(8)
    }
    private val tableModel = DefaultTableModel()
    private val resultTable = JBTable(tableModel).apply {
        setShowGrid(true)
        tableHeader.reorderingAllowed = false
        autoResizeMode = JBTable.AUTO_RESIZE_OFF
    }
    private val splitPane = JSplitPane(JSplitPane.VERTICAL_SPLIT).apply {
        topComponent = ScrollPaneFactory.createScrollPane(consoleArea)
        bottomComponent = ScrollPaneFactory.createScrollPane(resultTable)
        // Console / log strip: keep small by default (~1/3 of the old 180px default).
        resizeWeight = CONSOLE_RESIZE_WEIGHT
        dividerLocation = consoleDividerPx()
    }

    init {
        border = JBUI.Borders.empty(4)
        statusLabel.border = JBUI.Borders.empty(4, 8)
        add(statusLabel, BorderLayout.NORTH)
        add(splitPane, BorderLayout.CENTER)
        clear()
    }

    fun showResult(result: DolphinDbExecutionResult) {
        when (result) {
            is DolphinDbExecutionResult.Success -> showSuccess(result)
            is DolphinDbExecutionResult.Failure -> showFailure(result)
        }
    }

    fun clear() {
        statusLabel.text = " "
        consoleArea.text = ""
        consoleArea.foreground = JBColor.foreground()
        tableModel.setDataVector(emptyArray<Array<Any>>(), emptyArray<Any>())
        setTableVisible(false)
    }

    private fun showSuccess(result: DolphinDbExecutionResult.Success) {
        statusLabel.text = formatStatus(result.scriptPreview, result.elapsedMs, success = true)
        consoleArea.text = result.consoleText
        consoleArea.foreground = JBColor.foreground()
        val table = result.table
        if (table == null) {
            tableModel.setDataVector(emptyArray<Array<Any>>(), emptyArray<Any>())
            setTableVisible(false)
            return
        }
        tableModel.setDataVector(
            table.rows.map { row -> row.toTypedArray() as Array<Any> }.toTypedArray(),
            table.columnNames.toTypedArray() as Array<Any>,
        )
        resultTable.autoResizeColumns()
        setTableVisible(true)
        applyConsoleDividerLocation()
    }

    private fun showFailure(result: DolphinDbExecutionResult.Failure) {
        statusLabel.text = formatStatus(result.scriptPreview, result.elapsedMs, success = false)
        val console = buildString {
            if (result.consoleText.isNotBlank()) {
                append(result.consoleText.trim())
                append("\n\n")
            }
            append(result.message)
        }
        consoleArea.text = console
        consoleArea.foreground = JBColor.RED
        tableModel.setDataVector(emptyArray<Array<Any>>(), emptyArray<Any>())
        setTableVisible(false)
    }

    private fun setTableVisible(visible: Boolean) {
        splitPane.bottomComponent.isVisible = visible
        splitPane.dividerSize = if (visible) 8 else 0
        revalidate()
        repaint()
    }

    private fun applyConsoleDividerLocation() {
        splitPane.dividerLocation = consoleDividerPx()
    }

    private fun consoleDividerPx(): Int = JBUI.scale(CONSOLE_DIVIDER_PX)

    private fun formatStatus(scriptPreview: String, elapsedMs: Long, success: Boolean): String {
        val status = if (success) "OK" else "FAILED"
        return "$status  ${elapsedMs}ms  $scriptPreview"
    }

    companion object {
        private const val CONSOLE_DIVIDER_PX = 60
        private const val CONSOLE_RESIZE_WEIGHT = 0.12
    }

    private fun JBTable.autoResizeColumns() {
        columnModel.columns.asSequence().forEach { column ->
            var width = columnModel.getColumn(column.modelIndex).headerValue.toString().length * 10
            for (row in 0 until rowCount.coerceAtMost(50)) {
                val value = getValueAt(row, column.modelIndex)?.toString().orEmpty()
                width = maxOf(width, value.length * 8)
            }
            column.preferredWidth = width.coerceIn(80, 320)
        }
    }
}

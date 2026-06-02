package com.xy.dolphindb.execution

import com.intellij.openapi.editor.Editor
import com.intellij.openapi.util.TextRange

internal object DolphinDbEditorScriptText {
    /**
     * Selected text, or the current line (VS Code: `get_text('selection or line')`).
     * Multi-line scripts must be selected explicitly; blank lines inside `def` are not statement boundaries.
     */
    fun selectedOrLine(editor: Editor): String? {
        val selection = editor.selectionModel.selectedText
        if (!selection.isNullOrEmpty()) {
            return selection
        }
        val document = editor.document
        val line = document.getLineNumber(editor.caretModel.offset)
        val start = document.getLineStartOffset(line)
        val end = document.getLineEndOffset(line)
        return document.getText(TextRange(start, end)).takeIf { it.isNotBlank() }
    }

    fun preview(text: String, maxLines: Int = 3): String {
        val lines = text.lineSequence().filter { it.isNotBlank() }.take(maxLines).toList()
        if (lines.isEmpty()) {
            return text.trim()
        }
        val total = text.lineSequence().count { it.isNotBlank() }
        return if (total > maxLines) {
            lines.joinToString("\n") + "\n..."
        } else {
            lines.joinToString("\n")
        }
    }
}

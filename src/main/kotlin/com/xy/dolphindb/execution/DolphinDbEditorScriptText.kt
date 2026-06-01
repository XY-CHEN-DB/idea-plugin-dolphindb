package com.xy.dolphindb.execution

import com.intellij.openapi.editor.Editor
import com.intellij.openapi.util.TextRange

internal object DolphinDbEditorScriptText {
    fun selectedOrLine(editor: Editor): String? {
        val selection = editor.selectionModel.selectedText?.trim()
        if (!selection.isNullOrEmpty()) {
            return selection
        }
        val document = editor.document
        val line = document.getLineNumber(editor.caretModel.offset)
        val start = document.getLineStartOffset(line)
        val end = document.getLineEndOffset(line)
        return document.getText(TextRange(start, end)).trim().takeIf { it.isNotEmpty() }
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

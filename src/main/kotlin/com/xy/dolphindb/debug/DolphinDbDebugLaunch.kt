package com.xy.dolphindb.debug

import com.intellij.openapi.editor.Editor
import com.intellij.openapi.util.TextRange
import com.intellij.openapi.vfs.VirtualFile

data class DolphinDbDebugLaunch(
    val file: VirtualFile,
    val scriptText: String,
    /** Editor line index of the first line in [scriptText]; 0 for whole-file debug. */
    val lineOffset: Int = 0,
) {
    fun editorLine(serverLine: Int): Int = serverLine + lineOffset

    fun serverLine(editorLine: Int): Int? {
        val server = editorLine - lineOffset
        return if (server >= 0) server else null
    }

    companion object {
        /** Debug always uses the whole file unless the user explicitly selected a range. */
        fun fromEditorForDebug(file: VirtualFile, editor: Editor): DolphinDbDebugLaunch {
            val document = editor.document
            val selection = editor.selectionModel.selectedText?.trim()
            if (!selection.isNullOrEmpty()) {
                val start = editor.selectionModel.selectionStart
                val end = editor.selectionModel.selectionEnd
                val startLine = document.getLineNumber(start)
                val endLine = document.getLineNumber(end)
                val text = document.getText(TextRange(document.getLineStartOffset(startLine), document.getLineEndOffset(endLine)))
                    .replace("\r\n", "\n")
                return DolphinDbDebugLaunch(file, text, startLine)
            }
            val fullText = document.text.replace("\r\n", "\n")
            return DolphinDbDebugLaunch(file, fullText, 0)
        }

        fun fromEditor(file: VirtualFile, editor: Editor): DolphinDbDebugLaunch = fromEditorForDebug(file, editor)
    }
}

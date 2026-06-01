package com.xy.dolphindb.debug

import com.intellij.openapi.fileEditor.FileEditorManager
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.VirtualFile
import com.xy.dolphindb.DolphinDbFileType

internal object DolphinDbDebugLaunchResolver {
    fun fromProjectContext(project: Project): DolphinDbDebugLaunch? {
        val editor = FileEditorManager.getInstance(project).selectedTextEditor ?: return null
        val file = editor.virtualFile?.takeIf(::isDebuggableFile) ?: return null
        return DolphinDbDebugLaunch.fromEditorForDebug(file, editor)
    }

    fun isDebuggableFile(file: VirtualFile): Boolean =
        !file.isDirectory && file.fileType == DolphinDbFileType.INSTANCE

    fun readScriptText(file: VirtualFile): String? {
        if (!isDebuggableFile(file)) {
            return null
        }
        return runCatching {
            file.contentsToByteArray().decodeToString().replace("\r\n", "\n")
        }.getOrNull()
    }
}

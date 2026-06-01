package com.xy.dolphindb.lsp

import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.newvfs.BulkFileListener
import com.intellij.openapi.vfs.newvfs.events.VFileContentChangeEvent
import com.intellij.openapi.vfs.newvfs.events.VFileCreateEvent
import com.intellij.openapi.vfs.newvfs.events.VFileDeleteEvent
import com.intellij.openapi.vfs.newvfs.events.VFileEvent
import com.xy.dolphindb.DolphinDbFileType

fun dolphinDbBulkFileListener(project: Project): BulkFileListener = object : BulkFileListener {
    override fun after(events: List<VFileEvent>) {
        val bridge = LspBridgeService.getInstance(project)
        for (event in events) {
            when (event) {
                is VFileDeleteEvent -> {
                    val file = event.file ?: continue
                    if (isDosFile(file)) {
                        bridge.notifyFileDeleted(file)
                    }
                }
                is VFileCreateEvent, is VFileContentChangeEvent -> {
                    val file = event.file ?: continue
                    if (isDosFile(file)) {
                        bridge.notifyFileCreatedOrChanged(file)
                    }
                }
            }
        }
    }
}

private fun isDosFile(file: com.intellij.openapi.vfs.VirtualFile): Boolean =
    file.extension == "dos" || file.fileType == DolphinDbFileType.INSTANCE

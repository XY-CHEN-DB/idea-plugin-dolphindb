package com.xy.dolphindb.lsp

import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.project.DumbService
import com.intellij.openapi.project.Project
import com.intellij.openapi.startup.ProjectActivity
import com.intellij.openapi.vfs.VirtualFileManager

class DolphinDbLspProjectActivity : ProjectActivity {
    override suspend fun execute(project: Project) {
        DumbService.getInstance(project).runWhenSmart {
            ApplicationManager.getApplication().invokeLater {
                if (project.isDisposed) {
                    return@invokeLater
                }
                registerDolphinDbLspWorkspaceListener(project)
                project.messageBus.connect(project).subscribe(
                    VirtualFileManager.VFS_CHANGES,
                    dolphinDbBulkFileListener(project),
                )
            }
        }
    }
}

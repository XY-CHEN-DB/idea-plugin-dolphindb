package com.xy.dolphindb.lsp

import com.intellij.openapi.project.Project
import com.intellij.platform.lsp.api.LspServer
import com.intellij.platform.lsp.api.LspServerManager
import com.intellij.platform.lsp.api.LspServerManagerListener
import com.intellij.platform.lsp.api.LspServerState

internal class DolphinDbLspWorkspaceListener(
    private val project: Project,
) : LspServerManagerListener {
    override fun serverStateChanged(server: LspServer) {
        if (server.project != project) {
            return
        }
        if (server.providerClass != DolphinDbLspServerSupportProvider::class.java) {
            return
        }
        if (server.state == LspServerState.Running) {
            LspBridgeService.getInstance(project).syncWorkspaceWithLsp()
        }
    }
}

internal fun registerDolphinDbLspWorkspaceListener(project: Project) {
    LspServerManager.getInstance(project).addLspServerManagerListener(
        DolphinDbLspWorkspaceListener(project),
        project,
        false,
    )
}

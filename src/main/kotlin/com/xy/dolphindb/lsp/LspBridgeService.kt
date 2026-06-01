package com.xy.dolphindb.lsp

import com.google.gson.JsonElement
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.application.ReadAction
import com.intellij.openapi.components.Service
import com.intellij.openapi.diagnostic.Logger
import com.intellij.openapi.project.DumbService
import com.intellij.openapi.project.Project
import com.intellij.openapi.util.io.FileUtil
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.psi.search.FilenameIndex
import com.intellij.psi.search.GlobalSearchScope
import com.intellij.platform.lsp.api.LspServerManager
import com.intellij.platform.lsp.api.LspServerState
import com.xy.dolphindb.connection.MinimalConnectionService
import java.util.concurrent.CompletableFuture
import java.util.concurrent.atomic.AtomicBoolean

@Service(Service.Level.PROJECT)
class LspBridgeService(private val project: Project) {
    private val workspaceSyncInFlight = AtomicBoolean(false)

    fun getDosFiles(): List<DdbUri> {
        if (project.isDisposed) {
            return emptyList()
        }
        return ReadAction.compute<List<DdbUri>, RuntimeException> {
            if (project.isDisposed) {
                return@compute emptyList()
            }
            val scope = GlobalSearchScope.projectScope(project)
            FilenameIndex.getAllFilesByExt(project, "dos", scope)
                .map { toDdbUri(it) }
        }
    }

    fun toDdbUri(file: VirtualFile): DdbUri {
        val path = normalizedAbsolutePath(file)
        return DdbUri(
            external = file.url,
            path = path,
            scheme = "file",
        )
    }

    /**
     * Re-index all project `.dos` modules in the Language Server (cross-file `use` / go-to-definition).
     */
    fun syncWorkspaceWithLsp() {
        if (project.isDisposed || !workspaceSyncInFlight.compareAndSet(false, true)) {
            return
        }
        val dumbService = DumbService.getInstance(project)
        if (dumbService.isDumb) {
            workspaceSyncInFlight.set(false)
            dumbService.runWhenSmart { syncWorkspaceWithLsp() }
            return
        }
        ApplicationManager.getApplication().executeOnPooledThread {
            try {
                if (project.isDisposed) {
                    return@executeOnPooledThread
                }
                val files = getDosFiles()
                if (files.isEmpty()) {
                    return@executeOnPooledThread
                }
                val servers = LspServerManager.getInstance(project)
                    .getServersForProvider(DolphinDbLspServerSupportProvider::class.java)
                    .filter { it.state == LspServerState.Running }
                for (server in servers) {
                    for (uri in files) {
                        notifyLspFileCreate(server, uri)
                    }
                }
                LOG.info("DolphinDB LSP workspace sync: ${files.size} .dos file(s)")
            } finally {
                workspaceSyncInFlight.set(false)
            }
        }
    }

    fun notifyFileCreatedOrChanged(file: VirtualFile) {
        notifyLspServer(file, isDelete = false)
    }

    fun notifyFileDeleted(file: VirtualFile) {
        notifyLspServer(file, isDelete = true)
    }

    private fun notifyLspServer(file: VirtualFile, isDelete: Boolean) {
        if (project.isDisposed) {
            return
        }
        val dumbService = DumbService.getInstance(project)
        if (dumbService.isDumb) {
            dumbService.runWhenSmart { notifyLspServer(file, isDelete) }
            return
        }
        ApplicationManager.getApplication().executeOnPooledThread {
            if (project.isDisposed) {
                return@executeOnPooledThread
            }
            val uri = toDdbUri(file)
            val servers = LspServerManager.getInstance(project)
                .getServersForProvider(DolphinDbLspServerSupportProvider::class.java)
                .filter { it.state == LspServerState.Running }
            for (server in servers) {
                try {
                    if (isDelete) {
                        notifyLspFileDelete(server, uri)
                    } else {
                        notifyLspFileCreate(server, uri)
                    }
                } catch (e: Exception) {
                    LOG.warn("Failed to notify DolphinDB LSP of file change: ${file.path}", e)
                }
            }
        }
    }

    private fun notifyLspFileCreate(
        server: com.intellij.platform.lsp.api.LspServer,
        uri: DdbUri,
    ) {
        server.sendRequestSync { ls ->
            @Suppress("UNCHECKED_CAST")
            DolphinDbLspRpc.request(ls, "lsp/handleFileCreate", uri) as CompletableFuture<Any?>
        }
    }

    private fun notifyLspFileDelete(
        server: com.intellij.platform.lsp.api.LspServer,
        uri: DdbUri,
    ) {
        server.sendRequestSync { ls ->
            @Suppress("UNCHECKED_CAST")
            DolphinDbLspRpc.request(ls, "lsp/handleFileDelete", uri) as CompletableFuture<Any?>
        }
    }

    fun handleDatabaseRequest(method: String, params: JsonElement?): CompletableFuture<JsonElement?> {
        return MinimalConnectionService.getInstance(project).handleLspRequest(method, params)
    }

    data class DdbUri(
        val external: String,
        val path: String,
        val scheme: String = "file",
    )

    companion object {
        private val LOG = Logger.getInstance(LspBridgeService::class.java)

        fun getInstance(project: Project): LspBridgeService =
            project.getService(LspBridgeService::class.java)

        fun normalizedAbsolutePath(file: VirtualFile): String =
            FileUtil.toSystemIndependentName(file.canonicalPath ?: file.path)
    }
}

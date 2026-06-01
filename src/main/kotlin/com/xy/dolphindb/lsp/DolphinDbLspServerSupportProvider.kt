package com.xy.dolphindb.lsp

import com.intellij.execution.configurations.GeneralCommandLine
import com.intellij.openapi.project.Project
import com.intellij.openapi.util.io.FileUtil
import com.intellij.openapi.vfs.LocalFileSystem
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.platform.lsp.api.Lsp4jClient
import com.intellij.platform.lsp.api.LspServerNotificationsHandler
import com.intellij.platform.lsp.api.LspServerSupportProvider
import com.intellij.platform.lsp.api.ProjectWideLspServerDescriptor
import com.xy.dolphindb.DdbResourcePaths
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.settings.DolphinDbSettings
import java.net.URI
import java.net.URISyntaxException
import java.nio.file.Files
import java.nio.file.Path

class DolphinDbLspServerSupportProvider : LspServerSupportProvider {
    override fun fileOpened(
        project: Project,
        file: VirtualFile,
        serverStarter: LspServerSupportProvider.LspServerStarter,
    ) {
        if (file.fileType == DolphinDbFileType.INSTANCE) {
            serverStarter.ensureServerStarted(DolphinDbLspServerDescriptor(project))
        }
    }
}

private class DolphinDbLspServerDescriptor(
    project: Project,
) : ProjectWideLspServerDescriptor(project, "DolphinDB Language Server") {
    override fun isSupportedFile(file: VirtualFile): Boolean =
        file.fileType == DolphinDbFileType.INSTANCE

    override fun createCommandLine(): GeneralCommandLine {
        val node = resolveNodeExecutable()
        val script = resolveLanguageServerScript()
        return GeneralCommandLine(node, script.toString(), "--stdio")
            .withCharset(Charsets.UTF_8)
    }

    override fun createLsp4jClient(handler: LspServerNotificationsHandler): Lsp4jClient =
        DolphinDbLspClient(super.project, handler)

    override fun getLanguageId(file: VirtualFile): String = "dolphindb"

    /**
     * Use plain absolute paths so LSP symbol keys match [LspBridgeService] module index (`file.path`).
     */
    override fun getFileUri(file: VirtualFile): String =
        LspBridgeService.normalizedAbsolutePath(file)

    override fun findFileByUri(fileUri: String): VirtualFile? {
        super.findFileByUri(fileUri)?.let { return it }

        // DolphinDB LSP returns plain absolute paths (not file:// URIs) in definition responses.
        val path = extractLocalPath(fileUri) ?: return null
        val normalized = FileUtil.toSystemIndependentName(path)
        if (normalized.isEmpty()) {
            return null
        }
        return findLocalFileByPath(normalized)
            ?: LocalFileSystem.getInstance().refreshAndFindFileByPath(normalized)
    }

    private fun extractLocalPath(fileUri: String): String? {
        if (fileUri.startsWith("file:")) {
            return try {
                URI(fileUri).path?.takeIf { it.isNotEmpty() }
            } catch (_: URISyntaxException) {
                fileUri.removePrefix("file://")
            }
        }
        return fileUri
    }

    private fun resolveNodeExecutable(): String {
        val configured = DolphinDbSettings.getInstance().nodePath.trim()
        if (configured.isNotEmpty() && Files.isExecutable(Path.of(configured))) {
            return configured
        }
        val pathSeparator = System.getProperty("path.separator") ?: ":"
        return System.getenv("PATH")
            ?.split(pathSeparator)
            ?.asSequence()
            ?.flatMap { path ->
                listOf("node", "node.exe").map { name -> Path.of(path.trim(), name) }
            }
            ?.firstOrNull { Files.isExecutable(it) }
            ?.toString()
            ?: "node"
    }

    private fun resolveLanguageServerScript(): Path =
        DdbResourcePaths.languageServerScript()
}

package com.xy.dolphindb.debug

import com.intellij.openapi.diagnostic.logger
import com.intellij.openapi.project.Project
import com.xy.dolphindb.connection.DolphinDbConnectionOutcome
import com.xy.dolphindb.connection.DolphinDbSessionService
import java.nio.file.Files
import java.nio.file.Path

internal object DolphinDbDebugModuleSync {
    private val log = logger<DolphinDbDebugModuleSync>()

    fun uploadParsedModules(project: Project, entryFile: Path, modules: Map<String, String>) {
        if (modules.isEmpty()) {
            return
        }
        val session = DolphinDbSessionService.getInstance(project)
        val outcome = session.withConnectionOutcome { connection ->
            for ((moduleName, modulePath) in modules) {
                val localFile = resolveLocalModuleFile(entryFile, modulePath) ?: continue
                val content = Files.readString(localFile).replace("\r\n", "\n")
                val script = buildUploadScript(content)
                connection.run(script)
                log.info("Uploaded debug module '$moduleName' from $localFile")
            }
            true
        }
        if (outcome is DolphinDbConnectionOutcome.NotConnected) {
            log.warn("Skipped debug module upload because database connection is not available")
        }
    }

    internal fun resolveLocalModuleFile(entryFile: Path, modulePath: String): Path? {
        val normalized = modulePath.replace('\\', '/')
        val candidates = buildList {
            val direct = Path.of(normalized)
            add(direct)
            if (!direct.isAbsolute) {
                add(entryFile.parent?.resolve(direct.fileName.toString()))
                add(entryFile.parent?.resolve(normalized))
            }
            entryFile.parent?.let { parent ->
                add(parent.resolve("$normalized.dos"))
                add(parent.resolve("${direct.fileName}.dos"))
            }
        }
        return candidates.filterNotNull().firstOrNull { Files.isRegularFile(it) }
    }

    private fun buildUploadScript(content: String): String {
        val escaped = content
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\n", "\\n")
            .replace("\r", "")
        return "uploadModule(\"$escaped\", true, false)"
    }
}

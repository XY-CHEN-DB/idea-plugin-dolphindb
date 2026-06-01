package com.xy.dolphindb.execution

import com.intellij.openapi.components.Service
import com.intellij.openapi.diagnostic.logger
import com.intellij.openapi.project.Project
import com.xxdb.io.ProgressListener
import com.xy.dolphindb.connection.DolphinDbConnectionOutcome
import com.xy.dolphindb.connection.DolphinDbSessionService
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicReference

@Service(Service.Level.PROJECT)
class DolphinDbScriptExecutor(private val project: Project) {
    private val executor = Executors.newSingleThreadExecutor { runnable ->
        Thread(runnable, "DolphinDB-Script-Executor")
    }
    private val progressLog = AtomicReference<StringBuilder>(StringBuilder())

    fun executeAsync(script: String, onComplete: (DolphinDbExecutionResult) -> Unit) {
        executor.execute {
            val started = System.currentTimeMillis()
            val preview = DolphinDbEditorScriptText.preview(script)
            progressLog.set(StringBuilder())
            try {
                val session = DolphinDbSessionService.getInstance(project)
                val entity = when (val outcome = session.withConnectionOutcome { connection ->
                    connection.run(DolphinDbScriptNormalizer.normalize(script), progressListener())
                }) {
                    is DolphinDbConnectionOutcome.Success -> outcome.value
                    DolphinDbConnectionOutcome.NotConnected ->
                        throw IllegalStateException("Database connection is not available")
                    is DolphinDbConnectionOutcome.Error ->
                        throw outcome.throwable
                }

                val elapsed = System.currentTimeMillis() - started
                val (summary, table) = DolphinDbResultConverter.toExecutionPayload(entity)
                val console = buildConsoleText(progressLog.get(), summary)
                onComplete(
                    DolphinDbExecutionResult.Success(
                        scriptPreview = preview,
                        elapsedMs = elapsed,
                        consoleText = console,
                        table = table,
                    ),
                )
            } catch (error: Exception) {
                LOG.warn("DolphinDB script execution failed", error)
                val elapsed = System.currentTimeMillis() - started
                onComplete(
                    DolphinDbExecutionResult.Failure(
                        scriptPreview = preview,
                        elapsedMs = elapsed,
                        message = error.message ?: error.toString(),
                        consoleText = progressLog.get().toString(),
                    ),
                )
            }
        }
    }

    private fun progressListener(): ProgressListener =
        ProgressListener { message ->
            progressLog.get().append(message).append('\n')
        }

    private fun buildConsoleText(progress: StringBuilder, summary: String): String {
        val parts = buildList {
            if (progress.isNotBlank()) {
                add(progress.toString().trimEnd())
            }
            if (summary.isNotBlank()) {
                add(summary.trim())
            }
        }
        return parts.joinToString("\n\n")
    }

    companion object {
        private val LOG = logger<DolphinDbScriptExecutor>()

        fun getInstance(project: Project): DolphinDbScriptExecutor =
            project.getService(DolphinDbScriptExecutor::class.java)
    }
}

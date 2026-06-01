package com.xy.dolphindb.execution

import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.progress.ProgressIndicator
import com.intellij.openapi.progress.ProgressManager
import com.intellij.openapi.progress.Task
import com.intellij.openapi.project.Project
import com.intellij.openapi.ui.Messages
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.connection.DolphinDbSessionService
import com.xy.dolphindb.settings.DolphinDbSettings
import java.util.concurrent.CountDownLatch
import java.util.concurrent.atomic.AtomicReference

internal object DolphinDbExecuteSupport {
    fun executeScript(project: Project, script: String) {
        if (!prepareConnection(project)) {
            return
        }
        ProgressManager.getInstance().run(
            object : Task.Backgroundable(project, DolphinDbBundle.message("execution.progress.title"), true) {
                override fun run(indicator: ProgressIndicator) {
                    indicator.isIndeterminate = true
                    val latch = CountDownLatch(1)
                    val resultRef = AtomicReference<DolphinDbExecutionResult>()
                    DolphinDbScriptExecutor.getInstance(project).executeAsync(script) { result ->
                        resultRef.set(result)
                        latch.countDown()
                    }
                    latch.await()
                    val result = resultRef.get() ?: return
                    ApplicationManager.getApplication().invokeLater {
                        DolphinDbResultsService.getInstance(project).showResult(result)
                    }
                }
            },
        )
    }

    private fun prepareConnection(project: Project): Boolean {
        val session = DolphinDbSessionService.getInstance(project)
        if (session.isConnected()) {
            return true
        }
        val settings = DolphinDbSettings.getInstance().activeConnection()
        if (settings.autologin) {
            val result = session.connect()
            if (!result.success) {
                Messages.showErrorDialog(project, result.message, DolphinDbBundle.message("results.title"))
            }
            return result.success
        }
        val answer = Messages.showYesNoDialog(
            project,
            DolphinDbBundle.message("execution.connect.prompt"),
            DolphinDbBundle.message("results.title"),
            Messages.getQuestionIcon(),
        )
        if (answer != Messages.YES) {
            return false
        }
        val result = session.connect()
        if (!result.success) {
            Messages.showErrorDialog(project, result.message, DolphinDbBundle.message("results.title"))
        }
        return result.success
    }
}

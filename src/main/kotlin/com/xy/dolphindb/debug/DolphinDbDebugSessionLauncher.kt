package com.xy.dolphindb.debug

import com.intellij.execution.ExecutionException
import com.intellij.execution.runners.ExecutionEnvironment
import com.intellij.openapi.project.Project
import com.intellij.xdebugger.XDebugSession
import com.intellij.xdebugger.XDebuggerManager
import com.xy.dolphindb.DolphinDbBundle

internal object DolphinDbDebugSessionLauncher {
    @Throws(ExecutionException::class)
    fun start(
        project: Project,
        environment: ExecutionEnvironment,
        launch: DolphinDbDebugLaunch,
        showTabImmediately: Boolean,
    ): XDebugSession {
        val starter = DolphinDbDebugProcessStarter(launch)
        val manager = XDebuggerManager.getInstance(project)
        val sessionName = DolphinDbBundle.message("debug.runConfiguration.name", launch.file.name)
        @Suppress("DEPRECATION")
        return if (showTabImmediately) {
            manager.startSessionAndShowTab(sessionName, null, starter)
        } else {
            manager.startSession(environment, starter)
        }
    }
}

package com.xy.dolphindb.debug

import com.intellij.execution.RunManager
import com.intellij.execution.executors.DefaultDebugExecutor
import com.intellij.execution.runners.ExecutionEnvironmentBuilder
import com.intellij.openapi.project.Project

object DolphinDbDebugSessionStarter {
    fun startSession(project: Project, launch: DolphinDbDebugLaunch) {
        val configuration = DolphinDbDebugRunConfiguration.create(project, launch)
        val factory = DolphinDbDebugConfigurationFactory.getInstance()
        val settings = RunManager.getInstance(project).createConfiguration(configuration, factory)
        RunManager.getInstance(project).setTemporaryConfiguration(settings)
        val environment = ExecutionEnvironmentBuilder
            .create(project, DefaultDebugExecutor.getDebugExecutorInstance(), settings.configuration)
            .build()
        DolphinDbDebugSessionLauncher.start(
            project = project,
            environment = environment,
            launch = launch,
            showTabImmediately = true,
        )
    }
}

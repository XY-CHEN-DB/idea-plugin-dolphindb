package com.xy.dolphindb.debug

import com.intellij.execution.ExecutionException
import com.intellij.execution.configurations.RunProfile
import com.intellij.execution.configurations.RunnerSettings
import com.intellij.execution.executors.DefaultDebugExecutor
import com.intellij.execution.runners.ExecutionEnvironment
import com.intellij.execution.runners.ProgramRunner
import com.xy.dolphindb.DolphinDbBundle

class DolphinDbDebugProgramRunner : ProgramRunner<RunnerSettings> {
    override fun getRunnerId(): String = RUNNER_ID

    override fun canRun(executorId: String, profile: RunProfile): Boolean =
        DefaultDebugExecutor.EXECUTOR_ID == executorId && profile is DolphinDbDebugRunConfiguration

    @Throws(ExecutionException::class)
    override fun execute(environment: ExecutionEnvironment) {
        val configuration = environment.runProfile as? DolphinDbDebugRunConfiguration
            ?: throw ExecutionException(DolphinDbBundle.message("debug.error.invalidConfiguration"))
        val launch = configuration.toLaunch()
            ?: DolphinDbDebugLaunchResolver.fromProjectContext(environment.project)
            ?: throw ExecutionException(DolphinDbBundle.message("debug.error.noDosFile"))
        DolphinDbDebugSessionLauncher.start(
            project = environment.project,
            environment = environment,
            launch = launch,
            showTabImmediately = true,
        )
    }

    companion object {
        const val RUNNER_ID: String = "DolphinDbDebugProgramRunner"
    }
}

package com.xy.dolphindb.debug

import com.intellij.execution.configurations.ConfigurationFactory
import com.intellij.execution.configurations.ConfigurationTypeBase
import com.intellij.execution.configurations.ConfigurationTypeUtil
import com.intellij.execution.configurations.RunConfiguration
import com.intellij.execution.configurations.RunConfigurationBase
import com.intellij.execution.configurations.RunConfigurationOptions
import com.intellij.execution.configurations.RunProfileState
import com.intellij.execution.runners.ExecutionEnvironment
import com.intellij.openapi.options.SettingsEditor
import javax.swing.JPanel
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.LocalFileSystem
import com.intellij.openapi.vfs.VirtualFile
import com.xy.dolphindb.DolphinDbBundle

internal class DolphinDbDebugRunConfiguration(
    project: Project,
    factory: DolphinDbDebugConfigurationFactory,
    name: String,
) : RunConfigurationBase<RunConfigurationOptions>(project, factory, name) {
    private val options = RunConfigurationOptions()

    var scriptFilePath: String = ""
    var scriptText: String = ""
    var lineOffset: Int = 0

    override fun getOptions(): RunConfigurationOptions = options

    override fun getConfigurationEditor(): SettingsEditor<out RunConfiguration> =
        object : SettingsEditor<DolphinDbDebugRunConfiguration>() {
            override fun createEditor(): JPanel = JPanel()
            override fun resetEditorFrom(configuration: DolphinDbDebugRunConfiguration) {}
            override fun applyEditorTo(configuration: DolphinDbDebugRunConfiguration) {}
        }

    override fun getState(executor: com.intellij.execution.Executor, environment: ExecutionEnvironment): RunProfileState? = null

    fun targetFile(): VirtualFile? = LocalFileSystem.getInstance().findFileByPath(scriptFilePath)

    fun toLaunch(): DolphinDbDebugLaunch? {
        val file = targetFile()?.takeIf(DolphinDbDebugLaunchResolver::isDebuggableFile) ?: return null
        val text = scriptText.ifBlank { DolphinDbDebugLaunchResolver.readScriptText(file) } ?: return null
        return DolphinDbDebugLaunch(file, text, lineOffset)
    }

    companion object {
        fun create(project: Project, launch: DolphinDbDebugLaunch): DolphinDbDebugRunConfiguration {
            val factory = DolphinDbDebugConfigurationFactory.getInstance()
            return DolphinDbDebugRunConfiguration(
                project,
                factory,
                DolphinDbBundle.message("debug.runConfiguration.name", launch.file.name),
            ).apply {
                scriptFilePath = launch.file.path
                scriptText = launch.scriptText
                lineOffset = launch.lineOffset
            }
        }
    }
}

internal class DolphinDbDebugConfigurationFactory(
    type: DolphinDbDebugConfigurationType,
) : ConfigurationFactory(type) {
    override fun createTemplateConfiguration(project: Project): RunConfiguration =
        DolphinDbDebugRunConfiguration(project, this, DolphinDbBundle.message("debug.runConfiguration.template"))

    override fun createConfiguration(name: String?, template: RunConfiguration): RunConfiguration {
        val source = template as DolphinDbDebugRunConfiguration
        return DolphinDbDebugRunConfiguration(template.project, this, name ?: source.name).apply {
            scriptFilePath = source.scriptFilePath
            scriptText = source.scriptText
            lineOffset = source.lineOffset
        }
    }

    override fun getId(): String = "DolphinDbDebugConfiguration"

    companion object {
        fun getInstance(): DolphinDbDebugConfigurationFactory {
            val type = ConfigurationTypeUtil.findConfigurationType(DolphinDbDebugConfigurationType.ID)
                ?: error("DolphinDB debug configuration type not registered")
            return type.configurationFactories[0] as DolphinDbDebugConfigurationFactory
        }
    }
}

internal class DolphinDbDebugConfigurationType :
    ConfigurationTypeBase(
        ID,
        DolphinDbBundle.message("debug.configurationType.name"),
        DolphinDbBundle.message("debug.configurationType.description"),
        com.intellij.icons.AllIcons.Debugger.Db_set_breakpoint,
    ) {
    init {
        addFactory(DolphinDbDebugConfigurationFactory(this))
    }

    companion object {
        const val ID: String = "DolphinDbDebugRunConfigurationType"
    }
}

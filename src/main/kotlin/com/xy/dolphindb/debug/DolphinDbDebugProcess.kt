package com.xy.dolphindb.debug

import com.google.gson.JsonElement
import com.google.gson.JsonObject
import com.intellij.execution.ui.ConsoleViewContentType
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.diagnostic.logger
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.LocalFileSystem
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.openapi.vfs.VirtualFileManager
import com.intellij.xdebugger.XDebugProcess
import com.intellij.xdebugger.XSourcePosition
import com.intellij.xdebugger.breakpoints.XBreakpointHandler
import com.intellij.xdebugger.breakpoints.XLineBreakpoint
import com.intellij.xdebugger.evaluation.XDebuggerEditorsProvider
import com.intellij.xdebugger.frame.XExecutionStack
import com.intellij.xdebugger.frame.XStackFrame
import com.intellij.xdebugger.frame.XSuspendContext
import com.intellij.xdebugger.frame.XValueChildrenList
import com.intellij.xdebugger.impl.XSourcePositionImpl
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.settings.DolphinDbCredentials
import com.xy.dolphindb.settings.DolphinDbSettings
import java.nio.file.Path
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicInteger

internal class DolphinDbDebugProcess(
    session: com.intellij.xdebugger.XDebugSession,
    private val project: Project,
    private val launch: DolphinDbDebugLaunch,
) : XDebugProcess(session) {
    private val log = logger<DolphinDbDebugProcess>()
    private val settings = DolphinDbSettings.getInstance().activeConnection()
    private val password = DolphinDbCredentials.resolvePassword(settings)
    private val remote = DolphinDbDebugRemote(
        url = DolphinDbDebugWsUrl.fromSettingsUrl(settings.url),
        username = settings.username,
        password = password,
        onError = { error -> ApplicationManager.getApplication().invokeLater { reportError(error) } },
    )

    private val entryPath: String = normalizePath(launch.file.path)
    private val entryFile: VirtualFile = launch.file
    private var modules: Map<String, String> = emptyMap()
    private var stackFrames: List<StackFrameData> = emptyList()
    private val suspendEpoch = AtomicInteger(0)
    private val terminated = AtomicBoolean(false)
    private val bootstrapComplete = AtomicBoolean(false)
    private val scriptResolved = AtomicBoolean(false)
    private val syncedBreakpointLines = java.util.concurrent.ConcurrentHashMap.newKeySet<Int>()

    private val breakpointHandler =
        object : XBreakpointHandler<XLineBreakpoint<DolphinDbLineBreakpointType.DolphinDbBreakpointProperties>>(
            DolphinDbLineBreakpointType::class.java,
        ) {
            override fun registerBreakpoint(breakpoint: XLineBreakpoint<DolphinDbLineBreakpointType.DolphinDbBreakpointProperties>) {
                trackBreakpoint(breakpoint, register = true)
                if (bootstrapComplete.get()) {
                    syncBreakpointsToServer()
                }
            }

            override fun unregisterBreakpoint(
                breakpoint: XLineBreakpoint<DolphinDbLineBreakpointType.DolphinDbBreakpointProperties>,
                temporary: Boolean,
            ) {
                trackBreakpoint(breakpoint, register = false)
                if (bootstrapComplete.get()) {
                    syncBreakpointsToServer()
                }
            }
        }

    override fun getEditorsProvider(): XDebuggerEditorsProvider = DolphinDbDebugEditorsProvider()

    override fun getBreakpointHandlers(): Array<XBreakpointHandler<*>> = arrayOf(breakpointHandler)

    override fun sessionInitialized() {
        ApplicationManager.getApplication().executeOnPooledThread {
            try {
                bootstrap()
            } catch (error: Exception) {
                log.warn("Debug bootstrap failed", error)
                ApplicationManager.getApplication().invokeLater {
                    reportError(error)
                    session.stop()
                }
            }
        }
    }

    override fun resume(context: XSuspendContext?) {
        remote.call<JsonElement>("continueRun")
    }

    override fun startStepOver(context: XSuspendContext?) {
        remote.call<JsonElement>("stepOver")
    }

    override fun startStepInto(context: XSuspendContext?) {
        remote.call<JsonElement>("stepInto")
    }

    override fun startStepOut(context: XSuspendContext?) {
        remote.call<JsonElement>("stepOut")
    }

    override fun stop() {
        terminated.set(true)
        remote.call<JsonElement>("stopRun").whenComplete { _, _ ->
            remote.terminate()
            ApplicationManager.getApplication().invokeLater { session.stop() }
        }
    }

    private fun parseScriptWithDebug(source: String): JsonElement? =
        remote.call<JsonElement>("parseScriptWithDebug", listOf(source)).join()

    private fun bootstrap() {
        registerEventHandlers()
        remote.connect().join()
        val source = launch.scriptText.replace("\r\n", "\n")
        val parseResult = parseScriptWithDebug(source)
        modules = parseModules(parseResult)
        scriptResolved.set(true)
        DolphinDbDebugModuleSync.uploadParsedModules(
            project,
            Path.of(entryPath),
            modules,
        )
        loadInitialBreakpoints()
        syncBreakpointsToServer().join()
        log.info("Starting debug run for ${launch.file.name}, breakpoints=${syncedBreakpointLines.sorted()}")
        session.consoleView?.print("Starting debug: ${launch.file.name}\n", ConsoleViewContentType.SYSTEM_OUTPUT)
        remote.call<JsonElement>("runScriptWithDebug").join()
        bootstrapComplete.set(true)
    }

    private fun registerEventHandlers() {
        remote.on("BREAKPOINT") { message -> handlePause(message) }
        remote.on("STEP") { message -> handlePause(message) }
        remote.on("END") { message -> handleEnd(message) }
        remote.on("OUTPUT") { message -> printOutput(message, ConsoleViewContentType.NORMAL_OUTPUT) }
        remote.on("ERROR") { message -> handleException(message) }
        remote.on("SYNTAX") { message -> handleException(message) }
    }

    private fun handlePause(message: DebugReceiveMessage) {
        if (terminated.get()) {
            return
        }
        val pauseLine = message.data?.takeIf { it.isJsonObject }?.asJsonObject?.get("line")?.asInt
        ApplicationManager.getApplication().executeOnPooledThread {
            refreshStackAndSuspend(pauseLine)
        }
    }

    private fun handleEnd(message: DebugReceiveMessage) {
        val data = DolphinDbDebugMessageParser.dataAsObject(message.data)
        val status = data?.get("status")?.asString.orEmpty()
        if (status == "FINISHED" || status == "STOPPED") {
            terminated.set(true)
            remote.terminate()
            ApplicationManager.getApplication().invokeLater {
                session.consoleView?.print(
                    "Debug ${status.lowercase()}.\n",
                    ConsoleViewContentType.SYSTEM_OUTPUT,
                )
                session.stop()
            }
        }
    }

    private fun handleException(message: DebugReceiveMessage) {
        if (terminated.get()) {
            return
        }
        printOutput(message, ConsoleViewContentType.ERROR_OUTPUT)
        val pauseLine = message.data?.takeIf { it.isJsonObject }?.asJsonObject?.get("line")?.asInt
        ApplicationManager.getApplication().executeOnPooledThread {
            refreshStackAndSuspend(pauseLine)
        }
    }

    private fun refreshStackAndSuspend(fallbackLine: Int?) {
        if (terminated.get()) {
            return
        }
        try {
            val loaded = loadStackFrames()
            if (terminated.get()) {
                return
            }
            stackFrames = loaded
            if (stackFrames.isEmpty()) {
                ApplicationManager.getApplication().invokeLater {
                    session.consoleView?.print(
                        DolphinDbBundle.message("debug.stacktrace.empty") + "\n",
                        ConsoleViewContentType.ERROR_OUTPUT,
                    )
                }
                val fallback = fallbackStackFrames(fallbackLine)
                if (fallback.isEmpty()) {
                    return
                }
                stackFrames = fallback
            } else {
                logStackFrames()
            }
            reachSuspendPosition(stackFrames)
        } catch (error: Exception) {
            log.warn("refreshStackAndSuspend failed", error)
            ApplicationManager.getApplication().invokeLater {
                reportError(error)
                session.consoleView?.print(
                    DolphinDbBundle.message("debug.stacktrace.failed", error.message.orEmpty()) + "\n",
                    ConsoleViewContentType.ERROR_OUTPUT,
                )
                val fallback = fallbackStackFrames(fallbackLine)
                if (fallback.isNotEmpty() && !terminated.get()) {
                    stackFrames = fallback
                    reachSuspendPosition(stackFrames)
                }
            }
        }
    }

    private fun logStackFrames() {
        val summary = stackFrames.joinToString { frame ->
            "id=${frame.stackFrameId} line=${frame.line} module=${frame.moduleName ?: "shared"} ${frame.label}"
        }
        log.info("Debug stack: $summary")
    }

    private fun fallbackStackFrames(serverLine: Int?): List<StackFrameData> {
        if (serverLine == null) {
            return emptyList()
        }
        return listOf(
            StackFrameData(
                stackFrameId = 0,
                line = serverLine,
                column = 0,
                label = DolphinDbBundle.message("debug.stack.line", launch.editorLine(serverLine) + 1),
                moduleName = "",
                sharedScope = false,
                fetchVariables = false,
            ),
        )
    }

    private fun reachSuspendPosition(frames: List<StackFrameData>) {
        if (frames.isEmpty() || terminated.get()) {
            return
        }
        val epoch = suspendEpoch.incrementAndGet()
        val executionStack = DolphinDbExecutionStack(
            displayName = frames.firstOrNull()?.label ?: DolphinDbBundle.message("debug.stack.thread"),
            frames = frames.map { createXStackFrame(it, epoch) },
        )
        ApplicationManager.getApplication().invokeLater {
            if (!terminated.get()) {
                session.positionReached(DolphinDbSuspendContext(executionStack))
            }
        }
    }

    private fun loadStackFrames(): List<StackFrameData> {
        val data = remote.call<JsonElement>("stackTrace", timeoutMs = DolphinDbDebugRemote.STACK_RPC_TIMEOUT_MS).join()
        val array = DolphinDbDebugMessageParser.dataAsArray(data) ?: return emptyList()
        val frames = mutableListOf<StackFrameData>()
        for (index in array.size() - 1 downTo 0) {
            val item = array.get(index).asJsonObject
            val stackFrameId = item.get("stackFrameId")?.takeIf { !it.isJsonNull }?.asInt ?: continue
            val line = item.get("line")?.asInt ?: 0
            val moduleNameElement = item.get("moduleName")
            val sharedScope = moduleNameElement == null || moduleNameElement.isJsonNull
            val moduleName = if (sharedScope) null else moduleNameElement.asString
            val serverName = item.get("name")?.takeIf { !it.isJsonNull }?.asString
            val label = when {
                sharedScope -> DolphinDbBundle.message("debug.stack.shared")
                !serverName.isNullOrBlank() -> serverName
                else -> DolphinDbBundle.message("debug.stack.line", launch.editorLine(line) + 1)
            }
            frames += StackFrameData(
                stackFrameId = stackFrameId,
                line = line,
                column = item.get("column")?.asInt ?: 0,
                label = label,
                moduleName = moduleName,
                sharedScope = sharedScope,
                fetchVariables = true,
            )
        }
        return frames
    }

    private fun createXStackFrame(frame: StackFrameData, suspendEpoch: Int): XStackFrame {
        val file = resolveFile(frame.moduleName, frame.sharedScope)
        val position = XSourcePositionImpl.create(file, launch.editorLine(frame.line.coerceAtLeast(0)))
        return object : XStackFrame() {
            override fun getSourcePosition(): XSourcePosition = position

            override fun getEqualityObject(): Any = frame.stackFrameId to suspendEpoch

            override fun computeChildren(node: com.intellij.xdebugger.frame.XCompositeNode) {
                if (!frame.fetchVariables) {
                    node.addChildren(XValueChildrenList(), true)
                    return
                }
                DolphinDbDebugValue.loadScopeVariables(remote, frame.stackFrameId, node)
            }
        }
    }

    internal fun resolveFile(moduleName: String?, sharedScope: Boolean): VirtualFile {
        if (sharedScope) {
            return entryFile
        }
        if (moduleName.isNullOrEmpty()) {
            return entryFile
        }
        val path = modules[moduleName] ?: return entryFile
        return LocalFileSystem.getInstance().findFileByPath(path)
            ?: LocalFileSystem.getInstance().findFileByPath(normalizePath(path))
            ?: entryFile
    }

    private fun trackBreakpoint(
        breakpoint: XLineBreakpoint<DolphinDbLineBreakpointType.DolphinDbBreakpointProperties>,
        register: Boolean,
    ) {
        val path = breakpointPath(breakpoint)
        if (path == null) {
            log.warn("Skip breakpoint at line ${breakpoint.line}: unable to resolve file URL")
            return
        }
        if (!breakpoint.isEnabled || path != entryPath) {
            log.debug("Skip breakpoint line ${breakpoint.line}: path=$path entry=$entryPath enabled=${breakpoint.isEnabled}")
            return
        }
        if (register) {
            syncedBreakpointLines.add(breakpoint.line)
        } else {
            syncedBreakpointLines.remove(breakpoint.line)
        }
    }

    private fun syncBreakpointsToServer(): java.util.concurrent.CompletableFuture<*> {
        if (terminated.get() || !scriptResolved.get()) {
            return java.util.concurrent.CompletableFuture.completedFuture(null)
        }
        val lines = syncedBreakpointLines.mapNotNull { launch.serverLine(it) }.sorted()
        log.info("setBreaks $entryPath editor=${syncedBreakpointLines.sorted()} server=$lines")
        return remote.call<JsonElement>("setBreaks", listOf("", lines)).whenComplete { _, error ->
            if (error != null) {
                log.warn("setBreaks failed for $entryPath lines=$lines", error)
                ApplicationManager.getApplication().invokeLater {
                    session.consoleView?.print(
                        "setBreaks: ${error.message}\n",
                        ConsoleViewContentType.ERROR_OUTPUT,
                    )
                }
            }
        }
    }

    private fun parseModules(parseResult: JsonElement?): Map<String, String> {
        val root = DolphinDbDebugMessageParser.dataAsObject(parseResult) ?: return emptyMap()
        val modulesElement = root.get("modules")?.asJsonObject ?: return emptyMap()
        return modulesElement.entrySet().associate { (name, pathElement) ->
            name to normalizePath(pathElement.asString)
        }
    }

    private fun printOutput(message: DebugReceiveMessage, contentType: ConsoleViewContentType) {
        val dataText = message.data?.takeIf { !it.isJsonNull }?.toString()
        val messageText = message.message.takeIf { it.isNotBlank() && it != "OK" }
        val text = when {
            messageText != null && dataText != null -> "$messageText | data=$dataText"
            messageText != null -> messageText
            dataText != null -> dataText
            else -> return
        }
        ApplicationManager.getApplication().invokeLater {
            session.consoleView?.print("$text\n", contentType)
        }
    }

    private fun reportError(error: Throwable) {
        session.consoleView?.print("${error.message}\n", ConsoleViewContentType.ERROR_OUTPUT)
    }

    internal data class StackFrameData(
        val stackFrameId: Int,
        val line: Int,
        val label: String,
        val column: Int,
        val moduleName: String?,
        val sharedScope: Boolean,
        val fetchVariables: Boolean = true,
    )

    private class DolphinDbExecutionStack(
        displayName: String,
        private val frames: List<XStackFrame>,
    ) : XExecutionStack(displayName) {
        override fun computeStackFrames(firstFrameIndex: Int, container: XStackFrameContainer) {
            container.addStackFrames(frames, true)
        }

        override fun getTopFrame(): XStackFrame? = frames.firstOrNull()
    }

    private class DolphinDbSuspendContext(
        private val executionStack: XExecutionStack,
    ) : XSuspendContext() {
        override fun getActiveExecutionStack(): XExecutionStack? = executionStack
    }

    private fun breakpointPath(breakpoint: XLineBreakpoint<*>): String? {
        val fileUrl = breakpoint.fileUrl ?: return null
        val file = VirtualFileManager.getInstance().findFileByUrl(fileUrl) ?: return null
        return normalizePath(file.path)
    }

    private fun loadInitialBreakpoints() {
        val breakpointManager = com.intellij.xdebugger.XDebuggerManager.getInstance(project).breakpointManager
        breakpointManager.allBreakpoints
            .filter { it.type.id == DolphinDbLineBreakpointType.ID }
            .filterIsInstance<XLineBreakpoint<DolphinDbLineBreakpointType.DolphinDbBreakpointProperties>>()
            .forEach { trackBreakpoint(it, register = true) }
    }

    companion object {
        fun normalizePath(path: String): String =
            Path.of(path).normalize().toString().replace('\\', '/')
    }
}

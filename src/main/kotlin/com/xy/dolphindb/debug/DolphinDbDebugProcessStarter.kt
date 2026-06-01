package com.xy.dolphindb.debug

import com.intellij.xdebugger.XDebugProcess
import com.intellij.xdebugger.XDebugProcessStarter
import com.intellij.xdebugger.XDebugSession

class DolphinDbDebugProcessStarter(
    private val launch: DolphinDbDebugLaunch,
) : XDebugProcessStarter() {
    override fun start(session: XDebugSession): XDebugProcess =
        DolphinDbDebugProcess(session, session.project, launch)
}

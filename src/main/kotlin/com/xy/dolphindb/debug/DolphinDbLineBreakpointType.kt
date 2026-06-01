package com.xy.dolphindb.debug

import com.intellij.openapi.project.Project
import com.intellij.xdebugger.breakpoints.XBreakpointProperties
import com.intellij.xdebugger.breakpoints.XLineBreakpointType
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.DolphinDbFileType

class DolphinDbLineBreakpointType : XLineBreakpointType<DolphinDbLineBreakpointType.DolphinDbBreakpointProperties>(
    ID,
    DolphinDbBundle.message("debug.breakpoint.title"),
) {
    override fun canPutAt(file: com.intellij.openapi.vfs.VirtualFile, line: Int, project: Project): Boolean =
        file.fileType == DolphinDbFileType.INSTANCE

    override fun createBreakpointProperties(file: com.intellij.openapi.vfs.VirtualFile, line: Int): DolphinDbBreakpointProperties =
        DolphinDbBreakpointProperties()

    class DolphinDbBreakpointProperties : XBreakpointProperties<DolphinDbBreakpointProperties>() {
        override fun getState(): DolphinDbBreakpointProperties = this
        override fun loadState(state: DolphinDbBreakpointProperties) {}
    }

    companion object {
        const val ID: String = "dolphindb-line"
    }
}

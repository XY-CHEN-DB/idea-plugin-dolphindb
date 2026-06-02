package com.xy.dolphindb.debug

import com.google.gson.JsonObject
import com.intellij.openapi.application.ApplicationManager
import com.intellij.xdebugger.frame.XCompositeNode
import com.intellij.xdebugger.frame.XNamedValue
import com.intellij.xdebugger.frame.XValue
import com.intellij.xdebugger.frame.XValueChildrenList
import com.intellij.xdebugger.frame.XValueNode
import com.intellij.xdebugger.frame.XValuePlace
import com.intellij.xdebugger.frame.presentation.XStringValuePresentation

internal data class DebugVariable(
    val name: String,
    val value: String,
    val variablesReference: Int,
    val frameId: Int,
)

internal object DolphinDbDebugValue {
    private const val VARIABLE_REF_FLAG = 1 shl 30

    fun variableRefForChild(frameId: Int, vid: Int): Int =
        VARIABLE_REF_FLAG or ((frameId and 0x3fff) shl 16) or (vid and 0xffff)

    fun fromJson(frameId: Int, json: JsonObject): DebugVariable {
        val name = json.get("name")?.asString.orEmpty()
        val value = json.get("value")?.takeIf { !it.isJsonNull }?.asString
        val data = json.get("data")?.takeIf { !it.isJsonNull }
        val vid = json.get("vid")?.asInt ?: 0
        val form = json.get("form")?.asString.orEmpty()
        val type = json.get("type")?.asString.orEmpty()
        val display = when {
            value != null -> value
            data != null -> data.toString()
            form.isNotEmpty() || type.isNotEmpty() -> "$form<$type>"
            else -> ""
        }
        val reference = if (value == null && data == null && vid != 0) {
            variableRefForChild(frameId, vid)
        } else {
            0
        }
        return DebugVariable(name, display, reference, frameId)
    }

    fun namedValue(variable: DebugVariable, remote: DolphinDbDebugRemote): XNamedValue =
        object : XNamedValue(variable.name) {
            override fun computePresentation(node: XValueNode, place: XValuePlace) {
                node.setPresentation(null, XStringValuePresentation(variable.value), variable.variablesReference > 0)
            }

            override fun computeChildren(node: XCompositeNode) {
                if (variable.variablesReference <= 0) {
                    node.addChildren(XValueChildrenList(), true)
                    return
                }
                val childFrameId = frameIdFromReference(variable.variablesReference)
                val vid = vidFromReference(variable.variablesReference)
                ApplicationManager.getApplication().executeOnPooledThread {
                    try {
                        val data = remote.call<com.google.gson.JsonElement>(
                            "getVariable",
                            listOf(childFrameId, vid, variable.name),
                            DolphinDbDebugRemote.STACK_RPC_TIMEOUT_MS,
                        ).join()
                        val children = XValueChildrenList()
                        val obj = DolphinDbDebugMessageParser.dataAsObject(data)
                        if (obj != null) {
                            children.add(namedValue(fromJson(childFrameId, obj), remote))
                        }
                        ApplicationManager.getApplication().invokeLater {
                            node.addChildren(children, true)
                        }
                    } catch (error: Exception) {
                        ApplicationManager.getApplication().invokeLater {
                            node.setErrorMessage(error.message.orEmpty())
                        }
                    }
                }
            }
        }

    fun loadScopeVariables(remote: DolphinDbDebugRemote, frameId: Int, node: XCompositeNode) {
        ApplicationManager.getApplication().executeOnPooledThread {
            try {
                val data = remote.call<com.google.gson.JsonElement>(
                    "getStackVariables",
                    listOf(frameId),
                    DolphinDbDebugRemote.STACK_RPC_TIMEOUT_MS,
                ).join()
                val array = DolphinDbDebugMessageParser.dataAsArray(data)
                val children = XValueChildrenList()
                if (array != null) {
                    for (index in 0 until array.size()) {
                        val item = array.get(index)
                        if (item.isJsonObject) {
                            children.add(namedValue(fromJson(frameId, item.asJsonObject), remote))
                        }
                    }
                }
                ApplicationManager.getApplication().invokeLater {
                    node.addChildren(children, true)
                }
            } catch (error: Exception) {
                ApplicationManager.getApplication().invokeLater {
                    node.setErrorMessage(error.message.orEmpty())
                }
            }
        }
    }

    private fun frameIdFromReference(reference: Int): Int = (reference shr 16) and 0x3fff

    private fun vidFromReference(reference: Int): Int = reference and 0xffff
}

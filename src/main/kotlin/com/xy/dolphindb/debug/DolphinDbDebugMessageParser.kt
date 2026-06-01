package com.xy.dolphindb.debug

import com.google.gson.Gson
import com.google.gson.JsonArray
import com.google.gson.JsonElement
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import java.nio.ByteBuffer
import java.nio.ByteOrder

internal data class DebugReceiveMessage(
    val id: Int?,
    val event: String?,
    val func: String?,
    val message: String,
    val data: JsonElement?,
)

internal object DolphinDbDebugMessageParser {
    private val gson = Gson()

    fun parse(buffer: ByteArray): DebugReceiveMessage? {
        if (buffer.size < 4) {
            return null
        }
        val jsonLength = ByteBuffer.wrap(buffer, 0, 4).order(ByteOrder.LITTLE_ENDIAN).int
        if (buffer.size < 4 + jsonLength) {
            return null
        }
        val jsonText = buffer.decodeToString(4, 4 + jsonLength)
        val root = JsonParser.parseString(jsonText).asJsonObject
        enrichBinaryValues(root, buffer, 4 + jsonLength)
        return DebugReceiveMessage(
            id = root.get("id")?.takeIf { !it.isJsonNull }?.asInt,
            event = root.get("event")?.takeIf { !it.isJsonNull }?.asString,
            func = root.get("func")?.takeIf { !it.isJsonNull }?.asString,
            message = root.get("message")?.asString.orEmpty(),
            data = root.get("data"),
        )
    }

    fun dataAsObject(data: JsonElement?): JsonObject? =
        data?.takeIf { it.isJsonObject }?.asJsonObject

    fun dataAsArray(data: JsonElement?): JsonArray? =
        data?.takeIf { it.isJsonArray }?.asJsonArray

    fun <T> parseData(data: JsonElement?, type: Class<T>): T? =
        if (data == null || data.isJsonNull) null else gson.fromJson(data, type)

    private fun enrichBinaryValues(root: JsonObject, buffer: ByteArray, startOffset: Int) {
        var offset = startOffset
        val data = root.get("data") ?: return
        when {
            data.isJsonArray -> data.asJsonArray.forEach { element ->
                if (element.isJsonObject) {
                    offset = enrichItem(element.asJsonObject, buffer, offset)
                }
            }
            data.isJsonObject -> enrichItem(data.asJsonObject, buffer, offset)
        }
    }

    private fun enrichItem(item: JsonObject, buffer: ByteArray, offset: Int): Int {
        if (!item.has("offset")) {
            return offset
        }
        val itemOffset = item.get("offset").asInt
        if (itemOffset == -1) {
            val form = item.get("form")?.asString.orEmpty()
            val type = item.get("type")?.asString.orEmpty()
            val bytes = item.get("bytes")?.asInt ?: 0
            item.addProperty("value", "$form<$type> Too large to display($bytes bytes)")
            return offset
        }
        if (itemOffset <= 0) {
            return offset
        }
        val end = offset + itemOffset
        if (!item.has("value") && end <= buffer.size) {
            val binary = buffer.copyOfRange(offset, end)
            val parsed = DolphinDbDebugEntityParser.formatBinaryValue(binary)
            if (parsed != null) {
                item.addProperty("value", parsed)
            } else {
                val form = item.get("form")?.asString.orEmpty()
                val type = item.get("type")?.asString.orEmpty()
                item.addProperty("value", if (form.isNotEmpty() || type.isNotEmpty()) "$form<$type>" else "<binary>")
            }
        }
        return end
    }
}

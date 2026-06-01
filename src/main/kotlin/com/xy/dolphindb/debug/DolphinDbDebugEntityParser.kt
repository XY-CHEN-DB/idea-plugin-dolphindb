package com.xy.dolphindb.debug

import com.xxdb.data.BasicEntityFactory
import com.xxdb.data.Entity
import com.xxdb.io.LittleEndianDataInputStream
import com.xy.dolphindb.execution.DolphinDbResultConverter
import java.io.ByteArrayInputStream

/** Parses debug-protocol binary payloads (same layout as VS Code `DdbObj.parse`). */
internal object DolphinDbDebugEntityParser {
    fun formatBinaryValue(bytes: ByteArray): String? {
        if (bytes.size < 2) {
            return null
        }
        var typeValue = bytes[0].toInt() and 0xff
        val extended = typeValue >= 128
        if (extended) {
            typeValue -= 128
        }
        val formValue = bytes[1].toInt() and 0xff
        val dataStart = if (formValue == SET_FORM) 4 else 2
        if (bytes.size <= dataStart) {
            return null
        }
        return runCatching {
            val dataType = Entity.DATA_TYPE.valueOf(typeValue)
            val dataForm = Entity.DATA_FORM.values().getOrNull(formValue)
                ?: return null
            val input = LittleEndianDataInputStream(
                ByteArrayInputStream(bytes, dataStart, bytes.size - dataStart),
            )
            val entity = BasicEntityFactory.instance()
                .createEntity(dataForm, dataType, input, extended)
            formatEntity(entity)
        }.getOrNull()
    }

    private fun formatEntity(entity: Entity): String {
        val (text, _) = DolphinDbResultConverter.toExecutionPayload(entity)
        return text.ifBlank {
            runCatching { entity.getString() }.getOrNull().orEmpty().ifBlank { entity.toString() }
        }
    }

    private const val SET_FORM = 4
}

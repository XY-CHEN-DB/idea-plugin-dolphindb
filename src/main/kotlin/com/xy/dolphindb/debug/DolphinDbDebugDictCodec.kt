package com.xy.dolphindb.debug

import com.xxdb.data.BasicAnyVector
import com.xxdb.data.BasicBoolean
import com.xxdb.data.BasicInt
import com.xxdb.data.BasicIntVector
import com.xxdb.data.BasicString
import com.xxdb.data.BasicStringVector
import com.xxdb.data.Entity
import com.xxdb.data.Entity.DATA_FORM
import com.xxdb.data.Entity.DATA_TYPE
import com.xxdb.data.Scalar
import com.xxdb.data.Vector
import com.xxdb.io.LittleEndianDataOutputStream
import java.io.ByteArrayOutputStream

/** Packs RPC messages as DolphinDB dictionary binary (same wire format as VS Code debug adapter). */
internal object DolphinDbDebugDictCodec {
    fun packMessage(id: Int, func: String, args: Any? = null): ByteArray {
        val keys = arrayListOf("id", "func")
        val values = arrayListOf<Entity>(BasicInt(id), BasicString(func))
        if (args != null) {
            keys += "data"
            values += toCallArgs(args)
        }
        return writeDictionary(
            BasicStringVector(keys.toTypedArray()),
            values.toAnyVector(),
        )
    }

    /** Encode RPC `data` argument — mirrors VS Code `array2ddbvector` / `json2ddbdict`. */
    fun toCallArgs(value: Any): Entity {
        return when (value) {
            is List<*> -> listToCallArgs(value)
            is String -> BasicStringVector(arrayOf(value))
            else -> toScalarEntity(value)
        }
    }

    private fun listToCallArgs(list: List<*>): Entity {
        if (list.isEmpty()) {
            return BasicAnyVector(0)
        }
        if (list.all { it is String }) {
            return BasicStringVector(list.filterIsInstance<String>().toTypedArray())
        }
        if (list.all { it is Int }) {
            return BasicIntVector(list.filterIsInstance<Int>().toIntArray())
        }
        if (list.all { it is Number }) {
            return BasicIntVector(list.map { (it as Number).toInt() }.toIntArray())
        }
        val vector = BasicAnyVector(list.size)
        list.forEachIndexed { index, item ->
            vector.setEntity(
                index,
                when (item) {
                    is List<*> -> listToCallArgs(item)
                    else -> toScalarEntity(item)
                },
            )
        }
        return vector
    }

    private fun toScalarEntity(value: Any?): Entity {
        return when (value) {
            null -> BasicString("")
            is String -> BasicString(value)
            is Boolean -> BasicBoolean(value)
            is Int -> BasicInt(value)
            is Number -> BasicInt(value.toInt())
            else -> BasicString(value.toString())
        }
    }

    private fun List<Entity>.toAnyVector(): BasicAnyVector {
        val vector = BasicAnyVector(size)
        forEachIndexed { index, entity -> vector.setEntity(index, entity) }
        return vector
    }

    /**
     * Write a string-keyed / any-valued dictionary without [com.xxdb.data.BasicDictionary.write],
     * which incorrectly casts all values to [Scalar] and fails for vector payloads.
     */
    private fun writeDictionary(keys: BasicStringVector, values: Vector): ByteArray {
        val buffer = ByteArrayOutputStream()
        LittleEndianDataOutputStream(buffer).use { output ->
            val flag = (DATA_FORM.DF_DICTIONARY.ordinal shl 8) or DATA_TYPE.DT_ANY.value
            output.writeShort(flag)
            keys.write(output)
            values.write(output)
        }
        return buffer.toByteArray()
    }
}

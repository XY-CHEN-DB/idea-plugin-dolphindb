package com.xy.dolphindb.execution

import org.junit.Assert.assertEquals
import org.junit.Test

class DolphinDbScriptNormalizerTest {
    @Test
    fun `normalizes line endings only`() {
        assertEquals("a\nb", DolphinDbScriptNormalizer.normalize("a\r\nb"))
    }

    @Test
    fun `does not insert semicolons for create database blocks`() {
        val input = """
            CREATE DATABASE "dfs://compodb"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25])
        """.trimIndent()

        assertEquals(input, DolphinDbScriptNormalizer.normalize(input))
    }

    @Test
    fun `does not insert semicolons for multiline select`() {
        val input = """
            select *
            from t
            where sym = `A
            order by id
        """.trimIndent()

        assertEquals(input, DolphinDbScriptNormalizer.normalize(input))
    }

    @Test
    fun `does not insert semicolons inside multiline table call`() {
        val input = """
            t = table(
                1..3 as id,
                rand(10.0, 3) as val
            )
            share t as t1
        """.trimIndent()

        val normalized = DolphinDbScriptNormalizer.normalize(input)
        assert(!normalized.contains("table(;")) { normalized }
        assert(!normalized.contains("id;")) { normalized }
        assert(!normalized.contains("share t as t1;")) { normalized }
    }

    @Test
    fun `does not insert semicolons after block braces`() {
        val input = """
            def dropSharedTable(name) {
                try {
                    undef(name, SHARED)
                } catch (ex) {
                }
            }
            dropSharedTable(`t)
        """.trimIndent()

        val normalized = DolphinDbScriptNormalizer.normalize(input)
        assert(!normalized.contains("{;")) { "must not produce '{;':\n$normalized" }
        assert(!normalized.contains("dropSharedTable(`t);")) { normalized }
    }
}

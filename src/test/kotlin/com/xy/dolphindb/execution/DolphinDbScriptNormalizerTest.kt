package com.xy.dolphindb.execution

import org.junit.Assert.assertEquals
import org.junit.Test

class DolphinDbScriptNormalizerTest {
    @Test
    fun `does not split CREATE DATABASE from PARTITIONED BY`() {
        val input = """
            CREATE DATABASE "dfs://compodb"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25])
        """.trimIndent()

        val expected = """
            CREATE DATABASE "dfs://compodb"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25]);
        """.trimIndent()

        assertEquals(expected, DolphinDbScriptNormalizer.normalize(input))
    }

    @Test
    fun `removes semicolon before PARTITIONED BY`() {
        val input = """
            CREATE DATABASE "dfs://compodb2";
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25])
        """.trimIndent()

        val expected = """
            CREATE DATABASE "dfs://compodb2"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25]);
        """.trimIndent()

        assertEquals(expected, DolphinDbScriptNormalizer.normalize(input))
    }

    @Test
    fun `terminates two create database statements`() {
        val input = """
            CREATE DATABASE "dfs://a"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25])

            CREATE DATABASE "dfs://b"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25])
        """.trimIndent()

        val expected = """
            CREATE DATABASE "dfs://a"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25]);
            CREATE DATABASE "dfs://b"
            PARTITIONED BY VALUE(2020.01.01..2021.01.01), HASH([SYMBOL, 25]);
        """.trimIndent()

        assertEquals(expected, DolphinDbScriptNormalizer.normalize(input))
    }

    @Test
    fun `still terminates simple one-liners`() {
        assertEquals("select 1;", DolphinDbScriptNormalizer.normalize("select 1"))
    }

    @Test
    fun `does not semicolon inside multiline table call`() {
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
        assert(normalized.contains("share t as t1;")) { normalized }
    }

    @Test
    fun `does not semicolon before closing paren of multiline call`() {
        val input = """
            db = database(
                dbPath,
                COMPO,
                [VALUE(2024.01.01..2024.12.31), HASH([SYMBOL, 8])]
            )
            print("ok")
        """.trimIndent()

        val normalized = DolphinDbScriptNormalizer.normalize(input)
        assert(!normalized.contains("8])];")) { normalized }
        assert(normalized.contains("HASH([SYMBOL, 8])]")) { normalized }
        assert(normalized.contains("print(\"ok\");")) { normalized }
    }

    @Test
    fun `does not semicolon after block braces`() {
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
        assert(normalized.contains("dropSharedTable(`t);")) { normalized }
    }
}

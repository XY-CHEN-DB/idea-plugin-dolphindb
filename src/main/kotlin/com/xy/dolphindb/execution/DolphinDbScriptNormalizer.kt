package com.xy.dolphindb.execution

internal object DolphinDbScriptNormalizer {
    /**
     * Prepares a script for [com.xxdb.DBConnection.run]:
     * - Drops empty lines and `//` comments.
     * - Appends `;` only on lines that are complete statements (not block headers `{`, not lone `}`).
     * - Keeps [isContinuationLine] pairs (e.g. `CREATE DATABASE` + `PARTITIONED BY`) unsplit.
     */
    fun normalize(script: String): String {
        val lines = script.lineSequence()
            .map { it.trim() }
            .filter { it.isNotEmpty() && !it.startsWith("//") }
            .toList()
        if (lines.isEmpty()) {
            return script.trim()
        }
        return buildList {
            for (index in lines.indices) {
                var line = sanitizeLine(lines[index])
                val nextLine = lines.getOrNull(index + 1)
                val nextIsContinuation =
                    nextLine != null && isContinuationLine(nextLine)
                line = when {
                    nextIsContinuation -> stripStatementTerminator(line)
                    needsStatementTerminator(line, nextLine) -> "$line;"
                    else -> line
                }
                add(line)
            }
        }.joinToString("\n")
    }

    private fun isContinuationLine(line: String): Boolean {
        val head = line.trimStart().uppercase()
        return head.startsWith("PARTITIONED BY")
    }

    private fun needsStatementTerminator(line: String, nextLine: String?): Boolean {
        val trimmed = line.trimEnd()
        if (trimmed.endsWith(";")) {
            return false
        }
        if (
            trimmed.endsWith("{") ||
            trimmed.endsWith("(") ||
            trimmed.endsWith(",") ||
            trimmed == "}" ||
            trimmed == "};" ||
            trimmed == ")"
        ) {
            return false
        }
        val next = nextLine?.trim().orEmpty()
        if (trimmed.endsWith("]") && (next == ")" || next.startsWith(")"))) {
            return false
        }
        return true
    }

    private fun sanitizeLine(line: String): String {
        val trimmed = line.trimEnd()
        return if (trimmed.endsWith("{;")) {
            trimmed.dropLast(1)
        } else {
            trimmed
        }
    }

    private fun stripStatementTerminator(line: String): String =
        line.trimEnd().removeSuffix(";").trimEnd()
}

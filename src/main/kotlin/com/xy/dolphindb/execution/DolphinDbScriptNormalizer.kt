package com.xy.dolphindb.execution

internal object DolphinDbScriptNormalizer {
    /**
     * Prepares editor text for [com.xxdb.DBConnection.run].
     *
     * DolphinDB treats each line as a statement by default; multi-line continues when a line ends
     * with an operator, comma, `(`, etc. (see programming guide). The VS Code extension sends the
     * script unchanged via `ddb.eval('line://…\n' + text)` — it does not insert `;`.
     *
     * We only normalize line endings so the Java API sees consistent `\n` newlines.
     */
    fun normalize(script: String): String = script.replace("\r\n", "\n").replace('\r', '\n')

}

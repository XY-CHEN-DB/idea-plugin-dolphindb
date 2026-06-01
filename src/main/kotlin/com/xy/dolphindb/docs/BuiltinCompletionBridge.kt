package com.xy.dolphindb.docs

/**
 * Built-in keyword/constant/function completions for the LSP bridge.
 * VS Code registers the same data via [DocsService] in the extension host; IntelliJ routes
 * editor completion through LSP, so the language server calls back here.
 */
object BuiltinCompletionBridge {
    fun completions(query: String): List<BuiltinCompletionItem> {
        val docs = DocsService.getInstance()
        val matches = docs.complete(query)
        return buildList {
            matches.keywords.forEach { keyword ->
                add(BuiltinCompletionItem(label = keyword, kind = "keyword"))
            }
            matches.constants.forEach { constant ->
                add(BuiltinCompletionItem(label = constant, kind = "constant"))
            }
            matches.functions.forEach { function ->
                val summary = docs.getFunctionMarkdown(function)
                    ?.lineSequence()
                    ?.firstOrNull()
                    ?.trim()
                    ?.take(120)
                add(
                    BuiltinCompletionItem(
                        label = function,
                        kind = "function",
                        detail = summary,
                    ),
                )
            }
        }
    }

    data class BuiltinCompletionItem(
        val label: String,
        val kind: String,
        val detail: String? = null,
    )

    data class Request(
        val query: String = "",
    )
}

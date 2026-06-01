package com.xy.dolphindb.docs

import com.intellij.codeInsight.completion.CompletionContributor
import com.intellij.codeInsight.completion.CompletionParameters
import com.intellij.codeInsight.completion.CompletionProvider
import com.intellij.codeInsight.completion.CompletionResultSet
import com.intellij.codeInsight.completion.CompletionType
import com.intellij.codeInsight.lookup.LookupElementBuilder
import com.intellij.patterns.PlatformPatterns
import com.intellij.util.ProcessingContext
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.DolphinDbLanguage
import com.xy.dolphindb.psi.DolphinDbLexer
import com.xy.dolphindb.psi.DolphinDbPsiUtil

class DolphinDbCompletionContributor : CompletionContributor() {
    init {
        extend(
            CompletionType.BASIC,
            PlatformPatterns.psiElement().withLanguage(DolphinDbLanguage),
            BuiltinCompletionProvider(),
        )
    }

    private class BuiltinCompletionProvider : CompletionProvider<CompletionParameters>() {
        override fun addCompletions(
            parameters: CompletionParameters,
            context: ProcessingContext,
            result: CompletionResultSet,
        ) {
            if (parameters.originalFile.fileType != DolphinDbFileType.INSTANCE) {
                return
            }

            val prefix = DolphinDbPsiUtil.identifierPrefixAtOffset(parameters.editor.document, parameters.offset)
            if (prefix.isNotEmpty() && prefix.any { !DolphinDbLexer.isIdentifierPart(it) }) {
                return
            }

            val resultSet = if (prefix.isEmpty()) {
                result
            } else {
                result.withPrefixMatcher(prefix)
            }

            val docs = DocsService.getInstance()
            val matches = docs.complete(prefix)
            addBuiltinCompletions(resultSet, docs, matches)
        }

        internal fun addBuiltinCompletions(
            resultSet: CompletionResultSet,
            docs: DocsService,
            matches: DocsService.CompletionResult,
        ) {
            matches.keywords.forEach { keyword ->
                resultSet.addElement(
                    LookupElementBuilder.create(keyword)
                        .withTypeText("keyword", true)
                        .bold(),
                )
            }
            matches.constants.forEach { constant ->
                resultSet.addElement(
                    LookupElementBuilder.create(constant)
                        .withTypeText("constant", true),
                )
            }
            matches.functions.forEach { function ->
                val markdown = docs.getFunctionMarkdown(function)
                resultSet.addElement(
                    LookupElementBuilder.create(function)
                        .withTypeText("function", true)
                        .withTailText(markdown?.lineSequence()?.firstOrNull()?.take(80), true),
                )
            }
        }
    }
}

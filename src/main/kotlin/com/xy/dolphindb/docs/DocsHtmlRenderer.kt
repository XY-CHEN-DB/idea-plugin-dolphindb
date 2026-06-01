package com.xy.dolphindb.docs

import com.intellij.lang.documentation.DocumentationMarkup
import org.intellij.markdown.flavours.commonmark.CommonMarkFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser

object DocsHtmlRenderer {
    fun markdownToHtml(markdown: String): String {
        val flavour = CommonMarkFlavourDescriptor()
        val parsedTree = MarkdownParser(flavour).buildMarkdownTreeFromString(markdown)
        val body = HtmlGenerator(markdown, parsedTree, flavour).generateHtml()
        return buildString {
            append(DocumentationMarkup.CONTENT_START)
            append(body)
            append(DocumentationMarkup.CONTENT_END)
        }
    }

    fun documentationHint(markdown: String): String {
        val summary = markdown.lineSequence()
            .map { it.trim() }
            .firstOrNull { line ->
                line.isNotEmpty() &&
                    !line.startsWith("```") &&
                    !line.startsWith("####") &&
                    !line.startsWith("Related functions:")
            }
            ?.removePrefix("### ")
            ?.replace(Regex("\\[(.+?)]\\(.+?\\)"), "$1")
            ?: return ""

        return buildString {
            append(DocumentationMarkup.CONTENT_START)
            append(summary)
            append(DocumentationMarkup.CONTENT_END)
        }
    }
}

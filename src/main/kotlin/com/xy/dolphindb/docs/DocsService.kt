package com.xy.dolphindb.docs

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.components.Service
import com.xy.dolphindb.DolphinDbBundle
import java.util.Locale

@Service(Service.Level.APP)
class DocsService {
    private val gson = Gson()
    private val docs: Map<String, DocEntry> by lazy { loadDocs() }
    private val meta: LanguageMeta by lazy { loadMeta() }

    val functions: List<String> by lazy { docs.keys.sorted() }
    private val functionsLower: List<String> by lazy { functions.map { it.lowercase(Locale.ENGLISH) } }
    private val constantsLower: List<String> by lazy { meta.constants.map { it.lowercase(Locale.ENGLISH) } }

    fun getFunctionMarkdown(name: String): String? = findDocEntry(name)?.markdown

    fun getBuiltinMarkdown(name: String): String? = getFunctionMarkdown(name)

    fun getSignatures(name: String): List<DocSignature>? =
        findDocEntry(name)?.signatures

    fun getSignatureHelp(text: String): SignatureHelpResult? =
        computeSignatureHelp(
            text = text,
            signatures = { name -> getSignatures(name) },
            markdown = { name -> getFunctionMarkdown(name) },
        )

    private fun findDocEntry(name: String): DocEntry? =
        docs[name] ?: docs.entries.firstOrNull { it.key.equals(name, ignoreCase = true) }?.value

    fun complete(query: String): CompletionResult {
        val normalized = query.lowercase(Locale.ENGLISH)
        return CompletionResult(
            keywords = meta.keywords.filter { it.startsWith(query) },
            constants = fuzzyFilter(normalized, meta.constants, constantsLower),
            functions = fuzzyFilter(normalized, functions, functionsLower),
        )
    }

    fun findBuiltin(name: String): Boolean =
        docs.containsKey(name) ||
            meta.keywords.contains(name) ||
            meta.constants.contains(name)

    private fun loadDocs(): Map<String, DocEntry> {
        val locale = Locale.getDefault()
        val resourceName = if (locale.language == "zh") "/ddb/docs.zh.json" else "/ddb/docs.en.json"
        val stream = DocsService::class.java.getResourceAsStream(resourceName)
            ?: DocsService::class.java.getResourceAsStream("/ddb/docs.en.json")
            ?: error(DolphinDbBundle.message("docs.missing"))
        stream.bufferedReader().use { reader ->
            val type = object : TypeToken<Map<String, DocEntry>>() {}.type
            return gson.fromJson(reader, type)
        }
    }

    private fun loadMeta(): LanguageMeta {
        val stream = DocsService::class.java.getResourceAsStream("/ddb/language-meta.json")
            ?: error(DolphinDbBundle.message("languageMeta.missing"))
        stream.bufferedReader().use { reader ->
            return gson.fromJson(reader, LanguageMeta::class.java)
        }
    }

    private fun fuzzyFilter(queryLower: String, values: List<String>, valuesLower: List<String>): List<String> {
        if (queryLower.isEmpty()) {
            return values.take(50)
        }
        val result = ArrayList<String>()
        for (index in values.indices) {
            if (valuesLower[index].contains(queryLower)) {
                result.add(values[index])
            }
        }
        return result.take(100)
    }

    data class DocEntry(
        val url: String? = null,
        val markdown: String? = null,
        val signatures: List<DocSignature>? = null,
    )

    data class LanguageMeta(
        val keywords: List<String> = emptyList(),
        val constants: List<String> = emptyList(),
    )

    data class CompletionResult(
        val keywords: List<String>,
        val constants: List<String>,
        val functions: List<String>,
    )

    companion object {
        fun getInstance(): DocsService = ApplicationManager.getApplication().getService(DocsService::class.java)
    }
}

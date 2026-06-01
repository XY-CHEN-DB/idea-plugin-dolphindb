package com.xy.dolphindb.docs

private val FUNC_NAME_CHAR = Regex("[a-zA-Z0-9!_]")
private val LAST_IDENTIFIER = Regex("[a-zA-Z_\\u4e00-\\u9fa5][\\w\\u4e00-\\u9fa5]*!?$")

data class DocSignature(
    val full: String,
    val name: String? = null,
    val parameters: List<DocParameter> = emptyList(),
)

data class DocParameter(
    val full: String,
    val name: String? = null,
)

data class SignatureHelpResult(
    val funcName: String,
    val signature: DocSignature,
    val activeParameter: Int?,
    val documentationMarkdown: String?,
)

fun computeSignatureHelp(text: String, signatures: (String) -> List<DocSignature>?, markdown: (String) -> String?): SignatureHelpResult? {
    val caller = reverseSearchFunc(text) ?: return null
    val cursorParamIndex = findActiveParamIndex(text, caller.paramStartAt)
    if (cursorParamIndex == -1) {
        return null
    }

    val funcSignatures = signatures(caller.funcName) ?: return null
    if (funcSignatures.isEmpty()) {
        return null
    }

    val signature = funcSignatures.first()
    val paramsLength = signature.parameters.size
    val activeParameter = if (cursorParamIndex > paramsLength - 1) null else cursorParamIndex

    return SignatureHelpResult(
        funcName = caller.funcName,
        signature = signature,
        activeParameter = activeParameter,
        documentationMarkdown = markdown(caller.funcName),
    )
}

private data class CallerInfo(
    val funcName: String,
    val paramStartAt: Int,
)

private fun reverseSearchFunc(text: String): CallerInfo? {
    var depth = 0
    var paramStartAt = -1

    for (i in text.length - 1 downTo 0) {
        val char = text[i]
        when (char) {
            ')' -> depth++
            '(' -> depth--
        }

        if (FUNC_NAME_CHAR.matches(char.toString()) && depth < 0) {
            paramStartAt = i
            break
        }
    }

    if (paramStartAt == -1) {
        return null
    }

    var funcNameEnd = -1
    var funcNameStart = 0
    for (i in paramStartAt downTo 0) {
        val char = text[i]
        if (funcNameEnd == -1 && char == ' ') {
            continue
        }
        if (FUNC_NAME_CHAR.matches(char.toString())) {
            if (funcNameEnd == -1) {
                funcNameEnd = i
            }
            continue
        }
        funcNameStart = i + 1
        break
    }

    if (funcNameEnd == -1) {
        return null
    }

    return CallerInfo(
        funcName = text.substring(funcNameStart, funcNameEnd + 1),
        paramStartAt = paramStartAt + 1,
    )
}

private fun findActiveParamIndex(text: String, paramStartAt: Int): Int {
    var index = 0
    val stack = ArrayDeque<Char>()
    var commasCount = 0
    var isEscapingString = false

    for (i in paramStartAt until text.length) {
        val char = text[i]
        if (char.isWhitespace()) {
            continue
        }
        if (isEscapingString) {
            isEscapingString = false
            continue
        }

        val lastStack = stack.lastOrNull()
        if (lastStack == '"' || lastStack == '\'') {
            if (char == '\\') {
                isEscapingString = true
                continue
            }
            if (char == lastStack) {
                stack.removeLast()
            }
            continue
        }

        when (char) {
            '(', '{', '[', '"', '\'' -> stack.addLast(char)
            ')', '}', ']' -> {
                val expected = when (char) {
                    ')' -> '('
                    '}' -> '{'
                    ']' -> '['
                    else -> null
                }
                if (lastStack == expected) {
                    stack.removeLast()
                } else {
                    return -1
                }
            }
        }

        if (stack.size == 1 && stack.first() == '(' && char == ',') {
            commasCount++
        }
        index = commasCount
    }

    val caller = text.substring(0, paramStartAt)
    val match = LAST_IDENTIFIER.find(caller) ?: return index
    val isMemberCall = caller.getOrNull(paramStartAt - 1 - match.value.length) == '.'
    return if (isMemberCall) index + 1 else index
}

fun parameterHighlightRange(signature: DocSignature, activeParameter: Int?): Pair<Int, Int>? {
    if (activeParameter == null || activeParameter < 0 || activeParameter >= signature.parameters.size) {
        return null
    }

    val full = signature.full
    val openParen = full.indexOf('(')
    if (openParen < 0) {
        return null
    }

    var searchFrom = openParen + 1
    for (paramIndex in signature.parameters.indices) {
        val param = signature.parameters[paramIndex].full
        val paramStart = full.indexOf(param, searchFrom)
        if (paramStart < 0) {
            return null
        }
        if (paramIndex == activeParameter) {
            return paramStart to paramStart + param.length
        }
        searchFrom = paramStart + param.length
    }
    return null
}

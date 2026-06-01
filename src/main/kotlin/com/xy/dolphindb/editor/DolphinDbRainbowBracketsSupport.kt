package com.xy.dolphindb.editor

import com.intellij.openapi.Disposable
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.editor.Editor
import com.intellij.openapi.editor.EditorFactory
import com.intellij.openapi.editor.colors.EditorColorsListener
import com.intellij.openapi.editor.colors.EditorColorsManager
import com.intellij.openapi.editor.event.BulkAwareDocumentListener
import com.intellij.openapi.editor.event.CaretEvent
import com.intellij.openapi.editor.event.CaretListener
import com.intellij.openapi.editor.ex.EditorEx
import com.intellij.openapi.editor.highlighter.EditorHighlighter
import com.intellij.openapi.editor.highlighter.HighlighterIterator
import com.intellij.openapi.editor.markup.HighlighterLayer
import com.intellij.openapi.editor.markup.HighlighterTargetArea
import com.intellij.openapi.editor.markup.RangeHighlighter
import com.intellij.openapi.editor.markup.TextAttributes
import com.intellij.openapi.fileEditor.FileDocumentManager
import com.intellij.openapi.util.Disposer
import com.intellij.openapi.util.Key
import com.intellij.util.Alarm
import com.intellij.util.concurrency.AppExecutorUtil
import com.xy.dolphindb.DolphinDbFileType
import org.jetbrains.plugins.textmate.language.syntax.lexer.TextMateElementType
import org.jetbrains.plugins.textmate.language.syntax.lexer.TextMateScope

/**
 * Rainbow bracket foreground colors for TextMate-highlighted `.dos` editors.
 * IDEA's built-in "Rainbowify brackets" does not apply reliably with [TextMateEditorHighlighterProvider].
 */
internal object DolphinDbRainbowBracketsSupport {
    private val HIGHLIGHTERS_KEY = Key.create<MutableList<RangeHighlighter>>("ddb.rainbow.brackets")
    private val DISPOSABLE_KEY = Key.create<Disposable>("ddb.rainbow.brackets.disposable")

    private const val LAYER = HighlighterLayer.SYNTAX + 50

    init {
        ApplicationManager.getApplication().messageBus.connect().subscribe(
            EditorColorsManager.TOPIC,
            EditorColorsListener { refreshAllEditors() },
        )
    }

    fun attach(editor: Editor) {
        if (!isActive(editor) || editor.getUserData(DISPOSABLE_KEY) != null) {
            return
        }
        val disposable = Disposer.newDisposable("DolphinDB rainbow brackets")
        editor.putUserData(DISPOSABLE_KEY, disposable)

        val alarm = Alarm(Alarm.ThreadToUse.SWING_THREAD, disposable)
        fun scheduleRefresh() {
            if (!isActive(editor)) {
                return
            }
            alarm.cancelAllRequests()
            alarm.addRequest({ if (isActive(editor)) refresh(editor) }, 50)
        }

        editor.document.addDocumentListener(
            object : BulkAwareDocumentListener.Simple {
                override fun afterDocumentChange(document: com.intellij.openapi.editor.Document) {
                    scheduleRefresh()
                }
            },
            disposable,
        )
        editor.caretModel.addCaretListener(
            object : CaretListener {
                override fun caretPositionChanged(event: CaretEvent) {
                    scheduleRefresh()
                }
            },
            disposable,
        )
        editor.scrollingModel.addVisibleAreaListener({ scheduleRefresh() }, disposable)
        scheduleRefresh()
        Disposer.register(disposable) {
            detach(editor)
        }
    }

    fun detach(editor: Editor) {
        if (!editor.isDisposed) {
            clearHighlighters(editor)
        }
        editor.putUserData(DISPOSABLE_KEY, null)
        editor.putUserData(HIGHLIGHTERS_KEY, null)
    }

    fun releaseEditor(editor: Editor) {
        val disposable = editor.getUserData(DISPOSABLE_KEY) ?: return
        Disposer.dispose(disposable)
    }

    fun refresh(editor: Editor) {
        if (!isActive(editor)) {
            return
        }
        val file = FileDocumentManager.getInstance().getFile(editor.document) ?: return
        if (file.fileType != DolphinDbFileType.INSTANCE) {
            return
        }
        val visible = editor.scrollingModel.visibleArea
        val startLine = editor.xyToLogicalPosition(visible.location).line.coerceAtLeast(0)
        val endLine = editor.xyToLogicalPosition(
            java.awt.Point(visible.x + visible.width, visible.y + visible.height),
        ).line.coerceAtMost(editor.document.lineCount - 1)
        val startOffset = editor.document.getLineStartOffset(startLine)
        val endOffset = editor.document.getLineEndOffset(endLine)

        val text = editor.document.immutableCharSequence
        val highlighter = (editor as? EditorEx)?.highlighter
        val depths = computeBracketDepths(text, highlighter, startOffset, endOffset)

        clearHighlighters(editor)
        val created = mutableListOf<RangeHighlighter>()
        val markup = editor.markupModel
        for ((offset, depth) in depths) {
            if (offset < startOffset || offset >= endOffset) {
                continue
            }
            val scheme = EditorColorsManager.getInstance().globalScheme
            val color = DolphinDbRainbowBracketColors.foregroundForDepth(depth, scheme) ?: continue
            val attributes = TextAttributes(color, null, null, null, 0)
            val rangeHighlighter = markup.addRangeHighlighter(
                offset,
                offset + 1,
                LAYER,
                attributes,
                HighlighterTargetArea.EXACT_RANGE,
            )
            created.add(rangeHighlighter)
        }
        editor.putUserData(HIGHLIGHTERS_KEY, created)
    }

    private fun clearHighlighters(editor: Editor) {
        if (editor.isDisposed) {
            editor.putUserData(HIGHLIGHTERS_KEY, null)
            return
        }
        val markup = editor.markupModel
        editor.getUserData(HIGHLIGHTERS_KEY)?.forEach { markup.removeHighlighter(it) }
        editor.putUserData(HIGHLIGHTERS_KEY, null)
    }

    private fun isActive(editor: Editor): Boolean =
        !editor.isDisposed && editor.project?.isDisposed != true

    internal fun computeBracketDepths(
        text: CharSequence,
        highlighter: EditorHighlighter?,
        startOffset: Int,
        endOffset: Int,
    ): Map<Int, Int> {
        val result = linkedMapOf<Int, Int>()
        val stack = ArrayDeque<Pair<Char, Int>>()
        var i = startOffset
        while (i < endOffset) {
            if (highlighter != null && isStringOrComment(highlighter, i)) {
                i = skipToken(highlighter, i, endOffset)
                continue
            }
            val ch = text[i]
            if (ch == '<' && i + 1 < endOffset && (text[i + 1] == '=' || text[i + 1] == '-')) {
                i += 2
                continue
            }
            if (ch == '>' && i + 1 < endOffset && text[i + 1] == '=') {
                i += 2
                continue
            }
            if (ch == '>' && i > startOffset && text[i - 1] == '-') {
                i++
                continue
            }
            when (ch) {
                '(', '[', '{' -> stack.addLast(ch to i)
                ')', ']', '}' -> {
                    if (stack.isNotEmpty() && matches(stack.last().first, ch)) {
                        val depth = stack.size
                        val openOffset = stack.removeLast().second
                        result[openOffset] = depth
                        result[i] = depth
                    }
                }
            }
            i++
        }
        return result
    }

    private fun isStringOrComment(highlighter: EditorHighlighter, offset: Int): Boolean {
        val scopeName = scopeNameAt(highlighter, offset) ?: return false
        return scopeName.contains("string") || scopeName.contains("comment")
    }

    private fun skipToken(highlighter: EditorHighlighter, offset: Int, endOffset: Int): Int {
        val iterator = highlighter.createIterator(offset)
        return iterator.end.coerceAtMost(endOffset)
    }

    private fun scopeNameAt(highlighter: EditorHighlighter, offset: Int): String? {
        val iterator = highlighter.createIterator(offset)
        if (iterator.atEnd()) {
            return null
        }
        return textMateScopeName(iterator)
    }

    private fun textMateScopeName(iterator: HighlighterIterator): String? =
        (iterator.tokenType as? TextMateElementType)?.scope?.scopeName?.toString()

    private fun matches(open: Char, close: Char): Boolean =
        when (open) {
            '(' -> close == ')'
            '[' -> close == ']'
            '{' -> close == '}'
            else -> false
        }

    private fun refreshAllEditors() {
        if (ApplicationManager.getApplication().isDisposed) {
            return
        }
        for (editor in EditorFactory.getInstance().allEditors) {
            if (editor.getUserData(DISPOSABLE_KEY) != null) {
                refresh(editor)
            }
        }
    }
}

internal class DolphinDbRainbowBracketsEditorFactoryListener : com.intellij.openapi.editor.event.EditorFactoryListener {
    override fun editorCreated(event: com.intellij.openapi.editor.event.EditorFactoryEvent) {
        val editor = event.editor
        if (editor.isViewer || editor.project == null) {
            return
        }
        val file = FileDocumentManager.getInstance().getFile(editor.document) ?: return
        if (file.fileType != DolphinDbFileType.INSTANCE) {
            return
        }
        AppExecutorUtil.getAppExecutorService().execute {
            ApplicationManager.getApplication().invokeLater {
                DolphinDbRainbowBracketsSupport.attach(editor)
            }
        }
    }

    override fun editorReleased(event: com.intellij.openapi.editor.event.EditorFactoryEvent) {
        DolphinDbRainbowBracketsSupport.releaseEditor(event.editor)
    }
}

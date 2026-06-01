package com.xy.dolphindb.editor

import com.intellij.openapi.editor.colors.TextAttributesKey
import com.intellij.openapi.fileTypes.SyntaxHighlighter
import com.intellij.openapi.fileTypes.SyntaxHighlighterFactory
import com.intellij.openapi.options.colors.AttributesDescriptor
import com.intellij.openapi.options.colors.ColorDescriptor
import com.intellij.openapi.options.colors.ColorSettingsPage
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.DolphinDbFileType
import com.xy.dolphindb.DolphinDbLanguage
import javax.swing.Icon

class DolphinDbColorSettingsPage : ColorSettingsPage {
  override fun getIcon(): Icon? = DolphinDbFileType.INSTANCE.icon

  override fun getHighlighter(): SyntaxHighlighter =
    SyntaxHighlighterFactory.getSyntaxHighlighter(DolphinDbLanguage, null, null)

  override fun getDisplayName(): String = DolphinDbBundle.message("colorSettings.displayName")

  override fun getDemoText(): String =
    """
    def demo() {
      a = (a / v + (d / c))
      tbl = select * from t where x in (1, 2, 3)
    }
    """.trimIndent()

  override fun getAttributeDescriptors(): Array<AttributesDescriptor> = DESCRIPTORS

  override fun getColorDescriptors(): Array<ColorDescriptor> = ColorDescriptor.EMPTY_ARRAY

  override fun getAdditionalHighlightingTagToDescriptorMap(): Map<String, TextAttributesKey>? = null

  companion object {
    private val DESCRIPTORS = arrayOf(
      AttributesDescriptor(
        DolphinDbBundle.message("colorSettings.bracket.level", 1),
        DolphinDbRainbowBracketColors.BRACKET_LEVEL_1,
      ),
      AttributesDescriptor(
        DolphinDbBundle.message("colorSettings.bracket.level", 2),
        DolphinDbRainbowBracketColors.BRACKET_LEVEL_2,
      ),
      AttributesDescriptor(
        DolphinDbBundle.message("colorSettings.bracket.level", 3),
        DolphinDbRainbowBracketColors.BRACKET_LEVEL_3,
      ),
      AttributesDescriptor(
        DolphinDbBundle.message("colorSettings.bracket.level", 4),
        DolphinDbRainbowBracketColors.BRACKET_LEVEL_4,
      ),
      AttributesDescriptor(
        DolphinDbBundle.message("colorSettings.bracket.level", 5),
        DolphinDbRainbowBracketColors.BRACKET_LEVEL_5,
      ),
      AttributesDescriptor(
        DolphinDbBundle.message("colorSettings.bracket.level", 6),
        DolphinDbRainbowBracketColors.BRACKET_LEVEL_6,
      ),
    )
  }
}

package com.xy.dolphindb.editor

import com.intellij.openapi.editor.colors.EditorColorsScheme
import com.intellij.openapi.editor.colors.TextAttributesKey
import com.intellij.openapi.editor.markup.TextAttributes
import com.intellij.ui.JBColor
import java.awt.Color

object DolphinDbRainbowBracketColors {
  private val DEFAULTS = arrayOf(
    color(0xE06C75),
    color(0xD19A66),
    color(0xE5C07B),
    color(0x98C379),
    color(0x56B6C2),
    color(0xC678DD),
  )

  @JvmField
  val BRACKET_LEVEL_1: TextAttributesKey = key("DDB_BRACKET_LEVEL_1", DEFAULTS[0])

  @JvmField
  val BRACKET_LEVEL_2: TextAttributesKey = key("DDB_BRACKET_LEVEL_2", DEFAULTS[1])

  @JvmField
  val BRACKET_LEVEL_3: TextAttributesKey = key("DDB_BRACKET_LEVEL_3", DEFAULTS[2])

  @JvmField
  val BRACKET_LEVEL_4: TextAttributesKey = key("DDB_BRACKET_LEVEL_4", DEFAULTS[3])

  @JvmField
  val BRACKET_LEVEL_5: TextAttributesKey = key("DDB_BRACKET_LEVEL_5", DEFAULTS[4])

  @JvmField
  val BRACKET_LEVEL_6: TextAttributesKey = key("DDB_BRACKET_LEVEL_6", DEFAULTS[5])

  val LEVEL_KEYS: Array<TextAttributesKey> = arrayOf(
    BRACKET_LEVEL_1,
    BRACKET_LEVEL_2,
    BRACKET_LEVEL_3,
    BRACKET_LEVEL_4,
    BRACKET_LEVEL_5,
    BRACKET_LEVEL_6,
  )

  fun foregroundForDepth(depth: Int, scheme: EditorColorsScheme): java.awt.Color? {
    val key = LEVEL_KEYS[(depth - 1).mod(LEVEL_KEYS.size)]
    return scheme.getAttributes(key).foregroundColor ?: key.defaultAttributes.foregroundColor
  }

  private fun key(externalName: String, default: TextAttributes): TextAttributesKey =
    TextAttributesKey.createTextAttributesKey(externalName, default)

  private fun color(rgb: Int): TextAttributes =
    TextAttributes(JBColor(Color(rgb), Color(rgb)), null, null, null, 0)
}

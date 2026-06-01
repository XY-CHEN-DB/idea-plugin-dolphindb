package com.xy.dolphindb

import org.jetbrains.plugins.textmate.api.TextMateBundleProvider

class DolphinDbTextMateBundleProvider : TextMateBundleProvider {
    override fun getBundles(): List<TextMateBundleProvider.PluginBundle> {
        val bundlePath = DdbResourcePaths.textMateBundleDir()
        return listOf(TextMateBundleProvider.PluginBundle("dolphindb", bundlePath))
    }
}

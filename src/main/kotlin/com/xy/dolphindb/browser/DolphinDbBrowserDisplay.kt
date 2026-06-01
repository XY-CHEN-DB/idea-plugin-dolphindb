package com.xy.dolphindb.browser

internal object DolphinDbBrowserDisplay {
    fun primaryText(item: DolphinDbBrowserTreeItem): String = item.label

    fun secondaryText(item: DolphinDbBrowserTreeItem): String? {
        val explicit = item.detail.takeIf { it.isNotBlank() }
        if (explicit != null) {
            return explicit.takeUnless { it == item.label }
        }
        return when (item.payload) {
            is DolphinDbBrowserPayload.Table -> item.payload.schemaHandle
            is DolphinDbBrowserPayload.DfsDatabase -> item.payload.path
            is DolphinDbBrowserPayload.Schema -> item.payload.dbUrl
            is DolphinDbBrowserPayload.Column -> item.payload.typeString
            else -> null
        }?.takeIf { it.isNotBlank() && it != item.label }
    }

    fun displayText(item: DolphinDbBrowserTreeItem): String {
        val secondary = secondaryText(item)
        return if (secondary == null) item.label else "${item.label} ($secondary)"
    }
}

package com.xy.dolphindb.browser

enum class DolphinDbBrowserNodeKind {
    ROOT,
    STATUS,
    MESSAGE,
    SECTION,
    CATALOG,
    SCHEMA,
    DFS_DATABASE,
    TABLE,
    COLUMN,
}

enum class DolphinDbBrowserSection {
    CATALOGS,
    DFS_DATABASES,
    SHARED_TABLES,
}

sealed class DolphinDbBrowserPayload {
    data object None : DolphinDbBrowserPayload()

    data class Section(val section: DolphinDbBrowserSection) : DolphinDbBrowserPayload()

    data class Catalog(val name: String) : DolphinDbBrowserPayload()

    data class Schema(val catalog: String, val schema: String, val dbUrl: String) : DolphinDbBrowserPayload()

    data class DfsDatabase(val path: String) : DolphinDbBrowserPayload()

    data class Table(val displayName: String, val schemaHandle: String) : DolphinDbBrowserPayload()

    data class Column(val name: String, val typeString: String) : DolphinDbBrowserPayload()
}

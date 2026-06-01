package com.xy.dolphindb.browser

import com.intellij.openapi.project.Project
import com.xy.dolphindb.DolphinDbBundle
import com.xy.dolphindb.connection.DolphinDbConnectionOutcome
import com.xy.dolphindb.connection.DolphinDbJavaGateway
import com.xy.dolphindb.connection.DolphinDbSessionService
import com.xy.dolphindb.settings.DolphinDbSettings

internal object DolphinDbBrowserDataLoader {
    fun loadRoot(project: Project): List<DolphinDbBrowserTreeItem> {
        val session = DolphinDbSessionService.getInstance(project)
        val settings = DolphinDbSettings.getInstance().activeConnection()
        val connected = session.isConnected()
        val statusDetail = if (connected) {
            DolphinDbBundle.message("browser.status.connected")
        } else {
            DolphinDbBundle.message("browser.status.disconnected")
        }
        val endpointLabel = settings.name.ifBlank { settings.url }.ifBlank { DolphinDbBundle.message("browser.status.noConfig") }
        val items = mutableListOf(
            DolphinDbBrowserTreeItem(
                kind = DolphinDbBrowserNodeKind.STATUS,
                label = endpointLabel,
                detail = statusDetail,
                lazy = false,
            ),
        )
        if (!connected) {
            items += DolphinDbBrowserTreeItem(
                kind = DolphinDbBrowserNodeKind.MESSAGE,
                label = DolphinDbBundle.message("browser.connectHint"),
                lazy = false,
            )
            return items
        }
        items += section(DolphinDbBrowserSection.CATALOGS, DolphinDbBundle.message("browser.section.catalogs"))
        items += section(DolphinDbBrowserSection.DFS_DATABASES, DolphinDbBundle.message("browser.section.dfs"))
        items += section(DolphinDbBrowserSection.SHARED_TABLES, DolphinDbBundle.message("browser.section.shared"))
        return items
    }

    fun loadChildren(project: Project, item: DolphinDbBrowserTreeItem): List<DolphinDbBrowserTreeItem> {
        val session = DolphinDbSessionService.getInstance(project)
        if (!session.isConnected()) {
            return emptyList()
        }
        val section = (item.payload as? DolphinDbBrowserPayload.Section)?.section
        val isOptionalSection = section == DolphinDbBrowserSection.CATALOGS
        return when (val outcome = session.withConnectionOutcome { db ->
            when (item.payload) {
                is DolphinDbBrowserPayload.Section -> loadSection(db, item.payload.section)
                is DolphinDbBrowserPayload.Catalog -> loadSchemas(db, item.payload.name)
                is DolphinDbBrowserPayload.Schema -> loadTables(db, item.payload.dbUrl, item.label)
                is DolphinDbBrowserPayload.DfsDatabase -> loadDfsTables(db, item.payload.path)
                is DolphinDbBrowserPayload.Table -> loadColumns(db, item.payload.schemaHandle)
                else -> emptyList()
            }
        }) {
            is DolphinDbConnectionOutcome.Success -> outcome.value
            DolphinDbConnectionOutcome.NotConnected -> emptyList()
            is DolphinDbConnectionOutcome.Error -> if (isOptionalSection) {
                emptyList()
            } else {
                listOf(loadErrorItem(outcome.throwable))
            }
        }
    }

    private fun loadErrorItem(error: Throwable): DolphinDbBrowserTreeItem {
        val detail = error.message?.takeIf { it.isNotBlank() } ?: error.javaClass.simpleName
        return DolphinDbBrowserTreeItem(
            kind = DolphinDbBrowserNodeKind.MESSAGE,
            label = DolphinDbBundle.message("browser.loadError", detail),
            lazy = false,
        )
    }

    private fun loadSection(
        db: com.xxdb.DBConnection,
        section: DolphinDbBrowserSection,
    ): List<DolphinDbBrowserTreeItem> = when (section) {
        DolphinDbBrowserSection.CATALOGS ->
            DolphinDbJavaGateway.fetchCatalogs(db).sorted().map { catalog ->
                DolphinDbBrowserTreeItem(
                    kind = DolphinDbBrowserNodeKind.CATALOG,
                    label = catalog,
                    payload = DolphinDbBrowserPayload.Catalog(catalog),
                )
            }
        DolphinDbBrowserSection.DFS_DATABASES ->
            DolphinDbJavaGateway.fetchDfsDatabases(db).sorted().map { path ->
                DolphinDbBrowserTreeItem(
                    kind = DolphinDbBrowserNodeKind.DFS_DATABASE,
                    label = displayDfsPath(path),
                    detail = path,
                    payload = DolphinDbBrowserPayload.DfsDatabase(path),
                )
            }
        DolphinDbBrowserSection.SHARED_TABLES ->
            DolphinDbJavaGateway.fetchSharedTables(db).sorted().map { table ->
                val schemaHandle = DolphinDbJavaGateway.schemaHandleForSharedTable(table)
                DolphinDbBrowserTreeItem(
                    kind = DolphinDbBrowserNodeKind.TABLE,
                    label = table,
                    detail = schemaHandle,
                    payload = DolphinDbBrowserPayload.Table(
                        displayName = table,
                        schemaHandle = schemaHandle,
                    ),
                )
            }
    }

    private fun loadSchemas(db: com.xxdb.DBConnection, catalog: String): List<DolphinDbBrowserTreeItem> =
        DolphinDbJavaGateway.fetchSchemasByCatalog(db, catalog)
            .sortedBy { it.schema }
            .map { entry ->
                DolphinDbBrowserTreeItem(
                    kind = DolphinDbBrowserNodeKind.SCHEMA,
                    label = entry.schema,
                    detail = entry.dbUrl,
                    payload = DolphinDbBrowserPayload.Schema(catalog, entry.schema, entry.dbUrl),
                )
            }

    private fun loadTables(db: com.xxdb.DBConnection, dbUrl: String, schemaLabel: String): List<DolphinDbBrowserTreeItem> =
        DolphinDbJavaGateway.fetchTables(db, dbUrl).sorted().map { table ->
            val handle = if (dbUrl.startsWith("dfs://")) {
                DolphinDbJavaGateway.schemaHandleForDfsTable(dbUrl, table)
            } else {
                """loadTable("$dbUrl", "$table")"""
            }
            DolphinDbBrowserTreeItem(
                kind = DolphinDbBrowserNodeKind.TABLE,
                label = table,
                detail = handle,
                payload = DolphinDbBrowserPayload.Table(table, handle),
            )
        }

    private fun loadDfsTables(db: com.xxdb.DBConnection, dbPath: String): List<DolphinDbBrowserTreeItem> =
        DolphinDbJavaGateway.fetchTables(db, dbPath).sorted().map { table ->
            val schemaHandle = DolphinDbJavaGateway.schemaHandleForDfsTable(dbPath, table)
            DolphinDbBrowserTreeItem(
                kind = DolphinDbBrowserNodeKind.TABLE,
                label = table,
                detail = schemaHandle,
                payload = DolphinDbBrowserPayload.Table(
                    displayName = table,
                    schemaHandle = schemaHandle,
                ),
            )
        }

    private fun loadColumns(db: com.xxdb.DBConnection, schemaHandle: String): List<DolphinDbBrowserTreeItem> =
        DolphinDbJavaGateway.fetchColumnDefs(db, schemaHandle).map { column ->
            DolphinDbBrowserTreeItem(
                kind = DolphinDbBrowserNodeKind.COLUMN,
                label = column.name,
                detail = column.typeString,
                payload = DolphinDbBrowserPayload.Column(column.name, column.typeString),
                lazy = false,
            )
        }

    private fun section(section: DolphinDbBrowserSection, label: String) =
        DolphinDbBrowserTreeItem(
            kind = DolphinDbBrowserNodeKind.SECTION,
            label = label,
            payload = DolphinDbBrowserPayload.Section(section),
        )

    private fun displayDfsPath(path: String): String {
        val trimmed = path.removePrefix("dfs://").trimEnd('/')
        val lastDot = trimmed.lastIndexOf('.')
        return if (lastDot >= 0) trimmed.substring(lastDot + 1) else trimmed
    }
}

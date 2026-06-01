# Third-Party Notices

This document lists third-party software included in or used by **idea-plugin-dolphindb**.
For the full license text of this project, see [LICENSE](LICENSE) and [NOTICE](NOTICE).

## 1. DolphinDB VS Code extension (bundled resources)

| Field | Value |
|-------|--------|
| Component | LSP server bundle, documentation JSON, TextMate grammar |
| Location | `src/main/resources/ddb/` |
| Upstream | https://github.com/dolphindb/vscode-extension |
| License | Apache License 2.0 |
| Files | `languageserver.cjs`, `docs.en.json`, `docs.zh.json`, `dolphindb.tmLanguage.json`, `textmate/*` |

**Local modifications:** The checked-in `languageserver.cjs` is a webpack bundle based on the VS Code extension output, with additional IntelliJ IDEA integration (custom JSON-RPC methods such as `lsp/getBuiltinCompletions` and host bridge hooks). When refreshing from upstream, merge these changes manually (see README).

**Transitive licenses in `languageserver.cjs`:** The bundle embeds dependencies commonly used by VS Code language servers, including but not limited to:

- `vscode-jsonrpc`, `vscode-languageserver`, `vscode-languageserver-protocol` (MIT, Microsoft)
- Other npm packages as resolved at upstream build time

A complete per-package license list can be regenerated from the VS Code extension repository build when updating the bundle.

## 2. DolphinDB Java API

| Field | Value |
|-------|--------|
| Component | `com.dolphindb:dolphindb-javaapi` |
| Upstream | https://github.com/dolphindb/api-java |
| License | Apache License 2.0 |
| Version | See `gradle/libs.versions.toml` (`dolphindb-javaapi`) |
| Usage | Gradle `implementation`; redistributed inside the plugin ZIP |

## 3. JetBrains IntelliJ Platform

| Field | Value |
|-------|--------|
| Component | IntelliJ Platform SDK (compile-only / runIde sandbox) |
| License | JetBrains proprietary (see [JetBrains Developer Agreement](https://www.jetbrains.com/legal/docs/toolbox/user/)) |
| Usage | Plugin development and testing only; platform code is **not** part of this repository's open-source distribution |

## 4. Other Gradle dependencies

| Component | License | Notes |
|-----------|---------|--------|
| JUnit 4 | EPL-1.0 | Test scope only |

## Trademarks

DolphinDB is a trademark of its respective owners. This community plugin is not affiliated with or endorsed by DolphinDB.

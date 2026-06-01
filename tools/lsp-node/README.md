# LSP Node 工作区

本目录**仅用于 DolphinDB IDEA 插件的 LSP（Language Server）运行时**，与数据库连接无关。

## 作用

- 插件内的 `languageserver.cjs` 已随 zip 打包，**不需要**在这里安装 `dolphindb` npm 包。
- 数据库/SQL 元数据桥接已改用 **Java API**（`dolphindb-javaapi`），不依赖本目录的 `node_modules`。

## 你需要什么

1. 安装 [Node.js](https://nodejs.org/) 18+（或使用本目录通过 nvm 固定版本）。
2. 在 IDEA：**Settings → Tools → DolphinDB → Node.js path**  
   - 留空：使用系统 `PATH` 中的 `node`  
   - 或填写绝对路径，例如 `/usr/local/bin/node`

可选：在本目录执行 `npm run check` 确认 Node 可用。

## 不在这里做什么

- **不要**为连库安装 `dolphindb` npm（已废弃，改用 Java API）。
- **不要**把 VS Code 插件整个仓库的 `node_modules` 指到 Settings（旧方案，已移除）。

# Changelog

本文件遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。

## [Unreleased]

### Added

- `.dos` 文件类型、TextMate 语法高亮、彩虹括号配色页
- 内置关键字 / 常量 / 函数补全与 Quick Documentation（中英文 docs JSON）
- LSP：符号补全、跳转、hover、Structure、`use` 跨文件解析
- LSP / Java 桥接：`lsp/getFiles`、`ddb/*` 元数据
- Settings：多连接、Password Safe、Node.js 路径
- 脚本执行与 Results Tool Window
- DolphinDB Browser Tool Window
- Debug：断点、运行/调试、变量视图
- Gradle `copyVscodeAssets`：从 VS Code 插件构建产物可选同步

### Changed

- 目标 IDE：**2025.3+**（`sinceBuild = 253`），JVM 21
- 连库与执行改用 **dolphindb-javaapi**（不再依赖 npm `dolphindb`）

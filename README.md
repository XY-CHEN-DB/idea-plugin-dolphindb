# idea-plugin-dolphindb

面向 IntelliJ IDEA 的 **DolphinDB 非官方社区插件**（`.dos` 脚本）。本仓库由社区维护，**与 DolphinDB 公司无隶属或背书关系**。

## AI 辅助开发说明

本仓库中的 **Kotlin 插件实现、构建脚本与项目文档** 在开发过程中使用了 **AI 编程助手**（如 Cursor 等）参与生成与改写；维护者对合并进仓库的内容进行审阅与测试，并对发布版本负责。

- **不属于**「AI 生成」的部分：随仓库分发的 [dolphindb/vscode-extension](https://github.com/dolphindb/vscode-extension) 构建产物（`src/main/resources/ddb/`）、Maven 依赖 [dolphindb/api-java](https://github.com/dolphindb/api-java)，以及 JetBrains IntelliJ Platform——其版权与许可证见 [NOTICE](NOTICE) 与 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
- 使用或二次开发本仓库时，请自行审查代码是否满足你的安全与合规要求；欢迎通过 Issue / PR 报告问题。

## 免责声明

- 本插件按「原样」提供，不提供任何明示或暗示的保证。
- 「DolphinDB」及相关商标归其权利人所有；本插件仅声明与 DolphinDB 产品的兼容性。
- 连接生产环境 DolphinDB 前请自行评估安全与数据风险；凭据保存在 IDE 的 Password Safe 中，插件不会上传密码。
- 发布到 JetBrains Marketplace 前，请在 `plugin.xml` 中将 `<vendor>` 的 URL 改为你自己的 GitHub 仓库地址。

## 功能

| 能力 | 说明 |
|------|------|
| 语法与高亮 | `.dos` 文件类型、TextMate 语法 |
| 内置补全与文档 | 关键字 / 内置函数；中英文 docs（随 IDE locale） |
| LSP | 符号补全、跳转、hover、Structure、`use` 跨文件解析（需 Node.js） |
| 连接与元数据 | Settings 配置 WebSocket/TCP；SQL 元数据经 Java API |
| 脚本执行 | 选区/文件执行，结果 Tool Window |
| Browser | 库表浏览（Tool Window） |
| 调试 | 断点、单步、变量（需已配置连接与兼容的 Server） |

## 环境要求

| 项目 | 要求 |
|------|------|
| IntelliJ IDEA | **2025.3+**（`sinceBuild = 253`），建议 Ultimate（含 Debugger、LSP） |
| JDK | 21（与 IDE 自带 JBR 一致，用于构建） |
| Node.js | **仅 LSP 需要** 18+；系统 PATH 或 Settings 中指定路径 |
| DolphinDB | 连库、执行、Browser、Debug 需要可访问的 Server |

`dolphindb-javaapi` 已随插件 ZIP 打包，**无需** npm 安装 `dolphindb` 包。LSP 说明见 [`tools/lsp-node/README.md`](tools/lsp-node/README.md)。

## 构建

需要 **JDK 21**。若 shell 里 `JAVA_HOME` 指向已删除的 JDK 8，会在运行 `gradlew` 时报错。请复制 [`local.properties.example`](local.properties.example) 为 `local.properties` 并设置：

```properties
org.gradle.java.home=/path/to/your/jdk-21
```

`gradlew` 会优先使用该路径（覆盖无效的 `JAVA_HOME`）。

```bash
./gradlew buildPlugin
```

产物：`build/distributions/idea-plugin-dolphindb-*.zip`。

本地调试：

```bash
./gradlew runIde
```

默认通过 Gradle 下载 **IntelliJ IDEA Ultimate 2025.3** 作为沙箱 IDE。若使用本机已安装的 IDE，在 `local.properties` 中设置（参见 [`local.properties.example`](local.properties.example)）：

```properties
ideaHome=/path/to/IntelliJ IDEA.app
```

### 可选：从 VS Code 插件同步 LSP / docs

仓库已包含 `src/main/resources/ddb/` 下的 bundle（含 `languageserver.cjs`）。若需从上游重新同步：

1. 克隆并构建 [dolphindb/vscode-extension](https://github.com/dolphindb/vscode-extension)
2. 配置 `local.properties` 中的 `vscodeExtensionOut` 指向其 `out` 目录
3. 运行 `./gradlew copyVscodeAssets copyTextmateGrammar`  
   **注意**：`languageserver.cjs` 含 IDEA 专用桥接，同步后需人工合并。

## 配置

**Settings → Tools → DolphinDB**

| 配置项 | 说明 |
|--------|------|
| Server URL | 如 `ws://127.0.0.1:8848` 或 TCP 主机 |
| Username / Password | 登录凭据（密码存于 IDE Password Safe） |
| Auto login | 是否自动登录 |
| Node.js path (LSP) | 留空使用 PATH 中的 `node` |

新建连接时，若用户名为 `admin` 且未保存密码，插件可能使用本地开发默认密码 `123456` 并写入 Password Safe——**请勿在生产环境依赖该行为**，请在 Settings 中设置正式密码。

## 架构概览

```
.dos 文件
  ├── TextMate 语法高亮
  ├── 内置 CompletionContributor + Documentation
  └── LSP（Node 启动 languageserver.cjs）
        ├── 标准 LSP：completion / hover / definition / symbols
        └── 自定义桥接：lsp/getFiles、dolphinDb/*（Java API）
  ├── 执行 → DolphinDB Java API → Results Tool Window
  ├── Browser → Java API
  └── Debug → WebSocket 调试协议
```

## 项目结构

```
src/main/
├── kotlin/com/xy/dolphindb/
│   ├── docs/、lsp/、connection/、settings/
│   ├── execution/、browser/、debug/
│   └── psi/、editor/、navigation/
└── resources/ddb/          # LSP、docs、TextMate（来自上游，见 NOTICE）
tools/lsp-node/             # LSP 运行时说明
```

## 许可证与致谢

- AI 辅助开发说明（英文）：[AI_DISCLOSURE.md](AI_DISCLOSURE.md)
- 本仓库 Kotlin 代码：**Apache License 2.0**（见 [LICENSE](LICENSE)、[NOTICE](NOTICE)）
- [dolphindb/vscode-extension](https://github.com/dolphindb/vscode-extension)（Apache-2.0）：LSP bundle、docs、grammar
- [dolphindb/api-java](https://github.com/dolphindb/api-java)（Apache-2.0）：`dolphindb-javaapi` Maven 依赖
- 第三方组件清单：[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)

## 参考

- [DolphinDB 文档](https://www.dolphindb.cn/cn/help/index.html)
- [JetBrains 插件开发](https://plugins.jetbrains.com/docs/intellij/)

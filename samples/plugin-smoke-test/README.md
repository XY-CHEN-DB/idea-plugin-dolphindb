# 插件冒烟测试脚本

| 文件 | 说明 |
|------|------|
| `smoke_minimal.dos` | **推荐先跑**：仅内存表，不依赖 DFS |
| `smoke_test.dos` | 完整用例：向量、SQL、ej 连接、UDF、DFS、`CREATE DATABASE` 多行 DDL |

## 使用

1. DolphinDB 已启动（如 Docker `127.0.0.1:8848`）。
2. IDEA：**Settings → Tools → DolphinDB** → Connect。
3. 先执行 `smoke_minimal.dos`，再执行 `smoke_test.dos`（或按段选中）。

## 关于「语法错误」

- **IDE 编辑器标红**：当前插件 PSI 较简，很多合法 DolphinDB 写法会误报，**以执行结果为准**。
- **服务端报错**：把 Results 窗口完整错误贴出；常见已修正项：
  - 不用 `throw("...")`，已改为普通 `print` 校验
  - 不用 SQL `limit`，改用 `select top N`
  - 连接用 `ej(left, right, \`sym)` 而非 `inner join ... limit`
  - 日期列用 `rand(2024.01.01, 2024.01.31, n)`，不用 `日期 + rand(...)`
  - 序列用 `1..10`、`1000..1009`，不用 `1000:1009`
  - DFS 主路径用 `database(..., COMPO, ...)`；第 8 段单独测 `CREATE DATABASE` + `PARTITIONED BY`
  - **内存共享表**：`existsTable` 必须 2 参数（仅 DFS）；共享表用 `undef(\`name, SHARED)`，见脚本内 `dropSharedTable`
  - **`rand`**：`rand(100.0, n)` 为 [0,100) 的 double；日期先 `tradeDates = 2024.01.01..2024.01.31` 再 `rand(tradeDates, n)`
  - **`table`**：推荐单行 `table(1000..1009 as id, ... as sym, ...)`；`select` 用 `select top 5 * from t`
  - **执行前 normalizer**：勿在 `table(`、`,` 行末加 `;`（插件已修复，需重装）
  - **共享表**：`share` 后不能 `sum(t.qty)`，用 `exec sum(qty) from t` 或 `select ... from t`
  - **COMPO 建库**：`database(dir, COMPO, [dbDate, dbSym])`，先 `dbDate=database(,VALUE,...)`、`dbSym=database(,HASH,[SYMBOL,n])`；`HASH([SYMBOL,n])` 仅用于 `CREATE DATABASE` DDL，不能塞进 `database()` 的 COMPO 向量
  - **CREATE DATABASE**：两行 `CREATE DATABASE` + `PARTITIONED BY` 即可；不要用 `{ }` 包裹（会报 json key must be followed by colon）。`go` 仅用于脚本分块，本段不必写

## 清理

`smoke_test.dos` 会创建 `dfs://smoke_plugin_db`、`dfs://smoke_plugin_ddl_test` 及共享表 `t_smoke_*`。重复执行会先 `drop`；不需要时在服务器上手动 `dropDatabase` / `dropTable`。

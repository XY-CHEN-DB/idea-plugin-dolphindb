# AI-Assisted Development Disclosure

This file documents how artificial intelligence tools were used in **idea-plugin-dolphindb**.

## Scope

| Included (AI-assisted) | Excluded (upstream / third-party) |
|------------------------|----------------------------------|
| Kotlin sources under `src/main/kotlin/` | `src/main/resources/ddb/` from [dolphindb/vscode-extension](https://github.com/dolphindb/vscode-extension) |
| Gradle build files, `gradlew` local JDK hook | `com.dolphindb:dolphindb-javaapi` from [dolphindb/api-java](https://github.com/dolphindb/api-java) |
| `README.md`, `CHANGELOG.md`, legal notices in this repo | IntelliJ Platform SDK (compile-only) |

## Maintainer responsibility

AI-generated or AI-edited content is reviewed before inclusion. The project maintainer is responsible for releases, issue triage, and compliance with the [LICENSE](LICENSE).

## Your use

If you fork or depend on this project, perform your own code review and security assessment. AI assistance does not imply correctness, fitness for production, or official DolphinDB support.

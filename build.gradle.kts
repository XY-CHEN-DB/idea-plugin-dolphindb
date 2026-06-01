import java.io.File
import java.util.Properties
import org.jetbrains.intellij.platform.gradle.TestFrameworkType
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    id("org.jetbrains.kotlin.jvm")
    id("org.jetbrains.changelog")
    id("org.jetbrains.intellij.platform")
}

val localPropertiesContent =
    providers.fileContents(layout.projectDirectory.file("local.properties"))

val vscodeExtensionOutFromLocal = localPropertiesContent.asText.map { text ->
    if (text.isBlank()) {
        return@map ""
    }
    Properties().apply { load(text.byteInputStream()) }
        .getProperty("vscodeExtensionOut")
        ?.trim()
        .orEmpty()
}

val vscodeExtensionOutPath =
    providers.gradleProperty("vscodeExtensionOut")
        .orElse(vscodeExtensionOutFromLocal)

val ideaHomeFromLocal = localPropertiesContent.asText.map { text ->
    if (text.isBlank()) {
        return@map ""
    }
    Properties().apply { load(text.byteInputStream()) }
        .getProperty("ideaHome")
        ?.trim()
        .orEmpty()
}

val ideaHomePath =
    providers.gradleProperty("ideaHome")
        .orElse(ideaHomeFromLocal)

val ddbResourcesDir = layout.projectDirectory.dir("src/main/resources/ddb")

tasks.register<Copy>("copyVscodeAssets") {
    group = "dolphindb"
    description = "Optional: copy LSP/docs/grammar from VS Code extension build output. " +
        "Set vscodeExtensionOut in local.properties or -PvscodeExtensionOut=... . " +
        "Note: languageserver.cjs contains IDEA-specific lsp/getBuiltinCompletions bridge — merge manually after copy."
    onlyIf("vscodeExtensionOut is configured") {
        vscodeExtensionOutPath.orNull?.isNotBlank() == true
    }

    from(vscodeExtensionOutPath.map { File(it) }) {
        include(
            "languageserver.cjs",
            "docs.zh.json",
            "docs.en.json",
            "dolphindb.tmLanguage.json",
        )
    }
    into(ddbResourcesDir)
}

tasks.register<Copy>("copyTextmateGrammar") {
    group = "dolphindb"
    description = "Optional: copy TextMate grammar into bundle syntaxes directory (after copyVscodeAssets)"
    dependsOn("copyVscodeAssets")
    onlyIf("vscodeExtensionOut is configured") {
        vscodeExtensionOutPath.orNull?.isNotBlank() == true
    }
    from(ddbResourcesDir.file("dolphindb.tmLanguage.json"))
    into(ddbResourcesDir.dir("textmate/syntaxes"))
}

kotlin {
    compilerOptions {
        jvmTarget.set(JvmTarget.JVM_21)
    }
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(21))
    }
}

dependencies {
    testImplementation(libs.junit)
    implementation(libs.dolphindb.javaapi)

    intellijPlatform {
        val ideaHome = ideaHomePath.orNull
        if (!ideaHome.isNullOrBlank()) {
            local(ideaHome)
        } else {
            intellijIdeaUltimate("2025.3")
        }
        testFramework(TestFrameworkType.Platform)
        bundledPlugin("com.intellij.java")
        bundledPlugin("org.jetbrains.plugins.textmate")
    }
}

intellijPlatform {
    instrumentCode = false

    pluginConfiguration {
        ideaVersion {
            sinceBuild = "253"
        }
    }
}

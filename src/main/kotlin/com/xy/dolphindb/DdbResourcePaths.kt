package com.xy.dolphindb

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardCopyOption

object DdbResourcePaths {
    private val cacheDir: Path by lazy {
        Files.createDirectories(Path.of(System.getProperty("java.io.tmpdir"), "idea-plugin-dolphindb"))
    }

    fun languageServerScript(): Path =
        materializeFile("/ddb/languageserver.cjs", cacheDir.resolve("languageserver.cjs"))

    fun textMateBundleDir(): Path {
        val bundleDir = cacheDir.resolve("textmate")
        materializeFile("/ddb/textmate/package.json", bundleDir.resolve("package.json"))
        materializeFile(
            "/ddb/textmate/language-configuration.json",
            bundleDir.resolve("language-configuration.json"),
        )
        materializeFile("/ddb/textmate/syntaxes/dolphindb.tmLanguage.json", bundleDir.resolve("syntaxes/dolphindb.tmLanguage.json"))
        return bundleDir
    }

    private fun materializeFile(resourcePath: String, target: Path): Path {
        val resourceUrl = DdbResourcePaths::class.java.getResource(resourcePath)
            ?: error("Missing bundled resource: $resourcePath")

        if (resourceUrl.protocol == "file") {
            return Path.of(resourceUrl.toURI())
        }

        Files.createDirectories(target.parent)
        resourceUrl.openStream().use { input ->
            Files.copy(input, target, StandardCopyOption.REPLACE_EXISTING)
        }
        return target
    }
}

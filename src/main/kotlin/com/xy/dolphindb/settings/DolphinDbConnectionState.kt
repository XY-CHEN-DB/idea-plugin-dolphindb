package com.xy.dolphindb.settings

import java.util.UUID

data class DolphinDbConnectionState(
    val id: String = UUID.randomUUID().toString(),
    val name: String = "default",
    val url: String = "ws://127.0.0.1:8848",
    val autologin: Boolean = true,
    val username: String = "admin",
    val password: String = "123456",
)

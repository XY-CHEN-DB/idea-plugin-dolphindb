package com.xy.dolphindb.connection

sealed interface DolphinDbConnectionOutcome<out T> {
    data class Success<T>(val value: T) : DolphinDbConnectionOutcome<T>
    data object NotConnected : DolphinDbConnectionOutcome<Nothing>
    data class Error(val throwable: Throwable) : DolphinDbConnectionOutcome<Nothing>
}

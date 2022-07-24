package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class AndroidConfigData(val saveFilesDir: String, val sort: String)

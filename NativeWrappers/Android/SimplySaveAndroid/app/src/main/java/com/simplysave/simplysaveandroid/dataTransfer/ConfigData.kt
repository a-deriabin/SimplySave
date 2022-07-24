package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class ConfigData(val dataDirPath: String, val notesSort: String)
package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class FolderData(val id: String, val title: String, val icon: String)

package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class CreateNoteData(
    val title: String,
    val folderId: String,
    val isPrivate: Boolean,
    val content: String
)

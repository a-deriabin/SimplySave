package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class NoteData(
    val id: String,
    var title: String,
    var folderId: String,
    val createdTimestamp: Long,
    var editedTimestamp: Long,
    val isPrivate: Boolean,
)

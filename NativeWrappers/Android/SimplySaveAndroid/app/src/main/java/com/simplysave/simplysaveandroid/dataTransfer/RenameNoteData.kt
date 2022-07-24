package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class RenameNoteData(val id: String, val newTitle: String)

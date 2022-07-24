package com.simplysave.simplysaveandroid.dataTransfer

import kotlinx.serialization.Serializable

@Serializable
data class MetaData(val notes: MutableList<NoteData>, val folders: MutableList<FolderData>)

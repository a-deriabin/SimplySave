package com.simplysave.simplysaveandroid

import android.os.Build
import androidx.annotation.RequiresApi
import com.simplysave.simplysaveandroid.dataTransfer.FolderData
import com.simplysave.simplysaveandroid.dataTransfer.MetaData
import com.simplysave.simplysaveandroid.dataTransfer.NoteData
import com.simplysave.simplysaveandroid.dataTransfer.RenameNoteData
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer
import java.io.File
import java.time.Instant

class MetadataStorage(val saveFilesDir: String) {
    val notes: MutableList<NoteData> = mutableListOf()
    val folders: MutableList<FolderData> = mutableListOf()

    val FILE_NAME = "metadata.json"

    private fun getFullSavePath(): String {
        return File(saveFilesDir, FILE_NAME).absolutePath
    }

    init {
        val file = File(getFullSavePath())
        if (file.exists()) {
            val jsonText: String = file.readText()
            val metaData = Json.decodeFromString(serializer<MetaData>(), jsonText)
            notes.addAll(metaData.notes)
            folders.addAll(metaData.folders)
        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun createNote(title: String, folderId: String, isPrivate: Boolean): NoteData {
        val maxId: Int = if (notes.size == 0) -1 else notes.maxOf { note -> note.id.toInt() }

        val note = NoteData(
            id = (maxId + 1).toString(),
            title = title,
            folderId = folderId,
            createdTimestamp = Instant.now().toEpochMilli(),
            editedTimestamp = Instant.now().toEpochMilli(),
            isPrivate = isPrivate
        )
        notes.add(note)
        saveData()
        return note
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun noteEdited(id: String) {
        val note = notes.find { note -> note.id == id }
        if (note != null) {
            note.editedTimestamp = Instant.now().toEpochMilli()
        }
        saveData()
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun renameNote(data: RenameNoteData) {
        val note = notes.find { note -> note.id == data.id }
        if (note != null) {
            note.title = data.newTitle
        }
        saveData()
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun deleteNote(id: String) {
        val note = notes.find { note -> note.id == id }
        notes.remove(note)
        saveData()
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun setNoteFolder(id: String, newFolderId: String) {
        val note = notes.find { note -> note.id == id }
        if (note != null) {
            note.folderId = newFolderId
        }
        saveData()
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun saveData() {
        val dir = File(saveFilesDir)
        if (!dir.isDirectory)
            dir.mkdir()

        val jsonText = Json.encodeToString(serializer(), MetaData(notes, folders))
        val saveFile = File(getFullSavePath())
        saveFile.writeText(jsonText)
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun setFolderData(newFolders: Array<FolderData>) {
        folders.clear()
        folders.addAll(newFolders)
        saveData()
    }

}
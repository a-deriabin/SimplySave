package com.simplysave.simplysaveandroid

import java.io.File

class NotesStorage(val saveFilesDir: String) {
    fun createNote(id: String, content: String) {
        val dir = File(saveFilesDir)
        if (!dir.isDirectory)
            dir.mkdir()

        val targetFile = File(saveFilesDir, "$id.ssnf")
        if (targetFile.exists())
            throw Exception("Note with id $id already exists! Probably, corrupted metadata.")

        targetFile.writeText(content)
    }

    fun updateNote(id: String, content: String) {
        val dir = File(saveFilesDir)
        if (!dir.isDirectory)
            dir.mkdir()

        val targetFile = File(saveFilesDir, "$id.ssnf")
        targetFile.writeText(content)
    }

    fun deleteNote(id: String) {
        val dir = File(saveFilesDir)
        if (!dir.isDirectory)
            return

        val targetFile = File(saveFilesDir, "$id.ssnf")
        if (targetFile.exists())
            targetFile.delete()
    }

    fun getContent(id: String): String {
        val targetFile = File(saveFilesDir, "$id.ssnf")
        return targetFile.readText()
    }
}
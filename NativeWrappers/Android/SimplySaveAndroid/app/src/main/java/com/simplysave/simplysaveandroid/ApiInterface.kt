package com.simplysave.simplysaveandroid

import android.util.Log
import android.webkit.JavascriptInterface

class ApiInterface {
    @JavascriptInterface
    fun CreateNote(data: String): String {
        Log.d("Api:CreateNote", data)
        return "[]"
    }

    @JavascriptInterface
    fun SaveNote(data: String): String {
        Log.d("Api:SaveNote", data)
        return "[]"
    }

    @JavascriptInterface
    fun RenameNote(data: String): String {
        Log.d("Api:RenameNote", data)
        return "[]"
    }

    @JavascriptInterface
    fun SetNoteFolder(noteId: String, folderId: String): String {
        Log.d("Api:SetNoteFolder", "$noteId, $folderId")
        return "[]"
    }

    @JavascriptInterface
    fun DeleteNote(data: String): String {
        Log.d("Api:DeleteNote", data)
        return "[]"
    }

    @JavascriptInterface
    fun LoadNotes(): String {
        Log.d("Api:LoadNotes", "load")
        return "[]"
    }

    @JavascriptInterface
    fun LoadFolders(data: String): String {
        Log.d("Api:LoadFolders", "load")
        return "[]"
    }

    @JavascriptInterface
    fun LoadContent(noteId: String): String {
        Log.d("Api:LoadContent", noteId)
        return ""
    }

    @JavascriptInterface
    fun SetFolders(data: String): String {
        Log.d("Api:SetFolders", data)
        return data
    }

    @JavascriptInterface
    fun LoadConfig(): String {
        Log.d("Api:LoadConfig", "load")
        return "{dataDirPath: './TestDir',notesSort: 'alphabet'}"
    }

    @JavascriptInterface
    fun SaveConfig(data: String): String {
        Log.d("Api:SaveConfig", data)
        return data
    }

    @JavascriptInterface
    fun ShowFolderDialog(): String {
        Log.d("Api:ShowFolderDialog", "show")
        return "todo"
    }
}
import {createAsyncThunk} from "@reduxjs/toolkit";
import {NoteType} from "./notesSlice.types";


export const moveNote = createAsyncThunk('notes/move', async ([noteId, folderId]: [string, string], api) => {
    // @ts-ignore
    const notesList: NoteType[] = await window._simplysave_note_change_folder(noteId, folderId)
    return notesList
})

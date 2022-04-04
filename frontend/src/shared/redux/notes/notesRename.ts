import {createAsyncThunk} from "@reduxjs/toolkit";
import {NoteType, RenameNoteType} from "./notesSlice.types";


export const renameNote = createAsyncThunk('notes/rename', async (data: RenameNoteType, api) => {
    // @ts-ignore
    const notesList: NoteType[] = await window._simplysave_rename_note(data)
    return notesList
})

import {createAsyncThunk} from "@reduxjs/toolkit";
import {NoteType} from "./notesSlice.types";

export const deleteNote = createAsyncThunk('notes/delete', async (id: string, api) => {
    // @ts-ignore
    const notesList: NoteType[] = await window._simplysave_delete_note(id)
    return notesList
})

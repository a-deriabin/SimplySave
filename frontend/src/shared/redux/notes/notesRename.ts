import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {NoteType, NotesStateType, RenameNoteType} from "./notesSlice.types";


export const renameNote = createAsyncThunk('notes/rename', async (data: RenameNoteType, api) => {
    // @ts-ignore
    const notesList: NoteType[] = await window._simplysave_rename_note(data)
    return notesList
})

export const renameNoteReducer = (builder: ActionReducerMapBuilder<NotesStateType>) => {
    builder.addCase(renameNote.pending, (state, action) => {
        state.error = null
    })
    builder.addCase(renameNote.fulfilled, (state, action) => {
        state.notesList = action.payload
        state.error = null
    })
    builder.addCase(renameNote.rejected, (state, action) => {
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

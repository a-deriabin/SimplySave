import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {LoadedDataType, NotesStateType} from "./notesSlice.types";

export const loadNotes = createAsyncThunk('notes/load', async (data, api) => {
    // @ts-ignore
    const loadedData: LoadedDataType = await window._simplysave_load()
    return loadedData
})

export const loadNotesReducer = (builder: ActionReducerMapBuilder<NotesStateType>) => {
    builder.addCase(loadNotes.pending, (state, action) => {
        state.loadStatus = 'pending'
        state.error = null
    })
    builder.addCase(loadNotes.fulfilled, (state, action) => {
        state.loadStatus = 'success'
        state.notesList = action.payload.notes
        state.foldersList = action.payload.folders
        state.error = null
    })
    builder.addCase(loadNotes.rejected, (state, action) => {
        state.loadStatus = 'failed'
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

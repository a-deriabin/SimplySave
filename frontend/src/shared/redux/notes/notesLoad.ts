import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {LoadedDataType, StateType} from "./notesSlice.types";

export const loadNotes = createAsyncThunk('notes/load', async (data, api) => {
    // @ts-ignore
    const loadedData: LoadedDataType = await window._simplysave_load()
    return loadedData
})

export const loadNotesReducer = (builder: ActionReducerMapBuilder<StateType>) => {
    builder.addCase(loadNotes.pending, (state, action) => {
        state.loadState = 'pending'
        state.error = null
    })
    builder.addCase(loadNotes.fulfilled, (state, action) => {
        state.loadState = 'success'
        state.notesList = action.payload.notes
        state.foldersList = action.payload.folders
        state.error = null
    })
    builder.addCase(loadNotes.rejected, (state, action) => {
        state.loadState = 'failed'
        state.error = action.error?.message ?? null
    })
}

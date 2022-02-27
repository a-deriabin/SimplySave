import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {StateType} from "./notesSlice.types";

export const loadNoteContent = createAsyncThunk('notes/loadContent', async (noteId: string, api) => {
    // @ts-ignore
    const content: string = await window._simplysave_load_content(noteId)
    return {
        noteId,
        content
    }
})

export const loadNoteContentReducer = (builder: ActionReducerMapBuilder<StateType>) => {
    builder.addCase(loadNoteContent.pending, (state, action) => {
        state.contentLoadStatus = 'pending'
        state.error = null
    })
    builder.addCase(loadNoteContent.fulfilled, (state, action) => {
        state.contentLoadStatus = 'success'
        state.openNoteId = action.payload.noteId
        state.openContent = action.payload.content
        state.error = null
    })
    builder.addCase(loadNoteContent.rejected, (state, action) => {
        state.contentLoadStatus = 'failed'
        state.error = action.error?.message ?? null
        if (state.error)
            console.error(action.error)
    })
}

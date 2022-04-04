import {ActionReducerMapBuilder, AsyncThunk} from "@reduxjs/toolkit";
import {NotesStateType, NoteType} from "./notesSlice.types";

export const notesReloadReducer = (builder: ActionReducerMapBuilder<NotesStateType>, thunk: AsyncThunk<NoteType[], any, {}>) => {
    builder.addCase(thunk.pending, (state, action) => {
        state.error = null
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        state.notesList = action.payload
        state.error = null
    })
    builder.addCase(thunk.rejected, (state, action) => {
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

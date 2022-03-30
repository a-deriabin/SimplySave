import {ActionReducerMapBuilder, AsyncThunk} from "@reduxjs/toolkit";
import {FolderType, NotesStateType} from "./notesSlice.types";

export const folderUpdateReducer = (builder: ActionReducerMapBuilder<NotesStateType>, thunk: AsyncThunk<FolderType[], any, {}>) => {
    builder.addCase(thunk.pending, (state, action) => {
        state.error = null
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        state.foldersList = action.payload
        state.error = null
    })
    builder.addCase(thunk.rejected, (state, action) => {
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

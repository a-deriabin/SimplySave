import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {NotesStateType} from "./notesSlice.types";
import {RootStateType} from "../store";

export const swapFolders = createAsyncThunk('notes/foldersSwap', async ([idx1, idx2]: [number, number], api) => {
    const state = await api.getState() as RootStateType

    const newFolders = [...state.notes.foldersList]

    const tmp = newFolders[idx1]
    newFolders[idx1] = newFolders[idx2]
    newFolders[idx2] = tmp

    // @ts-ignore
    await window._simplysave_set_folders(newFolders)

    return newFolders
})

export const foldersSwapReducer = (builder: ActionReducerMapBuilder<NotesStateType>) => {
    builder.addCase(swapFolders.pending, (state, action) => {
        state.error = null
    })
    builder.addCase(swapFolders.fulfilled, (state, action) => {
        state.foldersList = action.payload
        state.error = null
    })
    builder.addCase(swapFolders.rejected, (state, action) => {
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

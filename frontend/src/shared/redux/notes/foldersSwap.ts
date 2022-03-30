import { createAsyncThunk} from "@reduxjs/toolkit";
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

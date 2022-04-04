import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootStateType} from "../store";

export const deleteFolder = createAsyncThunk('notes/folderDelete', async (id: string, api) => {
    const state = await api.getState() as RootStateType

    const newFolders = [...state.notes.foldersList.filter(x => x.id !== id)]

    // @ts-ignore
    await window._simplysave_set_folders(newFolders)

    return newFolders
})

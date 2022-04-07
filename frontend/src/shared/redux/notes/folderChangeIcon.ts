import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootStateType} from "../store";

export const changeFolderIcon = createAsyncThunk('notes/folderChangeIcon', async ([id, newIcon]: [string, string], api) => {
    const state = await api.getState() as RootStateType

    const newFolders = [...state.notes.foldersList]
    const index = newFolders.findIndex(x => x.id === id)
    newFolders[index] = {
        ...newFolders[index],
        icon: newIcon,
    }

    // @ts-ignore
    await window._simplysave_set_folders(newFolders)

    return newFolders
})
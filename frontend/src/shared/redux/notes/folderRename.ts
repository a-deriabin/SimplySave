import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootStateType} from "../store";

export const renameFolder = createAsyncThunk('notes/folderRename', async ([id, newTitle]: [string, string], api) => {
    const state = await api.getState() as RootStateType

    const newFolders = [...state.notes.foldersList]
    const index = newFolders.findIndex(x => x.id === id)
    newFolders[index] = {
        id: id,
        title: newTitle,
        icon: newFolders[index].icon,
    }

    // @ts-ignore
    await window._simplysave_set_folders(newFolders)

    return newFolders
})

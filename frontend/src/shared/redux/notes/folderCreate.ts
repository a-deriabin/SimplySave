import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootStateType} from "../store";

type ArgsType = {
    title: string,
    icon: string
}

export const createFolder = createAsyncThunk('notes/folderCreate', async (data: ArgsType, api) => {
    const state = await api.getState() as RootStateType

    const newFolders = [...state.notes.foldersList]
    const highestIdFolder = newFolders.length === 0 ? '-1' :
        newFolders.reduce((prev, cur) => {
            return +prev.id > +cur.id ? prev : cur
        }).id
    const newId = (+highestIdFolder + 1).toString()
    newFolders.push({
        id: newId,
        title: data.title,
        icon: data.icon,
    })

    // @ts-ignore
    await window._simplysave_set_folders(newFolders)

    return newFolders
})

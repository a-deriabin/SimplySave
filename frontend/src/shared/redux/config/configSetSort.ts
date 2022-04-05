import {createAsyncThunk} from "@reduxjs/toolkit";
import {ConfigDataType, NotesSortType} from "./configSlice.types";
import {RootStateType} from "../store";

export const setConfigSort = createAsyncThunk('config/setSort', async (sort: NotesSortType, api) => {
    const state = await api.getState() as RootStateType
    const {error, ...oldConfig} = state.config
    const newConfig: ConfigDataType = {
        ...oldConfig,
        notesSort: sort
    }

    // @ts-ignore
    const newData: ConfigDataType = await window._simplysave_save_config(newConfig)
    return newData
})
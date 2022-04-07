import {createAsyncThunk} from "@reduxjs/toolkit";
import {ConfigDataType} from "./configSlice.types";
import {RootStateType} from "../store";

export const setConfigDataDir = createAsyncThunk('config/setDataDir', async (newDir: string, api) => {
    const state = await api.getState() as RootStateType
    const {error, ...oldConfig} = state.config
    const newConfig: ConfigDataType = {
        ...oldConfig,
        dataDirPath: newDir
    }

    // @ts-ignore
    const newData: ConfigDataType = await window._simplysave_save_config(newConfig)
    return newData
})
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ConfigDataType} from "./configSlice.types";

export const loadConfig = createAsyncThunk('config/load', async (data, api) => {
    // @ts-ignore
    const loadedData: ConfigDataType = await window._simplysave_load_config()
    return loadedData
})

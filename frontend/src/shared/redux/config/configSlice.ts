import {ConfigStateType} from "./configSlice.types";
import {RootStateType} from "../store";
import {createSlice} from "@reduxjs/toolkit";
import {configUpdateReducer} from "./configUpdateReducer";
import {loadConfig} from "./configLoad";
import {setConfigSort} from "./configSetSort";
import {setConfigDataDir} from "./configSetDataDir";

const initialState: ConfigStateType = {
    dataDirPath: './UserData',
    notesSort: 'alphabet',
    error: null,
}

export const configSelector = (state: RootStateType) => state.config

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {},
    extraReducers(builder) {
        configUpdateReducer(builder, loadConfig)
        configUpdateReducer(builder, setConfigSort)
        configUpdateReducer(builder, setConfigDataDir)
    }
})

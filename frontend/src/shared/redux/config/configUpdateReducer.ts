import {ActionReducerMapBuilder, AsyncThunk} from "@reduxjs/toolkit";
import {ConfigDataType, ConfigStateType} from "./configSlice.types";

export const configUpdateReducer = (builder: ActionReducerMapBuilder<ConfigStateType>, thunk: AsyncThunk<ConfigDataType, any, {}>) => {
    builder.addCase(thunk.pending, (state, action) => {
        state.error = null
    })
    builder.addCase(thunk.fulfilled, (state, action) => {
        state.dataDirPath = action.payload.dataDirPath
        state.notesSort = action.payload.notesSort
        state.error = null
    })
    builder.addCase(thunk.rejected, (state, action) => {
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

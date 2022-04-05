import {configureStore} from "@reduxjs/toolkit";
import {notesSlice} from "./notes/notesSlice";
import {configSlice} from "./config/configSlice";

const store = configureStore({
    reducer: {
        notes: notesSlice.reducer,
        config: configSlice.reducer,
    }
})
export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store

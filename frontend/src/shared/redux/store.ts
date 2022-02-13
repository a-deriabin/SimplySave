import {configureStore} from "@reduxjs/toolkit";
import {notesSlice} from "./notes/notesSlice";

const store = configureStore({
    reducer: {
        notes: notesSlice.reducer,
    }
})
export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store

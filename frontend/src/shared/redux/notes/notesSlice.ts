import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StateType} from "./notesSlice.types";
import {loadNotesReducer} from "./notesLoad";
import {RootStateType} from "../store";


const initialState: StateType = {
    notesList: [],
    openNoteId: null,

    foldersList: [],
    openFolderId: null,

    loadState: 'idle',
    error: null,
}

export const notesSelector = (state: RootStateType) => state.notes
export const notesListSelector = (state: RootStateType) => state.notes.notesList
export const notesLoadStateSelector = (state: RootStateType) => state.notes.loadState

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        selectFolder: (state, action: PayloadAction<string|null>) => {
            state.openFolderId = action.payload
        }
    },
    extraReducers(builder) {
        loadNotesReducer(builder)
    }
})
export const { selectFolder } = notesSlice.actions

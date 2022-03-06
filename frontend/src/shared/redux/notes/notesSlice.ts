import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StateType} from "./notesSlice.types";
import {loadNotesReducer} from "./notesLoad";
import {RootStateType} from "../store";
import {createNoteReducer} from "./notesCreate";
import {loadNoteContentReducer} from "./notesLoadContent";
import {saveNoteReducer} from "./notesSave";


const initialState: StateType = {
    notesList: [],
    openNoteId: null,
    openContent: null, // Still encrypted if note is private!

    foldersList: [],
    openFolderId: null,
    searchStr: '',

    loadStatus: 'idle',
    contentLoadStatus: 'idle',
    createStatus: 'idle',
    saveNoteStatus: 'idle',
    error: null,
}

export const notesSelector = (state: RootStateType) => state.notes
export const notesListSelector = (state: RootStateType) => state.notes.notesList
export const notesLoadStateSelector = (state: RootStateType) => state.notes.loadStatus
export const notesSearchStrSelector = (state: RootStateType) => state.notes.searchStr

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        selectFolder: (state, action: PayloadAction<string|null>) => {
            state.openFolderId = action.payload
        },
        selectNote: (state, action: PayloadAction<string|null>) => {
            state.openNoteId = action.payload
            if (state.openNoteId === null) {
                state.openContent = null
                state.contentLoadStatus = 'idle'
                //TODO: stop thunk action if any
            }
        },
        setSearchStr: (state, action: PayloadAction<string>) => {
            state.searchStr = action.payload
        },
    },
    extraReducers(builder) {
        loadNotesReducer(builder)
        createNoteReducer(builder)
        loadNoteContentReducer(builder)
        saveNoteReducer(builder)
    }
})
export const { selectFolder, selectNote, setSearchStr } = notesSlice.actions

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NotesStateType} from "./notesSlice.types";
import {loadNotesReducer} from "./notesLoad";
import {RootStateType} from "../store";
import {createNoteReducer} from "./notesCreate";
import {loadNoteContentReducer} from "./notesLoadContent";
import {saveNoteReducer} from "./notesSave";
import {swapFolders} from "./foldersSwap";
import {folderUpdateReducer} from "./folderUpdateReducer";
import {createFolder} from "./folderCreate";
import {renameFolder} from "./folderRename";
import {deleteFolder} from "./folderDelete";
import {renameNote} from "./notesRename";
import {notesReloadReducer} from "./notesReloadReducer";
import {deleteNote} from "./notesDelete";
import {moveNote} from "./notesMove";
import {changeFolderIcon} from "./folderChangeIcon";


const initialState: NotesStateType = {
    notesList: [],
    openNoteId: null,
    openContent: null, // Still encrypted if note is private!
    isEditingNote: false,

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
export const notesIsEditingSelector = (state: RootStateType) => state.notes.isEditingNote

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        selectFolder: (state, action: PayloadAction<string|null>) => {
            state.openFolderId = action.payload
        },
        selectNote: (state, action: PayloadAction<string|null>) => {
            state.openNoteId = action.payload
            state.isEditingNote = false
            if (state.openNoteId === null) {
                state.openContent = null
                state.contentLoadStatus = 'idle'
                //TODO: stop thunk action if any
            }
        },
        setSearchStr: (state, action: PayloadAction<string>) => {
            state.searchStr = action.payload
        },
        setIsEditingNote: (state, action: PayloadAction<boolean>) => {
            state.isEditingNote = action.payload
        },
    },
    extraReducers(builder) {
        loadNotesReducer(builder)
        createNoteReducer(builder)
        loadNoteContentReducer(builder)
        saveNoteReducer(builder)
        notesReloadReducer(builder, renameNote)
        notesReloadReducer(builder, deleteNote)
        notesReloadReducer(builder, moveNote)
        folderUpdateReducer(builder, swapFolders)
        folderUpdateReducer(builder, createFolder)
        folderUpdateReducer(builder, renameFolder)
        folderUpdateReducer(builder, deleteFolder)
        folderUpdateReducer(builder, changeFolderIcon)
    }
})
export const { selectFolder, selectNote, setSearchStr, setIsEditingNote } = notesSlice.actions

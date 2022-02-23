import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {CreateNoteType, NoteType, StateType} from "./notesSlice.types";
import {ENCRYPTION_SALT, PROTECTED_NOTE_PLAINTEXT_PREFIX} from "./constants";
import AES from 'crypto-js/aes'


export const createNote = createAsyncThunk('notes/create', async (data: CreateNoteType, api) => {
    const content = data.password === '' ? '' :
        AES.encrypt(PROTECTED_NOTE_PLAINTEXT_PREFIX, data.password + ENCRYPTION_SALT)

    // @ts-ignore
    const createdNote: NoteType = await window._simplysave_create_note({
        title: data.title,
        folderId: data.folderId,
        isPrivate: data.password !== '',
        content,
    })
    return createdNote
})

export const createNoteReducer = (builder: ActionReducerMapBuilder<StateType>) => {
    builder.addCase(createNote.pending, (state, action) => {
        state.createStatus = 'pending'
        state.error = null
    })
    builder.addCase(createNote.fulfilled, (state, action) => {
        console.log('success')
        state.createStatus = 'success'
        state.notesList = [...state.notesList, action.payload]
        state.error = null
    })
    builder.addCase(createNote.rejected, (state, action) => {
        state.createStatus = 'failed'
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

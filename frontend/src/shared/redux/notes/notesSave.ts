import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {SaveNoteType, StateType} from "./notesSlice.types";
import {RootStateType} from "../store";
import {decryptContent, encryptContent} from "../../utils/encryption";

export const saveNote = createAsyncThunk('notes/save', async (data: SaveNoteType, api) => {
    const state: RootStateType = await api.getState() as RootStateType
    const oldContentEncrypted = state.notes.openContent ?? ''
    const isPasswordValid = data.password === null ||
        decryptContent(oldContentEncrypted, data.password) !== null

    if (!isPasswordValid)
        throw Error('Implementation error: Provided password does not match previous one.')

    const encryptedContent = data.password === null ?
        data.content : encryptContent(data.content, data.password)
    const saveData = {
        id: data.id,
        content: encryptedContent
    }

    // @ts-ignore
    await window._simplysave_save_note(saveData)
    return encryptedContent
})

export const saveNoteReducer = (builder: ActionReducerMapBuilder<StateType>) => {
    builder.addCase(saveNote.pending, (state, action) => {
        state.saveNoteStatus = 'pending'
        state.error = null
    })
    builder.addCase(saveNote.fulfilled, (state, action) => {
        state.saveNoteStatus = 'success'
        state.openContent = action.payload
        state.isEditingNote = false
        state.error = null
    })
    builder.addCase(saveNote.rejected, (state, action) => {
        state.saveNoteStatus = 'failed'
        state.error = action.error?.message ?? null
        if (action.error)
            console.error(action.error)
    })
}

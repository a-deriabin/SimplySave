import {createAsyncThunk} from "@reduxjs/toolkit";
import {NoteType} from "./notesSlice.types";

export const createNote = createAsyncThunk('notes/create', async (data: NoteType, api) => {

})
import React from 'react';
import Stack from "../../shared/components/Stack";
import NoteEntry from "./NoteEntry";
import {useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";

function NotesList() {
    const notesData = useSelector(notesSelector)
    let notes = notesData.openFolderId === null ? notesData.notesList :
        notesData.notesList.filter(note => note.folderId === notesData.openFolderId)

    if (notesData.searchStr !== '') {
        notes = notes.filter(note => note.title.includes(notesData.searchStr))
    }

    return (
        <Stack direction='column'>
            {notes.map(note => (
                <NoteEntry id={note.id} title={note.title} key={note.id} />
            ))}
        </Stack>
    );
}

export default NotesList;
import React from 'react';
import Stack from "../../shared/components/Stack";
import NoteEntry from "./NoteEntry";
import {useSelector} from "react-redux";
import {notesListSelector} from "../../shared/redux/notes/notesSlice";

function NotesList() {
    const notes = useSelector(notesListSelector)

    return (
        <Stack direction='column'>
            {notes.map(note => (
                <NoteEntry id={note.id} title={note.title} key={note.id} />
            ))}
        </Stack>
    );
}

export default NotesList;
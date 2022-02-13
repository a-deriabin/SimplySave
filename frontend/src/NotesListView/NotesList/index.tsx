import React from 'react';
import Stack from "../../shared/components/Stack";
import NoteEntry from "./NoteEntry";

function NotesList() {
    const notes = [
        { id: '1', title: 'Test note' },
        { id: '2', title: 'Very nice note' },
        { id: '3', title: 'Something else!' },
    ]

    return (
        <Stack direction='column'>
            {notes.map(note => (
                <NoteEntry id={note.id} title={note.title} key={note.id} />
            ))}
        </Stack>
    );
}

export default NotesList;
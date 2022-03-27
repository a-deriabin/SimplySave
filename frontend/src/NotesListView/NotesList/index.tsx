import React from 'react';
import Stack from "../../shared/components/Stack";
import NoteEntry from "./NoteEntry";
import {useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";
import Placeholder from "./Placeholder";

type PropsType = {
    isMobile: boolean,
}

function NotesList(props: PropsType) {
    const notesData = useSelector(notesSelector)
    let notes = notesData.openFolderId === null ? notesData.notesList :
        notesData.notesList.filter(note => note.folderId === notesData.openFolderId)

    if (notesData.searchStr !== '') {
        notes = notes.filter(note => note.title.includes(notesData.searchStr))
    }

    return (
        <Stack direction='column'>
            {notes.map(note => (
                <NoteEntry note={note} key={note.id} isMobile={props.isMobile} />
            ))}
            {notes.length === 0 && <Placeholder />}
        </Stack>
    );
}

export default NotesList;
import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {notesSelector, selectNote} from "../../shared/redux/notes/notesSlice";
import {loadNoteContent} from "../../shared/redux/notes/notesLoadContent";
import Stack from "../../shared/components/Stack";
import {NoteType} from "../../shared/redux/notes/notesSlice.types";

type NoteEntryPropsType = {
    note: NoteType,
}

function NoteEntry(props: NoteEntryPropsType) {
    const dispatch = useDispatch()
    const selNote = useSelector(notesSelector).openNoteId
    const isSelected = props.note.id === selNote

    const handleSelect = () => {
        if (!isSelected) {
            dispatch(loadNoteContent(props.note.id))
            //dispatch(selectNote(props.id))
        }
        else {
            dispatch(selectNote(null))
        }
    }

    const className = isSelected ? styles.noteEntrySel : styles.noteEntry
    const editDate = new Date(props.note.editedTimestamp).toISOString().split('T')
    const editDateStr = `${editDate[0]} ${editDate[1].split('.')[0]}`

    return (
        <Container
            horizontalAlign='start'
            verticalAlign='center'
            fullWidth className={className}
            onClick={handleSelect}
        >
            <Stack direction='row' align='center' justify='space-between'>
                <span>{props.note.title}</span>
                <span className={styles.noteDate}>{editDateStr}</span>
            </Stack>
        </Container>
    );
}

export default NoteEntry;
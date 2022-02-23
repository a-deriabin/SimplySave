import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import {useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";

type NoteEntryPropsType = {
    id: string,
    title: string
}

function NoteEntry(props: NoteEntryPropsType) {
    const selNote = useSelector(notesSelector).openNoteId
    const isSelected = props.id === selNote

    return (
        <Container
            horizontalAlign='start'
            verticalAlign='start'
            fullWidth className={styles.noteEntry}
            style={{
                backgroundColor: isSelected ? 'var(--color-primary)' : undefined
            }}
        >
            {props.title}
        </Container>
    );
}

export default NoteEntry;
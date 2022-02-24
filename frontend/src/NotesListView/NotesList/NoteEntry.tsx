import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {notesSelector, selectNote} from "../../shared/redux/notes/notesSlice";

type NoteEntryPropsType = {
    id: string,
    title: string
}

function NoteEntry(props: NoteEntryPropsType) {
    const dispatch = useDispatch()
    const selNote = useSelector(notesSelector).openNoteId
    const isSelected = props.id === selNote

    const handleSelect = () => {
        dispatch(selectNote(props.id))
    }

    const className = isSelected ? styles.noteEntrySel : styles.noteEntry;

    return (
        <Container
            horizontalAlign='start'
            verticalAlign='start'
            fullWidth className={className}
            onClick={handleSelect}
        >
            {props.title}
        </Container>
    );
}

export default NoteEntry;
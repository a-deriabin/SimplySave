import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {notesSelector, selectNote} from "../../shared/redux/notes/notesSlice";
import {loadNoteContent} from "../../shared/redux/notes/notesLoadContent";

type NoteEntryPropsType = {
    id: string,
    title: string
}

function NoteEntry(props: NoteEntryPropsType) {
    const dispatch = useDispatch()
    const selNote = useSelector(notesSelector).openNoteId
    const isSelected = props.id === selNote

    const handleSelect = () => {
        if (!isSelected) {
            dispatch(loadNoteContent(props.id))
            //dispatch(selectNote(props.id))
        }
        else {
            dispatch(selectNote(null))
        }
    }

    const className = isSelected ? styles.noteEntrySel : styles.noteEntry;

    return (
        <Container
            horizontalAlign='start'
            verticalAlign='center'
            fullWidth className={className}
            onClick={handleSelect}
        >
            {props.title}
        </Container>
    );
}

export default NoteEntry;
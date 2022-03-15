import React from 'react';
import Stack from "../../shared/components/Stack";
import CloseButton from "./CloseButton";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";

function MobileTitleBar() {
    const noteData = useSelector(notesSelector)
    const title = noteData.notesList.find(x => x.id === noteData.openNoteId)?.title ?? ''

    return (
        <Stack className={styles.bar} direction='row' justify='space-between' align='center'>
            <div className={styles.title}>{title}</div>
            <CloseButton />
        </Stack>
    );
}

export default MobileTitleBar;
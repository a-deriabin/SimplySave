import React from 'react';
import Folders from "./SidePanel";
import Stack from "../shared/components/Stack";
import SearchBar from "./SearchBar";
import NotesList from "./NotesList/index";
import EditingShadow from "./EditingShadow";
import styles from './styles.module.scss';

function NotesListView() {
    return (
        <Stack direction='row' className={styles.notesListView}>
            <Folders />
            <Stack direction='column' flex={1}>
                <SearchBar />
                <NotesList />
            </Stack>
            <EditingShadow />
        </Stack>
    );
}

export default NotesListView;
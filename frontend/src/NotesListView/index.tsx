import React from 'react';
import Folders from "./SidePanel";
import Stack from "../shared/components/Stack";
import SearchBar from "./SearchBar";
import NotesList from "./NotesList/index";
import EditingShadow from "./EditingShadow";
import styles from './styles.module.scss';

type PropsType = {
    isMobile: boolean,
}

function NotesListView(props: PropsType) {
    return (
        <Stack direction='row' className={styles.notesListView}>
            <Folders />
            <Stack direction='column' flex={1}>
                <SearchBar />
                <NotesList isMobile={props.isMobile} />
            </Stack>
            <EditingShadow />
        </Stack>
    );
}

export default NotesListView;
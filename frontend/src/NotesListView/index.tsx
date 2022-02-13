import React from 'react';
import Folders from "./Folders";
import Stack from "../shared/components/Stack";
import SearchBar from "./SearchBar";
import NotesList from "./NotesList/index";

function NotesListView() {
    return (
        <Stack direction='row'>
            <Folders />
            <Stack direction='column' flex={1} style={{
                borderRight: '1px solid var(--color-border)'
            }}>
                <SearchBar />
                <NotesList />
            </Stack>
        </Stack>
    );
}

export default NotesListView;
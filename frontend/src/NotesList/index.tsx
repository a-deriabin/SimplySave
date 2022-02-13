import React from 'react';
import Folders from "./Folders";
import Stack from "../shared/components/Stack";
import SearchBar from "./SearchBar";
import Notes from "./Notes";

function NotesList() {
    return (
        <Stack direction='row' fullWidth>
            <Folders />
            <Stack direction='column' flex={1} style={{
                borderRight: '1px solid var(--color-border)'
            }}>
                <SearchBar />
                <Notes />
            </Stack>
        </Stack>
    );
}

export default NotesList;
import React from 'react';
import Stack from '../shared/components/Stack';
import Container from "../shared/components/Container";
import NotesListView from "../NotesListView";
import NoteContentView from "../NoteContentView";

function DesktopView() {
    return (
        <Stack direction='row'>
            <Container flex={5}>
                <NotesListView isMobile={false} />
            </Container>
            <Container flex={7}>
                <NoteContentView isMobile={false} />
            </Container>
        </Stack>
    );
}

export default DesktopView;
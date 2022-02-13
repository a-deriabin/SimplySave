import React from 'react';
import NotesList from "../NotesList";
import NoteView from "../NoteView";
import Stack from '../shared/components/Stack';
import Container from "../shared/components/Container";

function DesktopView() {
    return (
        <Stack direction='row' fullWidth>
            <Container flex={5}>
                <NotesList />
            </Container>
            <Container flex={7}>
                <NoteView />
            </Container>
        </Stack>
    );
}

export default DesktopView;
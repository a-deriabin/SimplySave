import React from 'react';
import FolderBox from "./FolderBox";
import Container from "../../shared/components/Container";
import Stack from "../../shared/components/Stack";
import {useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";

type FolderListProps = {}

function FolderList(props: FolderListProps) {
    const notesData = useSelector(notesSelector)

    return (
        <Container flex={1} style={{ overflowY: 'auto' }}>
            <Stack direction='column'>
                <FolderBox icon='home' title='All' />
                {notesData.foldersList.map(folder => (
                    <FolderBox icon={folder.icon} title={folder.title} key={folder.id} />
                ))}
            </Stack>
        </Container>
    );
}

export default FolderList;
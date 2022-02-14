import React from 'react';
import FolderBox from "./FolderBox";
import Container from "../../shared/components/Container";
import Stack from "../../shared/components/Stack";
import {useDispatch, useSelector} from "react-redux";
import {notesSelector, selectFolder} from "../../shared/redux/notes/notesSlice";
import SelectableFolder from "./SelectableFolder";

type FolderListProps = {}

function FolderList(props: FolderListProps) {
    const dispatch = useDispatch()
    const notesData = useSelector(notesSelector)

    const handleHomeClick = () => {
        dispatch(selectFolder(null))
    }

    return (
        <Container flex={1} style={{ overflowY: 'auto' }}>
            <Stack direction='column'>
                <FolderBox
                    icon='home'
                    title='All'
                    isSelected={notesData.openFolderId === null}
                    onClick={handleHomeClick}
                />
                {notesData.foldersList.map(folder => (
                    <SelectableFolder
                        data={folder}
                        isSelected={folder.id === notesData.openFolderId}
                        key={folder.id}
                    />
                ))}
                <FolderBox
                    icon='add'
                    title='New folder'
                    isSelected={false}
                />
            </Stack>
        </Container>
    );
}

export default FolderList;
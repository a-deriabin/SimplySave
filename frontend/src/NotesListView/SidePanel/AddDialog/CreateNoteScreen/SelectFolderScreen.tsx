import React, {useCallback, useEffect} from 'react';
import Stack from "../../../../shared/components/Stack";
import {useSelector} from "react-redux";
import {notesSelector} from "../../../../shared/redux/notes/notesSlice";
import HorizontalButton from "../../../../shared/components/HorizontalButton";
import FolderIcon from "../../../../shared/components/FolderIcon";
import Container from "../../../../shared/components/Container";

type PropsType = {
    onSubmit: (folderId: string) => void,
}

function SelectFolderScreen(props: PropsType) {
    const notesData = useSelector(notesSelector)

    const handleSelect = useCallback(
        (id: string) => () => props.onSubmit(id),
        [props]
    )

    useEffect(() => {
        if (notesData.foldersList.length === 1) {
            handleSelect(notesData.foldersList[0].id)
        }
    }, [handleSelect, notesData.foldersList])
    
    return (
        <Stack direction='column'>
            <h2>Select folder</h2>
            {notesData.foldersList.map(folder => (
                <HorizontalButton key={folder.id} onClick={handleSelect(folder.id)}>
                    <Stack direction='row' justify='space-between' align='center'>
                        <FolderIcon name={folder.icon} />
                        <Container horizontalAlign='start' style={{ marginLeft: '15px' }}>
                            {folder.title}
                        </Container>
                    </Stack>
                </HorizontalButton>
            ))}
        </Stack>
    )
}

export default SelectFolderScreen;
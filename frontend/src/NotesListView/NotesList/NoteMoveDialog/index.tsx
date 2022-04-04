import React from 'react';
import {useSelector} from "react-redux";
import {notesSelector} from "../../../shared/redux/notes/notesSlice";
import Stack from "../../../shared/components/Stack";
import HorizontalButton from "../../../shared/components/HorizontalButton";
import FolderIcon from "../../../shared/components/FolderIcon";
import Container from "../../../shared/components/Container";
import Dialog from "../../../shared/components/Dialog";

type PropsType = {
    isVisible: boolean,
    onClose: (folderId: string|null) => void,
}

function NoteMoveDialog(props: PropsType) {
    const notesData = useSelector(notesSelector)

    const handleClose = () => props.onClose(null)
    const handleSelect = (id: string) => () => props.onClose(id)

    return (
        <Dialog isVisible={props.isVisible} onClose={handleClose}>
        <Stack direction='column'>
            <h2>Move to folder</h2>
            {notesData.foldersList.map(folder => (
                <HorizontalButton key={folder.id} onClick={handleSelect(folder.id)}>
                    <Stack direction='row' justify='space-between' align='center'>
                        <FolderIcon name={folder.icon} />
                        <Container horizontalAlign='center'>
                            {folder.title}
                        </Container>
                    </Stack>
                </HorizontalButton>
            ))}
        </Stack>
        </Dialog>
    );
}

export default NoteMoveDialog;
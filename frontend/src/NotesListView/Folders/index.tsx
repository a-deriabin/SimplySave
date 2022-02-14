import React, {useState} from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import FolderBox from "./FolderBox";
import Stack from "../../shared/components/Stack";
import FolderList from "./FolderList";
import Dialog from "../../shared/components/Dialog";

function Folders() {
    const [isAddOpen, setIsAddOpen] = useState(false)

    const handleSettingsClick = () => {
        console.log('settings')
    }
    const handleAddClick = () => setIsAddOpen(true)
    const handleAddClose = () => setIsAddOpen(false)

    return (
        <Container verticalAlign='start' className={styles.foldersContainer}>
            <Stack direction='column'>
                <FolderList />
                <Stack style={{ height: 'auto' }}>
                    <FolderBox
                        icon='add'
                        title='New'
                        isSelected={false}
                        onClick={handleAddClick}
                    />
                    <FolderBox
                        icon='settings'
                        title='Settings'
                        isSelected={false}
                        onClick={handleSettingsClick}
                    />
                </Stack>
            </Stack>
            <Dialog isVisible={isAddOpen} onClose={handleAddClose}>
                todo
            </Dialog>
        </Container>
    );
}

export default Folders;
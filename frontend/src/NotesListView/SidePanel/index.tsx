import React, {useState} from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import FolderBox from "./FolderBox";
import Stack from "../../shared/components/Stack";
import FolderList from "./FolderList";
import AddDialog from "./AddDialog";
import SettingsDialog from "./SettingsDialog";

function Folders() {
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const handleSettingsClick = () => setIsSettingsOpen(true)
    const handleSettingsClose = () => setIsSettingsOpen(false)
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
            <AddDialog isVisible={isAddOpen} onClose={handleAddClose} />
            <SettingsDialog isVisible={isSettingsOpen} onClose={handleSettingsClose} />
        </Container>
    );
}

export default Folders;
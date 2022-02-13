import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import FolderBox from "./FolderBox";
import Stack from "../../shared/components/Stack";
import FolderList from "./FolderList";

function Folders() {
    const handleSettingsClick = () => {
        console.log('settings')
    }

    return (
        <Container verticalAlign='start' className={styles.foldersContainer}>
            <Stack direction='column'>
                <FolderList />
                <Container style={{ height: 'auto' }}>
                    <FolderBox icon='settings' title='Settings' onClick={handleSettingsClick} />
                </Container>
            </Stack>
        </Container>
    );
}

export default Folders;
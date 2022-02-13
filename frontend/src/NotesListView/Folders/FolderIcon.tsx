import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5'
import styles from './styles.module.scss'

export type FolderIconNameType = 'settings'

type FolderIconProps = {
    name: FolderIconNameType
}

function FolderIcon(props: FolderIconProps) {
    return (
        <IoSettingsOutline className={styles.folderIcon} />
    );
}

export default FolderIcon;
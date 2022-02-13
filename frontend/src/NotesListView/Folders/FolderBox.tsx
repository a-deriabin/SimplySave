import React from 'react';
import FolderIcon, {FolderIconNameType} from "./FolderIcon";
import Stack from "../../shared/components/Stack";
import styles from './styles.module.scss'

type FolderBoxProps = {
    icon: FolderIconNameType,
    title: string,
    onClick?: () => void,
}

function FolderBox(props: FolderBoxProps) {
    return (
        <Stack direction='column' align='center' className={styles.folderBox} onClick={props.onClick}>
            <FolderIcon name={props.icon}/>
            <div>
                {props.title}
            </div>
        </Stack>
    );
}

export default FolderBox;
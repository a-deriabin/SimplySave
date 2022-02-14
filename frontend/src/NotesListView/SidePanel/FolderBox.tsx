import React from 'react';
import FolderIcon, {FolderIconNameType} from "./FolderIcon";
import Stack from "../../shared/components/Stack";
import styles from './styles.module.scss'
import Box from "../../shared/components/Box";

type FolderBoxProps = {
    icon: FolderIconNameType,
    title: string,
    isSelected?: boolean,
    onClick?: () => void,
}

function FolderBox(props: FolderBoxProps) {
    return (
        <Box styles={{width: '100%'}}>
            <Stack
                direction='column'
                align='center'
                gap={5}
                className={props.isSelected ? styles.folderSel : styles.folderBox}
                onClick={props.onClick}
            >
                <FolderIcon name={props.icon} isSelected={props.isSelected}/>
                <div style={{textAlign: 'center'}}>
                    {props.title}
                </div>
            </Stack>
        </Box>
    );
}

export default FolderBox;
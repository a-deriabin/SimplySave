import React, {useCallback, useRef, useState} from 'react';
import FolderIcon, {FolderIconNameType} from "../../shared/components/FolderIcon";
import Stack from "../../shared/components/Stack";
import styles from './styles.module.scss'
import Box from "../../shared/components/Box";
import FolderContextMenu from "./FolderContextMenu";

export type DivMouseEvent = React.MouseEvent<HTMLDivElement>

type FolderBoxProps = {
    icon: FolderIconNameType,
    title: string,
    isSelected?: boolean,
    onClick?: () => void,
    onMouseDown?: (title: string, e: DivMouseEvent) => void,
}

function FolderBox(props: FolderBoxProps) {
    const selfRef = useRef<HTMLElement|null>(null)
    const onRef = (el: HTMLDivElement | null) => {
        selfRef.current = el
    }

    const onMouseDown = (e: DivMouseEvent) => {
        props.onMouseDown && props.onMouseDown(props.title, e)
    }

    return (
        <Box style={{width: '100%'}} onMouseDown={onMouseDown} ref={onRef}>
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
            <FolderContextMenu
                targetRef={selfRef}
            />
        </Box>
    );
}

export default FolderBox;
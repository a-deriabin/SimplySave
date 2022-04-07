import React, {ForwardedRef} from 'react';
import FolderIcon, {FolderIconNameType} from "../../shared/components/FolderIcon";
import Stack from "../../shared/components/Stack";
import styles from './styles.module.scss'
import Box from "../../shared/components/Box";

export type DivMouseEvent = React.MouseEvent<HTMLDivElement>

type FolderBoxProps = {
    icon: FolderIconNameType,
    title: string,
    isSelected?: boolean,
    onClick?: () => void,
    onMouseDown?: (title: string, e: DivMouseEvent) => void,
    onContextMenu?: (e: React.MouseEvent) => void,
}

const FolderBox = React.forwardRef((props: FolderBoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    const onMouseDown = (e: DivMouseEvent) => {
        props.onMouseDown && props.onMouseDown(props.title, e)
    }

    return (
        <Box
            style={{width: '100%'}}
            onMouseDown={onMouseDown}
            ref={ref}
            onContextMenu={props.onContextMenu}
        >
            <Stack
                direction='column'
                align='center'
                gap={5}
                className={props.isSelected ? styles.folderSel : styles.folderBox}
                onClick={props.onClick}
            >
                <FolderIcon name={props.icon} isSelected={props.isSelected}/>
                <div className={styles.folderText}>
                    {props.title}
                </div>
            </Stack>
        </Box>
    )
})

export default FolderBox
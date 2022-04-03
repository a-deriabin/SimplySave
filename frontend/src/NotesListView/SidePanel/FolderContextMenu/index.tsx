import React from 'react';
import ContextMenu, {PositionType} from "../../../shared/components/ContextMenu";
import HorizontalButton from "../../../shared/components/HorizontalButton";
import Container from "../../../shared/components/Container";
import Stack from "../../../shared/components/Stack";
import {IoPencil, IoArrowRedo, IoTrash} from "react-icons/io5";
import styles from './styles.module.scss';

type PropsType = {
    targetFolderId: string|null,
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function FolderContextMenu(props: PropsType) {

    const handleRename = () => {
        console.log('rename ' + props.targetFolderId)
    }

    return (
        <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
            <HorizontalButton font='small' onClick={handleRename}>
                <Stack direction='row' justify='space-between' align='center'>
                    <IoPencil className={styles.icon} />
                    <Container horizontalAlign='start'>
                        Rename
                    </Container>
                </Stack>
            </HorizontalButton>
            <HorizontalButton font='small'>
                <Stack direction='row' justify='space-between' align='center'>
                    <IoArrowRedo className={styles.icon} />
                    <Container horizontalAlign='start'>
                        Move
                    </Container>
                </Stack>
            </HorizontalButton>
            <HorizontalButton font='small'>
                <Stack direction='row' justify='space-between' align='center'>
                    <IoTrash className={styles.icon} />
                    <Container horizontalAlign='start'>
                        Delete
                    </Container>
                </Stack>
            </HorizontalButton>
        </ContextMenu>
    );
}

export default FolderContextMenu;
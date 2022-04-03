import React from 'react';
import ContextMenu, {PositionType} from "../../../shared/components/ContextMenu";
import {IoPencil, IoTrash} from "react-icons/io5";
import ContextMenuButton from "../../../shared/components/ContextMenuButton";

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
            <ContextMenuButton text='Rename' icon={IoPencil} onClick={handleRename} />
            <ContextMenuButton text='Delete' icon={IoTrash} />
        </ContextMenu>
    );
}

export default FolderContextMenu;
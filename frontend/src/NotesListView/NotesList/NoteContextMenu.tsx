import React from 'react';
import {IoPencil, IoArrowRedo, IoTrash} from "react-icons/io5";
import ContextMenuButton from "../../shared/components/ContextMenuButton";
import ContextMenu, {PositionType} from "../../shared/components/ContextMenu";

type PropsType = {
    targetNoteId: string|null,
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function NoteContextMenu(props: PropsType) {
    const handleRename = () => {
        console.log('rename ' + props.targetNoteId)
    }

    return (
        <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
            <ContextMenuButton text='Rename' icon={IoPencil} onClick={handleRename} />
            <ContextMenuButton text='Move' icon={IoArrowRedo} />
            <ContextMenuButton text='Delete' icon={IoTrash} />
        </ContextMenu>
    );
}

export default NoteContextMenu;
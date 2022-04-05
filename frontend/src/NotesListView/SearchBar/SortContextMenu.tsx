import React from 'react';
import ContextMenu, {PositionType} from "../../shared/components/ContextMenu";
import {NotesSortType} from "../../shared/redux/config/configSlice.types";
import ContextMenuButton from "../../shared/components/ContextMenuButton";

type PropsType = {
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function SortContextMenu(props: PropsType) {
    const handleSetSort = (sortType: NotesSortType) => () => {
        //TODO
    }

    return (
        <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
            <ContextMenuButton text='By name' icon={null} />
            <ContextMenuButton text='By creation date (old first)' icon={null} />
            <ContextMenuButton text='By creation date (new first)' icon={null} />
            <ContextMenuButton text='By edit date (old first)' icon={null} />
            <ContextMenuButton text='By edit date (new first)' icon={null} />
        </ContextMenu>
    );
}

export default SortContextMenu;
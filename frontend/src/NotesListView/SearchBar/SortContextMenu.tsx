import React from 'react';
import ContextMenu, {PositionType} from "../../shared/components/ContextMenu";
import {NotesSortType} from "../../shared/redux/config/configSlice.types";
import ContextMenuButton from "../../shared/components/ContextMenuButton";
import {useDispatch, useSelector} from "react-redux";
import {setConfigSort} from "../../shared/redux/config/configSetSort";
import {configSelector} from "../../shared/redux/config/configSlice";
import {IoCheckmark} from "react-icons/io5";

type PropsType = {
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function SortContextMenu(props: PropsType) {
    const dispatch = useDispatch()
    const handleSetSort = (sortType: NotesSortType) => () => {
        dispatch(setConfigSort(sortType))
        props.onClose()
    }
    const sort = useSelector(configSelector).notesSort

    const iconIf = (desiredSort: NotesSortType) => {
        return sort === desiredSort ? IoCheckmark : null
    }

    return (
        <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
            <ContextMenuButton
                text='By name'
                icon={iconIf('alphabet')}
                onClick={handleSetSort('alphabet')}
            />
            <ContextMenuButton
                text='By creation date (old first)'
                icon={iconIf('create-date')}
                onClick={handleSetSort('create-date')}
            />
            <ContextMenuButton
                text='By creation date (new first)'
                icon={iconIf('create-date-desc')}
                onClick={handleSetSort('create-date-desc')}
            />
            <ContextMenuButton
                text='By edit date (old first)'
                icon={iconIf('edit-date')}
                onClick={handleSetSort('edit-date')}
            />
            <ContextMenuButton
                text='By edit date (new first)'
                icon={iconIf('edit-date-desc')}
                onClick={handleSetSort('edit-date-desc')}
            />
        </ContextMenu>
    );
}

export default SortContextMenu;
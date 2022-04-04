import React, {useState} from 'react';
import ContextMenu, {PositionType} from "../../../shared/components/ContextMenu";
import {IoPencil, IoTrash} from "react-icons/io5";
import ContextMenuButton from "../../../shared/components/ContextMenuButton";
import RenameDialog from "../RenameDialog";
import {useDispatch, useSelector} from "react-redux";
import {renameFolder} from "../../../shared/redux/notes/folderRename";
import {notesSelector} from "../../../shared/redux/notes/notesSlice";

type PropsType = {
    targetFolderId: string | null,
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function FolderContextMenu(props: PropsType) {
    const [isRenaming, setIsRenaming] = useState(false)
    const dispatch = useDispatch()
    const notesData = useSelector(notesSelector)
    const folderIndex = notesData.foldersList.findIndex(x => x.id === props.targetFolderId)
    const folder = notesData.foldersList[folderIndex] ?? null

    const handleRename = () => {
        setIsRenaming(true)
        props.onClose()
    }
    const handleRenameFinish = (newTitle: string|null) => {
        setIsRenaming(false)

        if (newTitle !== null && props.targetFolderId !== null)
            dispatch(renameFolder([props.targetFolderId, newTitle]))
    }

    return (
        <>
            <RenameDialog
                isVisible={isRenaming}
                onClose={handleRenameFinish}
                initialTitle={folder?.title ?? ''}
            />
            <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
                <ContextMenuButton text='Rename' icon={IoPencil} onClick={handleRename}/>
                <ContextMenuButton text='Delete' icon={IoTrash}/>
            </ContextMenu>
        </>
    );
}

export default FolderContextMenu;
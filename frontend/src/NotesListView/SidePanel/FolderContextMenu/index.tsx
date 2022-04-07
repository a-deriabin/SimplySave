import React, {useState} from 'react';
import ContextMenu, {PositionType} from "../../../shared/components/ContextMenu";
import {IoExtensionPuzzle, IoPencil, IoTrash} from "react-icons/io5";
import ContextMenuButton from "../../../shared/components/ContextMenuButton";
import RenameDialog from "../../../shared/components/RenameDialog";
import {useDispatch, useSelector} from "react-redux";
import {renameFolder} from "../../../shared/redux/notes/folderRename";
import {notesSelector} from "../../../shared/redux/notes/notesSlice";
import MessageDialog from "../../../shared/components/MessageDialog";
import ConfirmDialog from "../../../shared/components/ConfirmDialog";
import {deleteFolder} from "../../../shared/redux/notes/folderDelete";
import SelectFolderDialog from "./SelectFolderDialog";

type PropsType = {
    targetFolderId: string | null,
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function FolderContextMenu(props: PropsType) {
    const [isRenaming, setIsRenaming] = useState(false)
    const [showCannotDelete, setShowCannotDelete] = useState(false)
    const [showIconDialog, setShowIconDialog] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)

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

    const handleIconChange = () => {
        setShowIconDialog(true)
        props.onClose()
    }
    const handleIconDialogClose = () => setShowIconDialog(false)

    const handleDelete = () => {
        setShowDeleteDialog(true)
        props.onClose()
    }
    const handleDeleteConfirm = (result: boolean) => {
        setShowDeleteDialog(false)
        if (!result || !props.targetFolderId)
            return

        if (notesData.notesList.find(x => x.folderId === folder.id)) {
            setShowCannotDelete(true)
        }
        else {
            dispatch(deleteFolder(props.targetFolderId))
        }
    }

    return (
        <>
            <RenameDialog
                isVisible={isRenaming}
                onClose={handleRenameFinish}
                initialTitle={folder?.title ?? ''}
            />
            <MessageDialog
                isVisible={showCannotDelete}
                onClose={() => setShowCannotDelete(false)}
                title='Failed to delete'
                message='Folder is not empty.'
            />
            <ConfirmDialog
                isVisible={showDeleteDialog}
                onClose={handleDeleteConfirm}
                title={folder?.title ?? ''}
                message='Are you sure you want to delete this folder?'
                confirmMsg='Delete'
            />
            <SelectFolderDialog
                folderId={props.targetFolderId ?? ''}
                isVisible={showIconDialog}
                onClose={handleIconDialogClose}
            />
            <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
                <ContextMenuButton text='Rename' icon={IoPencil} onClick={handleRename} />
                <ContextMenuButton text='Change icon' icon={IoExtensionPuzzle} onClick={handleIconChange} />
                <ContextMenuButton text='Delete' icon={IoTrash} onClick={handleDelete} />
            </ContextMenu>
        </>
    );
}

export default FolderContextMenu;
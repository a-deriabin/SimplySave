import React, {useState} from 'react';
import {IoPencil, IoArrowRedo, IoTrash} from "react-icons/io5";
import ContextMenuButton from "../../shared/components/ContextMenuButton";
import ContextMenu, {PositionType} from "../../shared/components/ContextMenu";
import RenameDialog from "../../shared/components/RenameDialog";
import {useDispatch, useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";
import {renameNote} from "../../shared/redux/notes/notesRename";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import {deleteNote} from "../../shared/redux/notes/notesDelete";
import NoteMoveDialog from "./NoteMoveDialog";
import {moveNote} from "../../shared/redux/notes/notesMove";

type PropsType = {
    targetNoteId: string | null,
    isOpen: boolean,
    onClose: () => void,
    position: PositionType,
}

function NoteContextMenu(props: PropsType) {
    const [isRenaming, setIsRenaming] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [showMoveDialog, setShowMoveDialog] = useState(false)

    const dispatch = useDispatch()
    const notesData = useSelector(notesSelector)
    const noteIndex = notesData.notesList.findIndex(x => x.id === props.targetNoteId)
    const note = notesData.notesList[noteIndex] ?? null

    const handleRename = () => {
        setIsRenaming(true)
        props.onClose()
    }
    const handleRenameFinish = (newTitle: string|null) => {
        setIsRenaming(false)
        if (newTitle && props.targetNoteId) {
            dispatch(renameNote({
                id: props.targetNoteId,
                newTitle: newTitle,
            }))
        }
    }

    const handleDelete = () => {
        setShowDeleteDialog(true)
        props.onClose()
    }
    const handleDeleteConfirm = (result: boolean) => {
        setShowDeleteDialog(false)
        if (!result ||!props.targetNoteId)
            return

        dispatch(deleteNote(props.targetNoteId))
    }

    const handleMove = () => {
        setShowMoveDialog(true)
        props.onClose()
    }
    const handleMoveFinish = (folderId: string|null) => {
        setShowMoveDialog(false)
        if (folderId && props.targetNoteId)
            dispatch(moveNote([props.targetNoteId, folderId]))
    }

    return (
        <>
            <RenameDialog
                isVisible={isRenaming}
                onClose={handleRenameFinish}
                initialTitle={note?.title ?? ''}
            />
            <ConfirmDialog
                isVisible={showDeleteDialog}
                onClose={handleDeleteConfirm}
                title={note?.title ?? ''}
                message='Are you sure you want to delete this note?'
                confirmMsg='Delete'
            />
            <NoteMoveDialog isVisible={showMoveDialog} onClose={handleMoveFinish} />
            <ContextMenu isOpen={props.isOpen} position={props.position} onClose={props.onClose}>
                <ContextMenuButton text='Rename' icon={IoPencil} onClick={handleRename}/>
                <ContextMenuButton text='Move' icon={IoArrowRedo} onClick={handleMove} />
                <ContextMenuButton text='Delete' icon={IoTrash} onClick={handleDelete} />
            </ContextMenu>
        </>
    );
}

export default NoteContextMenu;
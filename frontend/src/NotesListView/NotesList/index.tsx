import React, {useEffect, useState} from 'react';
import Stack from "../../shared/components/Stack";
import NoteEntry from "./NoteEntry";
import {useDispatch, useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";
import Placeholder from "./Placeholder";
import NoteContextMenu from "./NoteContextMenu";
import {PositionType} from "../../shared/components/ContextMenu";
import {configSelector} from "../../shared/redux/config/configSlice";
import {sortByType} from "./utils/sortByType";
import {useKeyPress} from "../../shared/hooks/useKeyPress";
import {loadNoteContent} from "../../shared/redux/notes/notesLoadContent";
import isAnyDialogOpen from "../../shared/utils/isAnyDialogOpen";

type PropsType = {
    isMobile: boolean,
}

function NotesList(props: PropsType) {
    const notesData = useSelector(notesSelector)
    const sort = useSelector(configSelector).notesSort
    const dispatch = useDispatch()

    let notes = notesData.openFolderId === null ? notesData.notesList :
        notesData.notesList.filter(note => note.folderId === notesData.openFolderId)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menuPostion, setMenuPosition] = useState<PositionType>({x: 0, y: 0})
    const [menuForId, setMenuForId] = useState<string|null>(null)

    const isDownPressed = useKeyPress('ArrowDown')
    useEffect(() => {
        if (isDownPressed && notes.length > 0 && !notesData.isEditingNote && !isAnyDialogOpen()) {
            const lastId = notes.length - 1
            const openId = notes.findIndex(x => x.id === notesData.openNoteId)
            const id = openId === -1 ? 0 : openId + 1 > lastId ? 0 : openId + 1
            dispatch(loadNoteContent(notes[id].id))
        }
    }, [isDownPressed, notesData, dispatch, notes])

    const isUpPressed = useKeyPress('ArrowUp')
    useEffect(() => {
        if (isUpPressed && notes.length > 0 && !notesData.isEditingNote && !isAnyDialogOpen()) {
            const lastId = notes.length - 1
            const openId = notes.findIndex(x => x.id === notesData.openNoteId)
            const id = openId === -1 ? lastId : openId - 1 < 0 ? lastId : openId - 1
            dispatch(loadNoteContent(notes[id].id))
        }
    }, [dispatch, isUpPressed, notes, notesData.isEditingNote, notesData.openNoteId])

    const handleMenuClose = () => setIsMenuOpen(false)
    const handleContextMenuOpen = (id: string) => (e: React.MouseEvent) => {
        setMenuPosition({
            x: e.clientX,
            y: e.clientY
        })
        setIsMenuOpen(true)
        setMenuForId(id)
        e.preventDefault()
    }

    if (notesData.searchStr !== '') {
        notes = notes.filter(note => note.title.includes(notesData.searchStr))
    }

    notes = sortByType(notes, sort)

    return (
        <Stack direction='column'>
            <NoteContextMenu
                targetNoteId={menuForId}
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                position={menuPostion}
            />
            {notes.map(note => (
                <NoteEntry
                    note={note}
                    key={note.id}
                    isMobile={props.isMobile}
                    onContextMenu={handleContextMenuOpen(note.id)}
                />
            ))}
            {notes.length === 0 && <Placeholder />}
        </Stack>
    );
}

export default NotesList;
import React, {useState} from 'react';
import Stack from "../../shared/components/Stack";
import NoteEntry from "./NoteEntry";
import {useSelector} from "react-redux";
import {notesSelector} from "../../shared/redux/notes/notesSlice";
import Placeholder from "./Placeholder";
import NoteContextMenu from "./NoteContextMenu";
import {PositionType} from "../../shared/components/ContextMenu";
import {NoteType} from "../../shared/redux/notes/notesSlice.types";
import {configSelector} from "../../shared/redux/config/configSlice";
import {sortByType} from "./utils/sortByType";

type PropsType = {
    isMobile: boolean,
}

function NotesList(props: PropsType) {
    const notesData = useSelector(notesSelector)
    const sort = useSelector(configSelector).notesSort

    let notes = notesData.openFolderId === null ? notesData.notesList :
        notesData.notesList.filter(note => note.folderId === notesData.openFolderId)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menuPostion, setMenuPosition] = useState<PositionType>({x: 0, y: 0})
    const [menuForId, setMenuForId] = useState<string|null>(null)

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
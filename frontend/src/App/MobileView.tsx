import React from 'react';
import NotesListView from "../NotesListView";
import {useSelector} from "react-redux";
import {notesSelector} from "../shared/redux/notes/notesSlice";
import NoteContentView from "../NoteContentView";

function MobileView() {
    const notesState = useSelector(notesSelector)
    const noteSelected = notesState.openNoteId === null

    return (
        noteSelected ? <NotesListView isMobile={true} /> : <NoteContentView isMobile={true} />
    );
}

export default MobileView;
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {notesSelector, selectNote} from "../shared/redux/notes/notesSlice";
import {decryptContent} from "../shared/utils/encryption";
import PasswordInputScreen from "./PasswordInputScreen";
import ViewScreen from "./ViewScreen";
import {saveNote} from "../shared/redux/notes/notesSave";
import {useKeyPress} from "../shared/hooks/useKeyPress";
import isAnyDialogOpen from "../shared/utils/isAnyDialogOpen";

type PropsType = {
    isMobile: boolean,
}

function NoteContentView(props: PropsType) {
    const dispatch = useDispatch()
    const notesData = useSelector(notesSelector)
    const openNote = notesData.notesList.find(x => x.id === notesData.openNoteId) ?? null
    const [password, setPassword] = useState<string|null>(null)
    const lockedContent = notesData.openContent
    const [unlockedContent, setUnlockedContent] = useState<string|null>(null)

    const isEscapePressed = useKeyPress('Escape')
    useEffect(() => {
        if (isEscapePressed && !notesData.isEditingNote && !isAnyDialogOpen())
            dispatch(selectNote(null))
    }, [isEscapePressed, dispatch, notesData.isEditingNote])

    const handleNewPassword = (newPass: string) => {
        if (lockedContent === null)
            throw Error('Password requested with no lockedContent - this should never happen.')
        const success = decryptContent(lockedContent, newPass) !== null;
        if (success)
            setPassword(newPass)
        return success
    }

    const handleSaveNote = (newContent: string) => {
        if (openNote === null)
            throw Error('Implementation error: trying to save closed note.')

        dispatch(saveNote({
            id: openNote.id,
            content: newContent,
            password
        }))
    }

    useEffect(() => {
        setPassword(null)
    }, [openNote?.id]) // only when different note selected!

    useEffect(() => {
        if (openNote === null || lockedContent === null) {
            setUnlockedContent(null)
            setPassword(null)
        }
        else if (openNote.isPrivate) {
            const decrypted = decryptContent(lockedContent, password)
            if (decrypted === null)
                setPassword(null)
            setUnlockedContent(decrypted)
        }
        else
            setUnlockedContent(lockedContent)
    }, [lockedContent, notesData, openNote, password])

    if (openNote === null) {
        return <div />
    }

    if (openNote.isPrivate && password === null) {
        return (
            <PasswordInputScreen
                onSubmit={handleNewPassword}
                isMobile={props.isMobile}
            />
        )
    }

    if (unlockedContent === null) {
        return null; //TODO: loading bar?
    }

    return (
        <ViewScreen
            content={unlockedContent}
            onSave={handleSaveNote}
            isMobile={props.isMobile}
        />
    );
}

export default NoteContentView;
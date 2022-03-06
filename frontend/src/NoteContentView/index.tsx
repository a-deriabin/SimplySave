import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {notesSelector} from "../shared/redux/notes/notesSlice";
import {decryptContent} from "../shared/utils/encryption";
import PasswordInputScreen from "./PasswordInputScreen";
import ViewScreen from "./ViewScreen";
import {saveNote} from "../shared/redux/notes/notesSave";

function NoteContentView() {
    const dispatch = useDispatch()
    const notesData = useSelector(notesSelector)
    const openNote = notesData.notesList.find(x => x.id === notesData.openNoteId) ?? null
    const [password, setPassword] = useState<string|null>(null)
    const lockedContent = notesData.openContent
    const [unlockedContent, setUnlockedContent] = useState<string|null>(null)


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
    }, [openNote])

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
        return <PasswordInputScreen onSubmit={handleNewPassword} />
    }

    if (unlockedContent === null) {
        return <div>loading...</div>
    }

    return (
        <ViewScreen content={unlockedContent} onSave={handleSaveNote} />
    );
}

export default NoteContentView;
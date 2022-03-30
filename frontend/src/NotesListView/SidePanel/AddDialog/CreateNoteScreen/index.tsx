import React, {useState} from 'react';
import EnterTitleScreen from "./EnterTitleScreen";
import EnterPasswordScreen from "./EnterPasswordScreen";
import {useDispatch} from "react-redux";
import {createNote} from "../../../../shared/redux/notes/notesCreate";
import SelectFolderScreen from "./SelectFolderScreen";

type PropsType = {
    onFinish?: () => void,
}

function CreateNoteScreen(props: PropsType) {
    const [folder, setFolder] = useState<string|null>(null)
    const [title, setTitle] = useState<string|null>(null)
    const dispatch = useDispatch()

    const handleFolderSelect = (folder: string) => {
        setFolder(folder)
    }
    const handleTitleSubmit = (title: string) => {
        setTitle(title)
    }
    const handlePasswordSubmit = (pass: string) => {
        if (title === null) {
            console.error('Cannot create note with empty title.')
            return
        }
        if (folder === null) {
            console.error('Cannot create note with empty folder id.')
            return
        }

        dispatch(createNote({
            title,
            folderId: folder,
            password: pass
        }))
        //TODO: wait for creation to finish
        props.onFinish && props.onFinish()
    }

    if (folder === null) {
        return <SelectFolderScreen onSubmit={handleFolderSelect} />
    }
    else if (title === null) {
        return <EnterTitleScreen onSubmit={handleTitleSubmit} />
    }
    else {
        return <EnterPasswordScreen onSubmit={handlePasswordSubmit} />
    }
}

export default CreateNoteScreen;
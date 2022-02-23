import React, {useState} from 'react';
import EnterTitleScreen from "./EnterTitleScreen";
import EnterPasswordScreen from "./EnterPasswordScreen";
import {useDispatch} from "react-redux";
import {createNote} from "../../../../../shared/redux/notes/notesCreate";

type PropsType = {
    onFinish?: () => void,
}

function CreateNoteScreen(props: PropsType) {
    const [title, setTitle] = useState<string|null>(null)
    const dispatch = useDispatch()

    const handleTitleSubmit = (title: string) => {
        setTitle(title)
    }
    const handlePasswordSubmit = (pass: string) => {
        if (title === null) {
            console.error('Cannot create note with empty title.')
            return
        }

        dispatch(createNote({
            title,
            folderId: 'demo', //todo
            password: pass
        }))
        //TODO: wait for creation to finish
        props.onFinish && props.onFinish()
    }

    if (title === null) {
        return <EnterTitleScreen onSubmit={handleTitleSubmit} />
    }
    else {
        return <EnterPasswordScreen onSubmit={handlePasswordSubmit} />
    }
}

export default CreateNoteScreen;
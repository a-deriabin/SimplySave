import React, {useState} from 'react';
import FolderTitleScreen from "./FolderTitleScreen";
import FolderIconScreen from "./FolderIconScreen";
import {useDispatch} from "react-redux";
import {createFolder} from "../../../../shared/redux/notes/folderCreate";

type PropsType = {
    onFinish?: () => void,
}

function CreateFolderScreen(props: PropsType) {
    const [title, setTitle] = useState<string|null>(null)
    const dispatch = useDispatch()

    const handleTitleSubmit = (newTitle: string) => {
        setTitle(newTitle)
    }
    const handleIconSubmit = (newIcon: string) => {
        if (title === null)
            throw Error('Title is null (should never happen here).')

        dispatch(createFolder({
            title,
            icon: newIcon
        }))
        //TODO: wait for creation to finish
        props.onFinish && props.onFinish()
    }

    if (title === null) {
        return <FolderTitleScreen onSubmit={handleTitleSubmit} />
    }

    return <FolderIconScreen onSubmit={handleIconSubmit} />
}

export default CreateFolderScreen;
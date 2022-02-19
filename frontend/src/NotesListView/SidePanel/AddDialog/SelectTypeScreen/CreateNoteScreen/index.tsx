import React, {useState} from 'react';
import EnterTitleScreen from "./EnterTitleScreen";
import EnterPasswordScreen from "./EnterPasswordScreen";

type PropsType = {
    onFinish?: () => void,
}

function CreateNoteScreen(props: PropsType) {
    const [title, setTitle] = useState<string|null>(null)

    const handleTitleSubmit = (title: string) => {
        setTitle(title)
    }
    const handlePasswordSubmit = (pass: string) => {
        //TODO: create note
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
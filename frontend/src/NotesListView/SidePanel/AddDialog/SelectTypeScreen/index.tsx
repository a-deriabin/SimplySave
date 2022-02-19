import React, {useState} from 'react';
import Stack from "../../../../shared/components/Stack";
import CreateNoteScreen from "./CreateNoteScreen";
import CustomButton from "./CustomButton";
import {IoDocumentTextSharp, IoFolderOpenSharp} from "react-icons/io5";
import CreateFolderScreen from "../CreateFolderScreen";


type PropsType = {
    onFinish?: () => void,
}

function SelectTypeScreen(props: PropsType) {
    const [choice, setChoice] = useState<string | null>(null)
    const handleSelectNote = () => setChoice('note')
    const handleSelectFolder = () => setChoice('folder')

    if (choice === 'note') {
        return <CreateNoteScreen onFinish={props.onFinish} />
    }
    if (choice === 'folder') {
        return <CreateFolderScreen />
    }

    return (
        <div style={{ minWidth: 350 }}>
            <h2>Create...</h2>
            <Stack direction='row' style={{ height: '100%' }}>
                <CustomButton
                    icon={IoDocumentTextSharp}
                    text='New Note'
                    onClick={handleSelectNote}
                />
                <CustomButton
                    icon={IoFolderOpenSharp}
                    text='New Folder'
                    onClick={handleSelectFolder}
                />
            </Stack>
        </div>
    );
}

export default SelectTypeScreen;
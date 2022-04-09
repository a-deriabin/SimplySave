import React, {useState} from 'react';
import Stack from "../../../shared/components/Stack";
import CreateNoteScreen from "./CreateNoteScreen";
import CustomButton from "./CustomButton";
import {IoDocumentTextSharp, IoFolderOpenSharp} from "react-icons/io5";
import CreateFolderScreen from "./CreateFolderScreen";
import {useSelector} from "react-redux";
import {notesSelector} from "../../../shared/redux/notes/notesSlice";


type PropsType = {
    onFinish?: () => void,
}

function SelectTypeScreen(props: PropsType) {
    const notesData = useSelector(notesSelector)
    const [choice, setChoice] = useState<string | null>(null)
    const handleSelectNote = () => {
        if (notesData.foldersList.length > 0)
            setChoice('note')
    }
    const handleSelectFolder = () => setChoice('folder')

    if (choice === 'note') {
        return <CreateNoteScreen onFinish={props.onFinish}/>
    }
    if (choice === 'folder') {
        return <CreateFolderScreen onFinish={props.onFinish}/>
    }

    const minWidth = notesData.foldersList.length > 0 ? 350 : 175;

    return (
        <div style={{minWidth: minWidth}}>
            <h2>Create...</h2>
            <Stack direction='row' style={{height: '100%'}}>
                {notesData.foldersList.length > 0 && (
                    <CustomButton
                    icon={IoDocumentTextSharp}
                    text='New Note'
                    onClick={handleSelectNote}
                />
                )}
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
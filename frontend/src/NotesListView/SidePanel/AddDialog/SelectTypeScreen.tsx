import React, {useState} from 'react';
import Stack from "../../../shared/components/Stack";
import HorizontalButton from "../../../shared/components/HorizontalButton";
import CreateNoteScreen from "./CreateNoteScreen/index";

type PropsType = {
    onSelected?: () => void,
}

function SelectTypeScreen(props: PropsType) {
    const [choice, setChoice] = useState<string | null>(null)
    const handleSelectNote = () => setChoice('note')
    const handleSelectFolder = () => setChoice('folder')

    if (choice === 'note') {
        return <CreateNoteScreen />
    }

    return (
        <>
            <h1>Create new...</h1>
            <Stack direction='column'>
                <HorizontalButton onClick={handleSelectNote}>Note</HorizontalButton>
                <HorizontalButton onClick={handleSelectFolder}>Folder</HorizontalButton>
            </Stack>
        </>
    );
}

export default SelectTypeScreen;
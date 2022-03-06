import React, {useState} from 'react';
import Stack from "../shared/components/Stack";
import HorizontalButton from "../shared/components/HorizontalButton";
import styles from './styles.module.scss';
import {BsPencilSquare} from "react-icons/bs";
import DisplayView from "./DisplayView";
import EditView from "./EditView";
import {IoDocumentTextOutline, IoSaveOutline, IoSaveSharp, IoThumbsUp} from "react-icons/io5";

type PropsType = {
    content: string,
}

function ViewScreen(props: PropsType) {
    const [editingContent, setEditingContent] = useState<string>('')
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => {
        setIsEditing(true)
        setEditingContent(props.content)
    }

    const onContentChange = (newContent: string) => {
        setEditingContent(newContent)
    }

    const handleSave = () => {
        setIsEditing(false)
        //TODO
    }

    return (
        <Stack className={styles.screenView} direction='column'>
            {!isEditing && (
                <>
                    <DisplayView content={props.content}/>
                    <HorizontalButton variant='text' onClick={handleEdit}>
                        <BsPencilSquare className={styles.editIcon}/>
                        Edit
                    </HorizontalButton>
                </>
            )}
            {isEditing && (
                <>
                    <EditView content={editingContent} onChange={onContentChange}/>
                    <HorizontalButton variant='text' onClick={handleSave}>
                        <IoDocumentTextOutline className={styles.editIcon}/>
                        Save
                    </HorizontalButton>
                </>
            )}

        </Stack>
    );
}

export default ViewScreen;
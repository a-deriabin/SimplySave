import React, {useState} from 'react';
import Stack from "../shared/components/Stack";
import HorizontalButton from "../shared/components/HorizontalButton";
import styles from './styles.module.scss';
import {BsPencilSquare} from "react-icons/bs";
import {IoDocumentTextOutline} from "react-icons/io5";
import DisplayView from "./DisplayView";
import EditView from "./EditView";
import MobileTitleBar from "./MobileTitleBar";
import {notesIsEditingSelector, setIsEditingNote} from "../shared/redux/notes/notesSlice";
import {useDispatch, useSelector} from "react-redux";

type PropsType = {
    content: string,
    onSave: (newContent: string) => void,
    isMobile: boolean,
}

function ViewScreen(props: PropsType) {
    const [editingContent, setEditingContent] = useState<string>('')
    const isEditing = useSelector(notesIsEditingSelector)
    const dispatch = useDispatch()

    const handleEdit = () => {
        setEditingContent(props.content)
        dispatch(setIsEditingNote(true))
    }

    const onContentChange = (newContent: string) => {
        setEditingContent(newContent)
    }

    const handleSave = () => {
        props.onSave(editingContent)
        dispatch(setIsEditingNote(false))
    }

    return (
        <Stack className={styles.screenView} direction='column'>
            {props.isMobile && <MobileTitleBar />}
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
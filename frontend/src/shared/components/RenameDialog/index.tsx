import React, {useCallback, useEffect, useState} from 'react';
import styles from "../../../NotesListView/SidePanel/AddDialog/styles.module.scss";
import Dialog from "../Dialog";
import Stack from "../Stack";
import FormInput from "../FormInput";
import HorizontalButton from "../HorizontalButton";
import Span from "../Span";
import {useKeyPress} from "../../hooks/useKeyPress";

type PropsType = {
    isVisible: boolean,
    onClose: (newTitle: string|null) => void,
    initialTitle: string,
}

function RenameDialog(props: PropsType) {
    const [title, setTitle] = useState<string>('')

    useEffect(() => {
        setTitle(props.initialTitle)
    }, [props.initialTitle])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleSubmit = useCallback(() => {
        if (title !== '') {
            props.onClose(title)
        }
    }, [props, title])
    const handleClose = () => {
        props.onClose(null)
    }

    const isEnterPressed = useKeyPress('Enter')
    useEffect(() => {
        if (isEnterPressed)
            handleSubmit()
    }, [handleSubmit, isEnterPressed])


    return (
        <Dialog isVisible={props.isVisible} onClose={handleClose} className={styles.dialog}>
                <Stack direction='column'>
                    <h2>Enter new title</h2>
                    <FormInput
                        type='text'
                        placeholder='New title'
                        value={title}
                        autoFocus
                        onChange={handleChange}
                    />
                    <HorizontalButton onClick={handleSubmit}>
                        { title === '' ? <Span type='error'>Done</Span> : 'Done' }
                    </HorizontalButton>
                </Stack>
        </Dialog>
    )
}

export default RenameDialog;
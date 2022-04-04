import React, {useEffect, useState} from 'react';
import styles from "../../../NotesListView/SidePanel/AddDialog/styles.module.scss";
import Dialog from "../Dialog";
import Stack from "../Stack";
import FormInput from "../FormInput";
import HorizontalButton from "../HorizontalButton";
import Span from "../Span";

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
    const handleSubmit = () => {
        if (title !== '') {
            props.onClose(title)
        }
    }
    const handleClose = () => {
        props.onClose(null)
    }

    return (
        <Dialog isVisible={props.isVisible} onClose={handleClose} className={styles.dialog}>
                <Stack direction='column'>
                    <h2>Enter new title</h2>
                    <FormInput
                        type='text'
                        placeholder='New title'
                        value={title}
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
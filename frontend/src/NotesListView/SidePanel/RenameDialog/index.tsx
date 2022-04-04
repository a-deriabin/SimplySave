import React, {useEffect, useState} from 'react';
import styles from "../AddDialog/styles.module.scss";
import Dialog from "../../../shared/components/Dialog";
import Stack from "../../../shared/components/Stack";
import FormInput from "../../../shared/components/FormInput";
import HorizontalButton from "../../../shared/components/HorizontalButton";
import Span from "../../../shared/components/Span";

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
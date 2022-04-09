import React, {useCallback, useEffect, useState} from 'react';
import FormInput from "../../../../shared/components/FormInput";
import HorizontalButton from "../../../../shared/components/HorizontalButton";
import Stack from "../../../../shared/components/Stack";
import Span from "../../../../shared/components/Span";
import {useKeyPress} from "../../../../shared/hooks/useKeyPress";

type PropsType = {
    onSubmit: (title: string) => void,
}

function FolderTitleScreen(props: PropsType) {
    const [title, setTitle] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleSubmit = useCallback(() => {
        if (title !== '') {
            props.onSubmit(title)
        }
    }, [props, title])

    const isEnterPressed = useKeyPress('Enter')
    useEffect(() => {
        if (isEnterPressed)
            handleSubmit()
    }, [handleSubmit, isEnterPressed])


    return (
        <Stack direction='column'>
            <h2>Enter title</h2>
            <FormInput
                type='text'
                placeholder='Folder title'
                value={title}
                autoFocus
                onChange={handleChange}
            />
            <HorizontalButton onClick={handleSubmit}>
                { title === '' ? <Span type='error'>Continue</Span> : 'Continue' }
            </HorizontalButton>
        </Stack>
    );
}

export default FolderTitleScreen;

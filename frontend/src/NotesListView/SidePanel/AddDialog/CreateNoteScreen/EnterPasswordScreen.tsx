import React, {useCallback, useEffect, useState} from 'react';
import Stack from "../../../../shared/components/Stack";
import FormInput from "../../../../shared/components/FormInput";
import HorizontalButton from "../../../../shared/components/HorizontalButton";
import {useKeyPress} from "../../../../shared/hooks/useKeyPress";

type PropsType = {
    onSubmit: (pass: string) => void,
}

function EnterPasswordScreen(props: PropsType) {
    const [password, setPassword] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleSubmit = useCallback(() => {
        props.onSubmit(password)
    }, [password, props])

    const isEnterPressed = useKeyPress('Enter')
    useEffect(() => {
        if (isEnterPressed)
            handleSubmit()
    }, [handleSubmit, isEnterPressed])


    return (
        <Stack direction='column'>
            <h2>Enter password</h2>
            <FormInput
                type='password'
                placeholder='No password'
                value={password}
                autoFocus
                onChange={handleChange}
            />
            <HorizontalButton onClick={handleSubmit}>Create note</HorizontalButton>
        </Stack>
    );
}

export default EnterPasswordScreen;
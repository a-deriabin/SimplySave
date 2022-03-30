import React, {useState} from 'react';
import Stack from "../../../../shared/components/Stack";
import FormInput from "../../../../shared/components/FormInput";
import HorizontalButton from "../../../../shared/components/HorizontalButton";

type PropsType = {
    onSubmit: (pass: string) => void,
}

function EnterPasswordScreen(props: PropsType) {
    const [password, setPassword] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleSubmit = () => {
        props.onSubmit(password)
    }

    return (
        <Stack direction='column'>
            <h2>Enter password</h2>
            <FormInput
                type='password'
                placeholder='No password'
                value={password}
                onChange={handleChange}
            />
            <HorizontalButton onClick={handleSubmit}>Create note</HorizontalButton>
        </Stack>
    );
}

export default EnterPasswordScreen;
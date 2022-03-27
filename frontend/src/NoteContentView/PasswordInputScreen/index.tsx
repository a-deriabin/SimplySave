import React, {useState} from 'react';
import Container from "../../shared/components/Container";
import FormInput from "../../shared/components/FormInput";
import Stack from "../../shared/components/Stack";
import styles from './styles.module.scss'
import HorizontalButton from "../../shared/components/HorizontalButton";
import MobileTitleBar from "../MobileTitleBar";

type PropsType = {
    onSubmit: (password: string) => boolean,
    isMobile: boolean,
}

function PasswordInputScreen(props: PropsType) {
    const [error, setError] = useState(false)
    const [text, setText] = useState<string>('')

    const handlePress = () => {
        setError(!props.onSubmit(text))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        setError(false)
    }

    return (
        <Container className={styles.screen}>
            <Stack direction='column' align='center'>
                {props.isMobile && <MobileTitleBar/>}
                <Stack className={styles.form} direction='column' justify='center'>
                    <h2>Password required</h2>
                    <FormInput
                        type='password'
                        placeholder='Password'
                        autoComplete='note-password'
                        value={text}
                        onChange={handleChange}
                    />
                    <HorizontalButton variant='outline' onClick={handlePress}>
                        Submit
                    </HorizontalButton>
                    <span className={styles.error}>{error ? 'Incorrect password' : ''}</span>
                </Stack>
            </Stack>
        </Container>
    );
}

export default PasswordInputScreen;
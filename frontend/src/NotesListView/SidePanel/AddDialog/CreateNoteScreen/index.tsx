import React, {useState} from 'react';
import Stack from "../../../../shared/components/Stack";
import FormInput from "../../../../shared/components/FormInput";
import FormCheckbox from "../../../../shared/components/FormCheckbox";
import HorizontalButton from "../../../../shared/components/HorizontalButton";

type PropsType = {}

function CreateNoteScreen(props: PropsType) {
    const [hasPassword, setHasPassword] = useState(false)

    const handleHasPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasPassword(e.target.checked)
    }

    return (
        <Stack direction='column'>
            <h2>New note</h2>
            <div style={{marginTop: 10}}>
                <div>
                    <label>Title:</label><br/>
                    <FormInput type='text' placeholder='Untitled note 1' />
                </div>
                <div>
                    <FormCheckbox
                        text='Is password-protected?'
                        checked={hasPassword}
                        onChange={handleHasPasswordChange}
                    />
                </div>
                { hasPassword && (
                    <div>
                        <label>Password:</label><br />
                        <FormInput type='password' />
                    </div>
                )}
                <HorizontalButton>Create</HorizontalButton>
            </div>
        </Stack>
    );
}

export default CreateNoteScreen;
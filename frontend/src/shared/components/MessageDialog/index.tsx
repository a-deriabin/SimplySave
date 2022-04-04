import React from 'react';
import Dialog from "../Dialog";
import styles from './styles.module.scss';
import Stack from "../Stack";

type PropsType = {
    isVisible: boolean,
    onClose: () => void,
    title: string,
    message: string,
}

function MessageDialog(props: PropsType) {
    return (
        <Dialog isVisible={props.isVisible} onClose={props.onClose} className={styles.dialog}>
            <Stack direction='column' align='center' justify='center'>
                <h3>{props.title}</h3>
                <span>{props.message}</span>
            </Stack>
        </Dialog>
    );
}

export default MessageDialog;
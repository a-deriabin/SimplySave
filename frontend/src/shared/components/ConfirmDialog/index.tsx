import React from 'react';
import Dialog from "../Dialog";
import HorizontalButton from "../HorizontalButton";
import styles from './styles.module.scss';

type PropsType = {
    isVisible: boolean,
    onClose: (result: boolean) => void,
    title: string,
    message: string,
    confirmMsg?: string,
    cancelMsg?: string,
}

function ConfirmDialog(props: PropsType) {
    const confirmMsg = props.confirmMsg ?? 'Confirm'
    const cancelMsg = props.cancelMsg ?? 'Cancel'

    const cancel = () => props.onClose(false)
    const confirm = () => props.onClose(true)

    return (
        <Dialog isVisible={props.isVisible} onClose={cancel} className={styles.dialog}>
            <div className={styles.textContainer}>
                <h3>{props.title}</h3>
                <span>{props.message}</span>
            </div>
            <HorizontalButton onClick={confirm}>{confirmMsg}</HorizontalButton>
            <HorizontalButton onClick={cancel}>{cancelMsg}</HorizontalButton>
        </Dialog>
    );
}

export default ConfirmDialog;
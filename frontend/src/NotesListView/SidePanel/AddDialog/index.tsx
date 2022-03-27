import React from 'react';
import Dialog from "../../../shared/components/Dialog";
import SelectTypeScreen from "./SelectTypeScreen";
import styles from './styles.module.scss';

type AddDialogProps = {
    isVisible: boolean,
    onClose: () => void,
}

function AddDialog(props: AddDialogProps) {
    return (
        <Dialog isVisible={props.isVisible} onClose={props.onClose} className={styles.dialog}>
            <SelectTypeScreen onFinish={props.onClose} />
        </Dialog>
    );
}

export default AddDialog;
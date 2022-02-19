import React from 'react';
import Dialog from "../../../shared/components/Dialog";
import SelectTypeScreen from "./SelectTypeScreen";

type AddDialogProps = {
    isVisible: boolean,
    onClose: () => void,
}

function AddDialog(props: AddDialogProps) {
    return (
        <Dialog isVisible={props.isVisible} onClose={props.onClose} style={{
            minWidth: '250px',
        }}>
            <SelectTypeScreen onFinish={props.onClose} />
        </Dialog>
    );
}

export default AddDialog;
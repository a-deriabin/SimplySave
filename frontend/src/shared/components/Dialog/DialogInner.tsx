import React from 'react';
import {DialogProps} from "./index";
import Container from "../Container";
import styles from './styles.module.css'


function DialogInner(props: DialogProps) {
    const handleDialogClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        return false
    }
    const handleBackgroundClick = () => {
        props.onClose && props.onClose()
    }

    return (
        <div className={styles.dialogOuter} onClick={handleBackgroundClick}>
            <Container>
                <div className={styles.dialogInner} onClick={handleDialogClick}>
                    test!!
                </div>
            </Container>
        </div>
    );
}

export default DialogInner;
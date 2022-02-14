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

    const innerClass = props.className ? `${styles.dialogInner} ${props.className}`
        : styles.dialogInner

    return (
        <div className={styles.dialogOuter} onClick={handleBackgroundClick}>
            <Container>
                <div className={innerClass} onClick={handleDialogClick} style={props.style}>
                    {props.children}
                </div>
            </Container>
        </div>
    );
}

export default DialogInner;
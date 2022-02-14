import React from 'react';
import styles from './styles.module.scss'

type HorizontalButtonProps = {
    children?: React.ReactNode,
    onClick?: () => void,
}

function HorizontalButton(props: HorizontalButtonProps) {
    return (
        <div className={styles.horBtn} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default HorizontalButton;
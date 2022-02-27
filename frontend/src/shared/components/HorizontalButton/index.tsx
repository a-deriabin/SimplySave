import React from 'react';
import styles from './styles.module.scss'

type HorizontalButtonProps = {
    children?: React.ReactNode,
    onClick?: () => void,
    variant?: 'text' | 'outline',
}

function HorizontalButton(props: HorizontalButtonProps) {
    const className = props.variant === 'outline' ? styles.border :styles.base;

    return (
        <div className={className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default HorizontalButton;
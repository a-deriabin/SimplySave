import React from 'react';
import styles from './styles.module.scss'

type HorizontalButtonProps = {
    children?: React.ReactNode,
    onClick?: () => void,
    variant?: 'text' | 'outline',
    font?: 'small' | 'medium' | 'large',
}

function HorizontalButton(props: HorizontalButtonProps) {
    const variantClass = props.variant === 'outline' ? styles.border : styles.base

    const fontClass = props.font === 'small' ? styles.fontSmall :
        props.font === 'medium' ? styles.fontMedium : styles.fontLarge

    const className = `${variantClass} ${fontClass}`

    return (
        <div className={className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default HorizontalButton;
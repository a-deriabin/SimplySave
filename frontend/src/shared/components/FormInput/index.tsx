import React from 'react';
import styles from './styles.module.scss';

type PropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function FormInput(props: PropsType) {
    const { className, ...otherProps } = props
    const customClassName = `${styles.input} ${className}`

    return (
        <input className={customClassName} {...otherProps} />
    );
}

export default FormInput;
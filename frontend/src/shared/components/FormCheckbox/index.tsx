import React from 'react';
import styles from './styles.module.scss'

type PropsType = {
    text: string,
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function FormCheckbox(props: PropsType) {
    const {text, ...otherProps} = props

    return (
        <div className={styles.checkbox}>
            <label>
                <input type='checkbox' {...otherProps} />
                <span className={styles.checkmark}/>
                <span className={styles.label}>{text}</span>
            </label>
        </div>
    );
}

export default FormCheckbox;
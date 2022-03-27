import React from 'react';
import styles from './styles.module.scss';

type PropsType = {
    type?: 'normal' | 'error',
    children?: React.ReactNode,
}

function Span(props: PropsType) {
    const type = props.type ?? 'normal'
    const className = type === 'normal' ? '' : styles.error;

    return (
        <span className={className}>{props.children}</span>
    );
}

export default Span;
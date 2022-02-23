import React from 'react';
import styles from './styles.module.scss';

type StackProps = {
    children: React.ReactNode,
    direction?: 'row' | 'column',
    justify?: 'flex-start' | 'center' | 'flex-end' |
        'space-around' | 'space-between' | 'space-evenly' | 'stretch',
    align?: 'start' | 'center' | 'end' | 'stretch',
    flex?: number,
    gap?: number | string,
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
}

function Stack(props: StackProps) {
    const className = `${styles.stack} ${props.className ?? ''}`
    return (
        <div className={className} style={{
            flexDirection: props.direction ?? 'column',
            justifyContent: props.justify,
            alignItems: props.align,
            flex: props.flex,
            gap: props.gap,
            ...props.style
        }} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Stack;

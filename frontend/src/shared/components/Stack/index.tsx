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
}

function Stack(props: StackProps) {
    const className = `${styles.stack} ${props.className ?? ''}`
    return (
        <div className={className} style={{
            flexDirection: props.direction ?? 'column',
            justifyContent: props.align,
            alignItems: props.align,
            flex: props.flex,
            gap: props.gap,
            ...props.style
        }}>
            {props.children}
        </div>
    );
}

export default Stack;

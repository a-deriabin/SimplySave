import React from 'react';
import styles from './styles.module.scss'

type ContainerProps = {
    children: React.ReactNode,
    verticalAlign?: 'start' | 'center' | 'end' | 'stretch',
    horizontalAlign?: 'start' | 'center' | 'end' | 'stretch',
    fullWidth?: boolean,
    flex?: number,
    style?: React.CSSProperties,
    className?: string,
    onClick?: (e: React.MouseEvent) => void,
}

function Container(props: ContainerProps) {
    const className = `${styles.container} ${props.className ?? ''}`

    return (
        <div className={className} style={{
            alignItems: props.verticalAlign ?? 'center',
            justifyContent: props.horizontalAlign ?? 'center',
            flex: props.flex ?? undefined,
            ...props.style
        }}
        onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default Container;
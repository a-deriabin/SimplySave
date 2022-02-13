import React from 'react';
import styles from './styles.module.scss';

type StackProps = {
    children: React.ReactNode,
    direction?: 'row' | 'column',
    fullWidth?: boolean,
    flex?: number,
    gap?: number | string,
    style?: React.CSSProperties,
}

function Stack(props: StackProps) {
    return (
        <div className={styles.stack} style={{
            flexDirection: props.direction ?? 'column',
            width: props.fullWidth ? '100%' : undefined,
            flex: props.flex ?? undefined,
            gap: props.gap ?? undefined,
            ...props.style
        }}>
            {props.children}
        </div>
    );
}

export default Stack;

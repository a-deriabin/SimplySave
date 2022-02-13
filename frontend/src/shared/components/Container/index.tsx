import React from 'react';

type ContainerProps = {
    children: React.ReactNode,
    verticalAlign?: 'start' | 'center' | 'end' | 'stretch',
    horizontalAlign?: 'start' | 'center' | 'end' | 'stretch',
    fullWidth?: boolean,
    flex?: number,
    style?: React.CSSProperties,
    className?: string,
}

function Container(props: ContainerProps) {
    return (
        <div className={props.className} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: props.verticalAlign ?? 'center',
            alignItems: props.horizontalAlign ?? 'center',
            width: props.fullWidth ? '100%' : undefined,
            flex: props.flex ?? undefined,
            ...props.style
        }}>
            {props.children}
        </div>
    );
}

export default Container;
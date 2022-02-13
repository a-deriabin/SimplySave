import React from 'react';

type BoxProps = {
    children: React.ReactNode,
    className?: string,
    styles?: React.CSSProperties,
}

function Box(props: BoxProps) {
    return (
        <div className={props.className} style={props.styles}>
            {props.children}
        </div>
    );
}

export default Box;
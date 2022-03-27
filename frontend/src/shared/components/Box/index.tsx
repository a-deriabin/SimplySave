import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

type BoxProps = {
    children: React.ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function Box(props: BoxProps) {
    const { children, ...otherProps } = props

    return (
        <div {...otherProps}>
            {children}
        </div>
    );
}

export default Box;
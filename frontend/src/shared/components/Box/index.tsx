import React, {DetailedHTMLProps, ForwardedRef, HTMLAttributes} from 'react';

type BoxProps = {
    children: React.ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Box = React.forwardRef((props: BoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, ...otherProps } = props

    return (
        <div ref={ref} {...otherProps}>
            {children}
        </div>
    );
})

export default Box;
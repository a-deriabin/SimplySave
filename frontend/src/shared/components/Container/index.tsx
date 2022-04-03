import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from './styles.module.scss'

type ContainerProps = {
    verticalAlign?: 'start' | 'center' | 'end' | 'stretch',
    horizontalAlign?: 'start' | 'center' | 'end' | 'stretch',
    fullWidth?: boolean,
    flex?: number,
    style?: React.CSSProperties,
    className?: string,
    onClick?: (e: React.MouseEvent) => void,
    onContextMenu?: (e: React.MouseEvent) => void,
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function Container(props: ContainerProps) {
    const {
        verticalAlign,
        horizontalAlign,
        fullWidth,
        flex,
        style,
        className,
        ...otherProps
    } = props

    const fullClassName = `${styles.container} ${className ?? ''}`

    return (
        <div
            className={fullClassName}
            style={{
                alignItems: verticalAlign ?? 'center',
                justifyContent: horizontalAlign ?? 'center',
                flex: flex ?? undefined,
                ...style
            }}
            {...otherProps}
        />
    );
}

export default Container;
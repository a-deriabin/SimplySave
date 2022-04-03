import React from 'react';
import styles from "./styles.module.scss";
import {PositionType} from "./index";

export type InnerContextProps = {
    onClose: () => void,
    position: PositionType,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
    screenSizes: { width: number, height: number },
}

function ContextMenuInner(props: InnerContextProps) {
    const { x, y } = props.position
    const screenSizes = props.screenSizes

    const handleMenuEvent = (event: React.MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()
        return false
    }
    const handleBackgroundClick = (event: React.MouseEvent) => {
        props.onClose && props.onClose()
        event.preventDefault()
    }

    const innerClass = props.className ? `${styles.contextMenuInner} ${props.className}`
        : styles.contextMenuInner

    const style = {...props.style}

    if (x < screenSizes.width / 2)
        style.left = x
    else
        style.right = screenSizes.width - x

    if (y < screenSizes.height / 2)
        style.top = y
    else
        style.bottom = screenSizes.height - y

    return (
        <div
            className={styles.contextMenuOuter}
            onClick={handleBackgroundClick}
            onContextMenu={handleBackgroundClick}
            onMouseDown={handleMenuEvent}
            onMouseUp={handleMenuEvent}
            onMouseMove={handleMenuEvent}
        >
            <div
                className={innerClass}
                onClick={handleMenuEvent}
                onContextMenu={handleMenuEvent}
                style={style}
            >
                {props.children}
            </div>
        </div>
    );
}

export default ContextMenuInner;

import React from 'react';
import styles from "./styles.module.scss";
import Container from "../Container";

export type PositionType = {
    x: number,
    y: number,
}
export type InnerContextProps = {
    onClose: () => void,
    position: PositionType,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
}

function ContextMenuInner(props: InnerContextProps) {
    const handleMenuEvent = (event: React.MouseEvent) => {
        event.stopPropagation()
        return false
    }
    const handleBackgroundClick = () => {
        props.onClose && props.onClose()
    }

    const innerClass = props.className ? `${styles.contextMenuInner} ${props.className}`
        : styles.contextMenuInner

    const style = {...props.style, top: props.position.y, left: props.position.x}

    return (
        <div
            className={styles.contextMenuOuter}
            onClick={handleBackgroundClick}
            onMouseDown={handleMenuEvent}
            onMouseUp={handleMenuEvent}
            onMouseMove={handleMenuEvent}
        >
            <div
                className={innerClass}
                onClick={handleMenuEvent}
                style={style}
            >
                {props.children}
            </div>
        </div>
    );
}

export default ContextMenuInner;

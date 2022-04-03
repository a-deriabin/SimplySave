import React, {useRef} from 'react';
import ReactDOM from "react-dom";
import ContextMenuInner, {InnerContextProps} from "./ContextMenuInner";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export type PositionType = {
    x: number,
    y: number,
}
type ContextMenuProps = {
    isOpen: boolean,
    position: PositionType,
    onClose: () => void,

    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode,
}

function ensureContainerDestroyed(node: HTMLElement | null) {
    if (node && node.parentElement) {
        node.parentElement.removeChild(node)
    }
}

function ensureContainerExists(node: HTMLElement | null): HTMLElement {
    if (node && node.parentElement)
        return node
    if (node) {
        ensureContainerDestroyed(node)
    }
    const newNode = document.createElement('div')
    document.body.appendChild(newNode)
    return newNode
}

function ContextMenu(props: ContextMenuProps) {
    const containerRef = useRef<HTMLElement|null>(null)
    const screenSizes = useWindowDimensions()

    if (!props.isOpen) {
        ensureContainerDestroyed(containerRef.current)
        containerRef.current = null
        return null
    }

    containerRef.current = ensureContainerExists(containerRef.current)
    const innerProps: InnerContextProps = {
        onClose: props.onClose,
        position: props.position,
        className: props.className,
        style: props.style,
        children: props.children,
        screenSizes: screenSizes,
    }

    return ReactDOM.createPortal(
        ContextMenuInner(innerProps),
        containerRef.current
    )
}

export default ContextMenu;

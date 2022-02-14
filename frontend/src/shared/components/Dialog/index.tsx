import React, {useRef} from 'react';
import ReactDOM from "react-dom";
import DialogInner from "./DialogInner";
import styles from './styles.module.css'

export type DialogProps = {
    isVisible: boolean,
    onClose?: () => void,
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

function Dialog(props: DialogProps) {
    const containerRef = useRef<HTMLElement|null>(null)

    if (!props.isVisible) {
        ensureContainerDestroyed(containerRef.current)
        containerRef.current = null
        return null
    }

    containerRef.current = ensureContainerExists(containerRef.current)

    return ReactDOM.createPortal(
        DialogInner(props),
        containerRef.current
    )
}

export default Dialog
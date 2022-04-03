import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from "react-dom";
import ContextMenuInner, {InnerContextProps, PositionType} from "./ContextMenuInner";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type ContextMenuProps = {
    targetRef: React.MutableRefObject<HTMLElement|null>,
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
    const [isVisible, setIsVisible] = useState(false)
    const [position, setPosition] = useState<PositionType>({x: 0, y: 0})
    const containerRef = useRef<HTMLElement|null>(null)
    const screenSizes = useWindowDimensions()

    useEffect(() => {
        if (props.targetRef.current === null)
            return
        const listener = (ev: MouseEvent) => {
            setIsVisible(true)
            ev.preventDefault()
            setPosition({
                x: ev.clientX,
                y: ev.clientY
            })
        }
        props.targetRef.current.addEventListener('contextmenu', listener)

        return () => {
            props.targetRef.current?.removeEventListener('contextmenu', listener)
        }
    })

    if (!isVisible) {
        ensureContainerDestroyed(containerRef.current)
        containerRef.current = null
        return null
    }

    containerRef.current = ensureContainerExists(containerRef.current)
    const innerProps: InnerContextProps = {
        onClose: () => {
            setIsVisible(false)
        },
        position: position,
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

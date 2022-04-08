import {useEffect, useState} from "react";

export type HoldKeyType = 'none' | 'ctrl' | 'alt'
export type KeyPressHandlerType = (e: KeyboardEvent, isDown: boolean) => void

function isKeyHeld(e: KeyboardEvent, hold?: HoldKeyType) {
    if (hold === 'ctrl' && !e.ctrlKey)
        return false
    if (hold === 'alt' && !e.altKey)
        return false
    if ((hold === 'none' || !hold) && (e.altKey || e.ctrlKey))
        return false
    return true
}

export function useKeyPress(targetKey: string, hold?: HoldKeyType, handler?: KeyPressHandlerType) {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    useEffect(() => {
        const downHandler = (e: KeyboardEvent) => {
            if (e.key === targetKey && !e.repeat && isKeyHeld(e, hold)) {
                setKeyPressed(true);
                handler && handler(e, true)
            }
        }

        window.addEventListener("keydown", downHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, [handler, hold, targetKey]);

    useEffect(() => {
        if (keyPressed)
            setKeyPressed(false)
    }, [keyPressed])

    return keyPressed;
}

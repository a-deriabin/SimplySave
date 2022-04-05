import React, {useState} from 'react';
import {IoShuffle} from "react-icons/io5";
import styles from './styles.module.scss';
import SortContextMenu from "./SortContextMenu";
import {PositionType} from "../../shared/components/ContextMenu";

type PropsType = {}

function SortBtn(props: PropsType) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menuPostion, setMenuPosition] = useState<PositionType>({x: 0, y: 0})

    const handleMenuOpen = (e: React.MouseEvent) => {
        setMenuPosition({
            x: e.clientX,
            y: e.clientY
        })
        setIsMenuOpen(true)
    }
    const handleMenuClose = () => setIsMenuOpen(false)

    return (
        <>
            <IoShuffle className={styles.sortIcon} onClick={handleMenuOpen} />
            <SortContextMenu
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                position={menuPostion}
            />
        </>
    );
}

export default SortBtn;
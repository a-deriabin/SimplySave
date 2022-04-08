import React, {useEffect, useState} from 'react';
import FolderBox, {DivMouseEvent} from "./FolderBox";
import Container from "../../shared/components/Container";
import Stack from "../../shared/components/Stack";
import {useDispatch, useSelector} from "react-redux";
import {notesSelector, selectFolder} from "../../shared/redux/notes/notesSlice";
import SelectableFolder from "./SelectableFolder";
import {swapFolders} from "../../shared/redux/notes/foldersSwap";
import styles from './styles.module.scss';
import FolderContextMenu from "./FolderContextMenu";
import {PositionType} from "../../shared/components/ContextMenu";
import {useKeyPress} from "../../shared/hooks/useKeyPress";

function FolderList() {
    const dispatch = useDispatch()
    const notesData = useSelector(notesSelector)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menuPostion, setMenuPosition] = useState<PositionType>({x: 0, y: 0})
    const [menuForId, setMenuForId] = useState<string|null>(null)

    const isArrowDown = useKeyPress('ArrowDown', 'ctrl')
    useEffect(() => {
        if (isArrowDown) {
            const folders = notesData.foldersList
            const curId = notesData.openFolderId
            const curIndex = folders.findIndex(x => x.id === curId)
            const nextIndex = curIndex + 1 >= folders.length ? -1 : curIndex + 1
            const nextId = nextIndex === -1 ? null : folders[nextIndex].id
            dispatch(selectFolder(nextId))
        }
    }, [isArrowDown, dispatch, notesData.foldersList, notesData.openFolderId])

    const isArrowUp = useKeyPress('ArrowUp', 'ctrl')
    useEffect(() => {
        if (isArrowUp) {
            const folders = notesData.foldersList
            const curId = notesData.openFolderId
            const curIndex = folders.findIndex(x => x.id === curId)
            const nextIndex = curIndex - 1 < -1 ? folders.length - 1 : curIndex - 1
            const nextId = nextIndex === -1 ? null : folders[nextIndex].id
            dispatch(selectFolder(nextId))
        }
    }, [isArrowUp, dispatch, notesData.foldersList, notesData.openFolderId])

    const handleMenuClose = () => setIsMenuOpen(false)
    const handleContextMenuOpen = (id: string) => (e: React.MouseEvent) => {
        setMenuPosition({
            x: e.clientX,
            y: e.clientY
        })
        setIsMenuOpen(true)
        setMenuForId(id)
        e.preventDefault()
    }

    const handleHomeClick = () => {
        dispatch(selectFolder(null))
    }
    const handleMouseEvent = (title: string, initEvent: DivMouseEvent) => {
        let index = notesData.foldersList.findIndex(x => x.title === title)
        let initialPos = initEvent.clientY
        const target = initEvent.currentTarget
        const parent = target.parentElement
        if (parent === null || parent?.children === null)
            return
        let indexInParent = [...parent.children].findIndex(x => x === target)
        target.style.zIndex = '100'

        const onMove = (e: MouseEvent) => {
            if (e.clientY < initialPos && index === 0)
                return
            if (e.clientY > initialPos && index === notesData.foldersList.length - 1)
                return

            const delta = e.clientY - initialPos
            target.style.transform = `translateY(${delta}px)`

            if (delta > 0) {
                const nextEl = parent.children[indexInParent + 1]
                const bounds = nextEl.getBoundingClientRect()

                if (e.clientY > bounds.y + bounds.height / 2) {
                    dispatch(swapFolders([index, index + 1]))
                    index += 1
                    indexInParent += 1
                    initialPos += bounds.height
                    target.style.transform = `translateY(0px)`
                }
            }
            else if (delta < 0) {
                const prevEl = parent.children[indexInParent - 1]
                const bounds = prevEl.getBoundingClientRect()

                if (e.clientY < bounds.y + bounds.height / 2) {
                    dispatch(swapFolders([index, index - 1]))
                    index -= 1
                    indexInParent -= 1
                    initialPos -= bounds.height
                    target.style.transform = `translateY(0px)`
                }
            }
        }
        const onUp = (e: MouseEvent) => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseup', onUp)
            target.style.transform = `translateY(0px)`
            target.style.zIndex = 'auto'
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onUp)
    }

    return (
        <Container flex={1} style={{ overflowY: 'auto' }}>
            <FolderContextMenu
                targetFolderId={menuForId}
                isOpen={isMenuOpen}
                onClose={handleMenuClose}
                position={menuPostion}
            />
            <Stack direction='column' className={styles.folderListInner}>
                <FolderBox
                    icon='home'
                    title='All'
                    isSelected={notesData.openFolderId === null}
                    onClick={handleHomeClick}
                />
                {notesData.foldersList.map(folder => (
                    <SelectableFolder
                        data={folder}
                        isSelected={folder.id === notesData.openFolderId}
                        onMouseDown={handleMouseEvent}
                        onContextMenu={handleContextMenuOpen(folder.id)}
                        key={folder.id}
                    />
                ))}
            </Stack>
        </Container>
    );
}

export default FolderList;
import React from 'react';
import {
    IoAddCircleOutline, IoAddCircleSharp,
    IoSettingsOutline, IoSettingsSharp,
    IoCheckmark, IoCheckmarkSharp,
    IoCloudyOutline, IoCloudySharp,
    IoCode, IoCodeSharp,
    IoCubeOutline, IoCubeSharp,
    IoHomeOutline, IoHomeSharp,
    IoStarOutline, IoStarSharp,
} from 'react-icons/io5'
import styles from '../../../NotesListView/SidePanel/styles.module.scss'
import {IconType} from "react-icons";

export type FolderIconNameType = 'add' | 'settings' | 'check' | 'cloud' |
    'code' | 'cube' | 'home' | 'star' | string
export const UserFolderIcons = [
    { id: 'check', title: 'Checkmark' },
    { id: 'cloud', title: 'Cloud' },
    { id: 'code', title: 'Code' },
    { id: 'cube', title: 'Cube' },
    { id: 'star', title: 'Star' }
]

type FolderIconProps = {
    name: FolderIconNameType,
    isSelected?: boolean,
}

function getIcon(props: FolderIconProps): IconType {
    const isSel = props.isSelected

    switch (props.name) {
        case 'add':
            return isSel ? IoAddCircleSharp : IoAddCircleOutline
        case 'settings':
            return isSel ? IoSettingsSharp : IoSettingsOutline
        case 'check':
            return isSel ? IoCheckmarkSharp : IoCheckmark
        case 'cloud':
            return isSel ? IoCloudySharp : IoCloudyOutline
        case 'code':
            return isSel ? IoCodeSharp : IoCode
        case 'cube':
            return isSel ? IoCubeSharp : IoCubeOutline
        case 'home':
            return isSel ? IoHomeSharp : IoHomeOutline
        case 'star':
            return isSel ? IoStarSharp : IoStarOutline
        default:
            throw new Error(`Unknown icon ${props.name}`)
    }
}

function FolderIcon(props: FolderIconProps) {
    const Icon = getIcon(props)
    return <Icon className={styles.folderIcon}/>
}

export default FolderIcon;
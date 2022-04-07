import React from 'react';
import {
    IoAddCircleOutline,
    IoAddCircleSharp,
    IoSettingsOutline,
    IoSettingsSharp,
    IoCheckmark,
    IoCheckmarkSharp,
    IoCloudyOutline,
    IoCloudySharp,
    IoCode,
    IoCodeSharp,
    IoCubeOutline,
    IoCubeSharp,
    IoHomeOutline,
    IoHomeSharp,
    IoStarOutline,
    IoStarSharp,
    IoAirplaneSharp,
    IoAirplaneOutline,
    IoBarbellSharp,
    IoBarbellOutline,
    IoBriefcaseSharp,
    IoBriefcaseOutline,
    IoFishSharp,
    IoFishOutline,
    IoRocketOutline,
    IoRocketSharp,
    IoDocumentSharp,
    IoDocumentOutline,
    IoBasketballSharp, IoBasketballOutline,
} from 'react-icons/io5'
import styles from '../../../NotesListView/SidePanel/styles.module.scss'
import {IconType} from "react-icons";

export type FolderIconNameType = 'add' | 'airplane' | 'ball' | 'case'  |
    'check' | 'cloud' | 'code' | 'cube' | 'document' | 'fish' | 'home' |
    'rocket' | 'star' | 'settings' | string
export const UserFolderIcons = [
    { id: 'airplane', title: 'Airplane' },
    { id: 'ball', title: 'Ball' },
    { id: 'case', title: 'Case' },
    { id: 'check', title: 'Checkmark' },
    { id: 'cloud', title: 'Cloud' },
    { id: 'code', title: 'Code' },
    { id: 'cube', title: 'Cube' },
    { id: 'document', title: 'Document' },
    { id: 'fish', title: 'Fish' },
    { id: 'rocket', title: 'Rocket' },
    { id: 'star', title: 'Star' },
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
        case 'airplane':
            return isSel ? IoAirplaneSharp : IoAirplaneOutline
        case 'ball':
            return isSel ? IoBasketballSharp : IoBasketballOutline
        case 'settings':
            return isSel ? IoSettingsSharp : IoSettingsOutline
        case 'case':
            return isSel ? IoBriefcaseSharp : IoBriefcaseOutline
        case 'check':
            return isSel ? IoCheckmarkSharp : IoCheckmark
        case 'cloud':
            return isSel ? IoCloudySharp : IoCloudyOutline
        case 'code':
            return isSel ? IoCodeSharp : IoCode
        case 'cube':
            return isSel ? IoCubeSharp : IoCubeOutline
        case 'document':
            return isSel ? IoDocumentSharp : IoDocumentOutline
        case 'fish':
            return isSel ? IoFishSharp : IoFishOutline
        case 'home':
            return isSel ? IoHomeSharp : IoHomeOutline
        case 'rocket':
            return isSel ? IoRocketSharp : IoRocketOutline
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
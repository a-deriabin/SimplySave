import React from 'react';
import {
    IoSettingsOutline,
    IoCheckmarkSharp,
    IoCloudyOutline,
    IoCode,
    IoCubeOutline,
    IoHomeOutline, IoStarOutline
} from 'react-icons/io5'
import styles from './styles.module.scss'

export type FolderIconNameType = 'settings' | 'check' | 'cloud' |
    'code' | 'cube' | 'home' | 'star' | string

type FolderIconProps = {
    name: FolderIconNameType
}

function FolderIcon(props: FolderIconProps) {
    const className = styles.folderIcon

    switch (props.name) {
        case 'settings':
            return <IoSettingsOutline className={className}/>
        case 'check':
            return <IoCheckmarkSharp className={className}/>
        case 'cloud':
            return <IoCloudyOutline className={className}/>
        case 'code':
            return <IoCode className={className}/>
        case 'cube':
            return <IoCubeOutline className={className}/>
        case 'home':
            return <IoHomeOutline className={className}/>
        case 'star':
            return <IoStarOutline className={className}/>
        default:
            throw new Error(`Unknown icon ${props.name}`)
    }
}

export default FolderIcon;
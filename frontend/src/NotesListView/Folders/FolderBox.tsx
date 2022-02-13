import React from 'react';
import FolderIcon, {FolderIconNameType} from "./FolderIcon";
import Stack from "../../shared/components/Stack";

type FolderBoxProps = {
    icon: FolderIconNameType,
    title: string,
}

function FolderBox(props: FolderBoxProps) {
    return (
        <Stack direction='column' align='center'>
            <FolderIcon name={props.icon}/>
            <div>
                {props.title}
            </div>
        </Stack>
    );
}

export default FolderBox;
import React from 'react';
import ContextMenu from "../../../shared/components/ContextMenu";
import HorizontalButton from "../../../shared/components/HorizontalButton";

type PropsType = {
    targetRef: React.MutableRefObject<HTMLElement|null>,
}

function FolderContextMenu(props: PropsType) {
    return (
        <ContextMenu targetRef={props.targetRef}>
            <HorizontalButton>Rename</HorizontalButton>
            <HorizontalButton>Move</HorizontalButton>
            <HorizontalButton>Delete</HorizontalButton>
        </ContextMenu>
    );
}

export default FolderContextMenu;
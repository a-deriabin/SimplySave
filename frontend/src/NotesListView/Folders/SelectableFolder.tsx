import React from 'react';
import {FolderType} from "../../shared/redux/notes/notesSlice.types";
import FolderBox from "./FolderBox";
import {useDispatch} from "react-redux";
import {selectFolder} from "../../shared/redux/notes/notesSlice";

type SelectableFolderType = {
    data: FolderType,
    isSelected: boolean,
}

function SelectableFolder(props: SelectableFolderType) {
    const dispatch = useDispatch()

    const handleSelect = () => {
        dispatch(selectFolder(props.data.id))
    }

    return (
        <FolderBox
            icon={props.data.icon}
            title={props.data.title}
            isSelected={props.isSelected}
            onClick={handleSelect}
        />
    );
}

export default SelectableFolder;
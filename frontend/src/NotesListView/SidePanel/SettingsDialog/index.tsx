import React, {useEffect, useState} from 'react';
import Dialog from "../../../shared/components/Dialog";
import {useDispatch, useSelector} from "react-redux";
import {configSelector} from "../../../shared/redux/config/configSlice";
import HorizontalButton from "../../../shared/components/HorizontalButton";
import {setConfigDataDir} from "../../../shared/redux/config/configSetDataDir";
import {resetState} from "../../../shared/redux/notes/notesSlice";

type PropsType = {
    isVisible: boolean,
    onClose: () => void,
}

function SettingsDialog(props: PropsType) {
    const initialDir = useSelector(configSelector).dataDirPath
    const dispatch = useDispatch()

    const [dataDir, setDataDir] = useState<string>('')

    const handleDataDirChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataDir(e.target.value)
    }
    const openFolderDialog = async () => {
        // @ts-ignore
        const newPath: string|null = await window._simplysave_folder_dialog()
        if (newPath !== null)
            setDataDir(newPath)
    }
    const handleSave = () => {
        dispatch(setConfigDataDir(dataDir))
        dispatch(resetState())
        props.onClose()
    }

    useEffect(() => {
        setDataDir(initialDir)
    }, [props.isVisible, initialDir])

    return (
        <Dialog isVisible={props.isVisible} onClose={props.onClose}>
            <div style={{ marginBottom: '10px' }}>
                <h2>Settings</h2>
            </div>
            <div>Data files path:</div>
            <div style={{ marginBottom: '10px' }}>
                <input type='text' value={dataDir} onChange={handleDataDirChange} />
                <button style={{ marginLeft: '5px' }} onClick={openFolderDialog}>
                    ...
                </button>
            </div>
            <HorizontalButton onClick={handleSave}>
                Save
            </HorizontalButton>
        </Dialog>
    );
}

export default SettingsDialog;
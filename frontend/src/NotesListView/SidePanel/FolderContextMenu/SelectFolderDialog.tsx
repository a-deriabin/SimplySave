import React from 'react';
import Stack from "../../../shared/components/Stack";
import FolderIcon, {UserFolderIcons} from "../../../shared/components/FolderIcon";
import HorizontalButton from "../../../shared/components/HorizontalButton";
import Container from "../../../shared/components/Container";
import {useDispatch} from "react-redux";
import {changeFolderIcon} from "../../../shared/redux/notes/folderChangeIcon";
import styles from "../../../shared/components/MessageDialog/styles.module.scss";
import Dialog from "../../../shared/components/Dialog";

type PropsType = {
    folderId: string,
    isVisible: boolean,
    onClose: () => void,
}

function SelectFolderDialog(props: PropsType) {
    const dispatch = useDispatch()
    const handleSelect = (icon: string) => () => {
        dispatch(changeFolderIcon([props.folderId, icon]))
        props.onClose()
    }

    return (
        <Dialog isVisible={props.isVisible} onClose={props.onClose} className={styles.dialog}>
            <Stack direction='column'>
                <h2>Change folder icon</h2>
                {UserFolderIcons.map(icon => (
                    <HorizontalButton key={icon.id} onClick={handleSelect(icon.id)}>
                        <Stack direction='row' justify='space-between' align='center'>
                            <FolderIcon name={icon.id} />
                            <Container horizontalAlign='start' style={{marginLeft: '15px'}}>
                                {icon.title}
                            </Container>
                        </Stack>
                    </HorizontalButton>
                ))}
            </Stack>
        </Dialog>
    );
}

export default SelectFolderDialog;
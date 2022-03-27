import React from 'react';
import {useSelector} from "react-redux";
import {notesIsEditingSelector} from "../../shared/redux/notes/notesSlice";
import styles from './styles.module.scss';

type PropsType = {}

function EditingShadow(props: PropsType) {
    const isEditing = useSelector(notesIsEditingSelector)

    return !isEditing ? null : (
        <div className={styles.editingShadow} />
    );
}

export default EditingShadow;
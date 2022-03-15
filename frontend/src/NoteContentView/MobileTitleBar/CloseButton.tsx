import React from 'react';
import styles from './styles.module.scss';
import {IoCloseOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {selectNote} from "../../shared/redux/notes/notesSlice";

type PropsType = {}

function CloseButton(props: PropsType) {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(selectNote(null))
    }

    return (
        <div className={styles.mobileCloseButton}>
            <IoCloseOutline onClick={handleClick} />
        </div>
    );
}

export default CloseButton;
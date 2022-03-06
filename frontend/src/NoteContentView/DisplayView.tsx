import React from 'react';
import styles from "./styles.module.scss";

type PropsType = {
    content: string,
}

function DisplayView(props: PropsType) {
    return (
        <div className={styles.contentView}>{props.content}</div>
    );
}

export default DisplayView;
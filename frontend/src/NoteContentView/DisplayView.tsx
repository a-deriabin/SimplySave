import React from 'react';
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PropsType = {
    content: string,
}

function DisplayView(props: PropsType) {
    return (
        <div className={styles.contentView}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {props.content.replaceAll('\n', '\n\n')}
            </ReactMarkdown>
        </div>
    );
}

export default DisplayView;
import React from 'react';
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

type PropsType = {
    content: string,
}

function DisplayView(props: PropsType) {
    return (
        <div className={styles.displayView}>
            <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
                {props.content.replace(/\n/gi, '\n &nbsp;')}
            </ReactMarkdown>
        </div>
    );
}

export default DisplayView;
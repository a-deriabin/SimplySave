import React from 'react';
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

type PropsType = {
    content: string,
}

function DisplayView(props: PropsType) {
    const newContent = props.content.replace(
        /\n/gi, '\n &nbsp;\n'
    )

    return (
        <div className={styles.displayView}>
            <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
                {newContent}
            </ReactMarkdown>
        </div>
    );
}

export default DisplayView;
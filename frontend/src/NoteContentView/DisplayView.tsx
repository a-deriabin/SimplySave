import React from 'react';
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

type PropsType = {
    content: string,
}

const newlineReplaceFn = (substring: string) => {
    return substring.split('').join('&nbsp;')
}
const specialBlockReplaceFn = (substring: string) => {
    return substring + '\n'
}
const preReplaceFn = (substring: string) => {
    return '\n' + substring
}
const dashReplaceFn = (substring: string) => {
    return substring.replace('\n&nbsp;\n', '\n&nbsp;\n\n')
}

function DisplayView(props: PropsType) {
    const newContent = props.content.replace(
        /\n(\n)+/gi, newlineReplaceFn
    ).replace(
        /(#|>|\\* |-).*?\n/gi, specialBlockReplaceFn
    ).replace(
        /\n```*?```/gi, preReplaceFn
    ).replace(
        /\n&nbsp;\n---/gi, dashReplaceFn
    )

    console.log(newContent)

    return (
        <div className={styles.displayView}>
            <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
                {newContent}
            </ReactMarkdown>
        </div>
    );
}

export default DisplayView;
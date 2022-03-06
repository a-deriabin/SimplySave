import React, {useEffect, useRef} from 'react';
import styles from "./styles.module.scss";

type PropsType = {
    content: string,
    onChange: (newContent: string) => void,
}

function EditView(props: PropsType) {
    const viewRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        viewRef.current && viewRef.current.focus()
    }, [])

    return (
        <div ref={viewRef} className={styles.editContentView} contentEditable>
            {props.content}
        </div>
    );
}

export default EditView;
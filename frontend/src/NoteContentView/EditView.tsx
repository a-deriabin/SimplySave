import React, {useEffect, useRef} from 'react';
import styles from "./styles.module.scss";

type PropsType = {
    content: string,
    onChange: (newContent: string) => void,
}

function EditView(props: PropsType) {
    const viewRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        viewRef.current && viewRef.current.focus()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.target.value)
    }

    return (
        <textarea
            ref={viewRef}
            className={styles.editContentView}
            value={props.content}
            onChange={handleChange}
        />
    );
}

export default EditView;
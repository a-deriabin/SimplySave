import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'

type NoteEntryPropsType = {
    id: string,
    title: string
}

function NoteEntry(props: NoteEntryPropsType) {
    const isSelected = props.id === '1'

    return (
        <Container
            horizontalAlign='start'
            verticalAlign='start'
            fullWidth className={styles.noteEntry}
            style={{
                backgroundColor: isSelected ? 'var(--color-primary)' : undefined
            }}
        >
            {props.title}
        </Container>
    );
}

export default NoteEntry;
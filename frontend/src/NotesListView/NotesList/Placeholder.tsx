import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss';


function Placeholder() {
    return (
        <Container className={styles.placeholder} verticalAlign='center' horizontalAlign='center'>
            Nothing there.
        </Container>
    );
}

export default Placeholder;
import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'

function SearchBar() {
    return (
        <Container fullWidth className={styles.container}>
            <input
                className={styles.searchBar}
                type='text'
                placeholder='Search...'
            />
        </Container>
    );
}

export default SearchBar;
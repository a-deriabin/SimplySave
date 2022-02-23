import React from 'react';
import Container from "../../shared/components/Container";
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {notesSearchStrSelector, setSearchStr} from "../../shared/redux/notes/notesSlice";

function SearchBar() {
    const dispatch = useDispatch()
    const searchStr = useSelector(notesSearchStrSelector)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchStr(e.target.value))
    }

    return (
        <Container fullWidth className={styles.container}>
            <input
                className={styles.searchBar}
                type='search'
                name='search'
                placeholder='Search...'
                autoComplete='off'
                value={searchStr}
                onChange={handleChange}
            />
        </Container>
    );
}

export default SearchBar;
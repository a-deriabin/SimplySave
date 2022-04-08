import React, {useEffect} from 'react';
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import '@fontsource/open-sans';
import './Styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {notesLoadStateSelector} from "../shared/redux/notes/notesSlice";
import {loadNotes} from "../shared/redux/notes/notesLoad";
import useWindowDimensions from "../shared/hooks/useWindowDimensions";
import {loadConfig} from "../shared/redux/config/configLoad";

function App() {
    const notesLoadState = useSelector(notesLoadStateSelector)
    const dispatch = useDispatch()
    const dimensions = useWindowDimensions()
    const isMobile = dimensions.width < 600

    //TODO: uncomment to disable right-click
    // useEffect(() => {
    //     document.addEventListener('contextmenu', event => event.preventDefault());
    // }, [])

    useEffect(() => {
        if (notesLoadState === 'idle') {
            dispatch(loadNotes())
            dispatch(loadConfig())
        }
    }, [dispatch, notesLoadState])

    return (
        <div>
            { isMobile ? <MobileView /> : <DesktopView /> }
        </div>
    );
}

export default App;

import React, {useEffect} from 'react';
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import '@fontsource/open-sans';
import './Styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {notesLoadStateSelector} from "../shared/redux/notes/notesSlice";
import {loadNotes} from "../shared/redux/notes/notesLoad";
import useWindowDimensions from "../shared/hooks/useWindowDimensions";

function App() {
    const notesLoadState = useSelector(notesLoadStateSelector)
    const dispatch = useDispatch()
    const dimensions = useWindowDimensions()
    const isMobile = dimensions.width < 600

    useEffect(() => {
        if (notesLoadState === 'idle') {
            dispatch(loadNotes())
        }
    }, [dispatch, notesLoadState])

    return (
        <div>
            { isMobile ? <MobileView /> : <DesktopView /> }
        </div>
    );
}

export default App;

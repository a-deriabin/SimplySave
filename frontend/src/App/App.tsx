import React from 'react';
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import './Styles.scss';

function App() {
    const isMobile = false; //TODO

    return (
        <div>
            { isMobile ? <MobileView /> : <DesktopView /> }
        </div>
    );
}

export default App;

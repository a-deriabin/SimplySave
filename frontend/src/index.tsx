import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import '@csstools/normalize.css';
import {Provider} from "react-redux";
import store from './shared/redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

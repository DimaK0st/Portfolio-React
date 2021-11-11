import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import store from "../src/storeRedux/store";
import persistor from "../src/storeRedux/store";


ReactDOM.render(
    <div className={"root"}>
        <Provider store={store}>
            <App/>
            <PersistGate persistor={persistor}>

            </PersistGate>
        </Provider>
    </div>,
    document.getElementById('root')
);


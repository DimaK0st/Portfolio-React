import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {persistStore, autoRehydrate, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react';
import {createStore} from "redux";
import rootReducer from '../src/storeRedux/store'
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


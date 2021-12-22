import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import clickerReducer from "./clickerReducer";
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from 'redux-persist/lib/storage'
import loginReducer from "./loginReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
    loginRepos: loginReducer,
    clickerRepos: clickerReducer,
    chatRepos: chatReducer

})


const storageConfig={
    key:'root',
    storage:AsyncStorage, // define store mechanism
    whitelist: ['loginRepos','clickerRepos','chatRepos']
}
// put rootReducer into persist
const myPersistReducer=persistReducer(storageConfig,rootReducer);

const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)))


// persist the store
export const persistor =persistStore(store);
export default store

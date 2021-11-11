import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from "./reducer";
import {persistStore, autoRehydrate, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    repos: reducer,

})


const storageConfig={
    key:'root',
    storage, // define store mechanism
}
// put rootReducer into persist
const myPersistReducer=persistReducer(storageConfig,rootReducer);

const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk)))

// persist the store
export const persistor =persistStore(store);
export default store

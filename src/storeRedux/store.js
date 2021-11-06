import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from "./reducer";

const rootReducer = combineReducers({
    repos: reducer,

})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store

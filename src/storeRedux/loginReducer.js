import {INNIT_FIREBASE, LOGOUT, SET_USER} from "./actionType";

let defaultState = {
    firebase: null,
    auth: null,
    fireStore: null,
    user: null,
}




export default function loginReducer(state = defaultState, action) {
    //console.log("stateLoginReducer",state)
    switch (action.type) {

        case INNIT_FIREBASE:
            return {
                ...state,
                // firebase: action.data.firebase,
                auth: action.data.auth,
                fireStore: action.data.fireStore,
                user: state.user
            };

        case SET_USER:
            console.log("11111111111111111111111111111")
            return {
                ...state,
                user: action.data
            };

        case LOGOUT:
            return {
                firebase: null,
                auth: null,
                fireStore: null,
                user: null,
            };



        default:
            return state;
    }
}

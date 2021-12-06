import {INNIT_FIREBASE} from "./actionType";


let defaultState = {
    firebase: null,
    auth: null,
    fireStore: null,
    user: null,
}




export default function chatReducer(state = defaultState, action) {
   // console.log("stateChatReducer",state)
    switch (action.type) {

        case INNIT_FIREBASE:
            return {
                ...state,
                firebase: action.data
            };



        default:
            return state;
    }
}

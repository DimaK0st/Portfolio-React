import {BUY_X2, DECREMENT_CURRENT_VALUE, INCREMENT_CURRENT_VALUE} from "./actionType";


const defaultState = {
    click: 1,
    value: 0,

}

export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case INCREMENT_CURRENT_VALUE:
            return {
                ...state,
                value: state.value + state.click
            };
        case DECREMENT_CURRENT_VALUE:
            return {
                ...state,
                value: state.value - state.click
            };


        case BUY_X2:
            if(state.value>=10)
            return {
                ...state,
                value: state.value - 10,
                click: state.click+1
            };


        default:
            return state;
    }
}


import {BUY_X2, CURRENT_VALUE, DECREMENT_CURRENT_VALUE, INCREMENT_CURRENT_VALUE} from "./actionType";

export function actionAddInfoUser(data){
    console.log(data)
    return{
        type:CURRENT_VALUE,
        data:data,
    }
}

export function incrementCurrentValue(){
    return{
        type:INCREMENT_CURRENT_VALUE,
    }
}

export function decrementCurrentValue(){
    return{
        type:DECREMENT_CURRENT_VALUE,
    }
}

export function buyX2(){
    return{
        type:BUY_X2,
    }
}

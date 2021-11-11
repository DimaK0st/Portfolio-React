import {
    CURRENT_VALUE,
    INCREMENT_CURRENT_VALUE,
    UPDATE_PER_CLICK,
    UPDATE_PER_SECONDS, UPDATE_PER_SECONDS_VALUE
} from "./actionType";

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

export function updatePerClick(){
    return{
        type:UPDATE_PER_CLICK,
    }
}

export function updatePerSeconds(id){
    return{
        type:UPDATE_PER_SECONDS,
        id: id,
    }
}
export function updatePerSecondsValue(){
    return{
        type:UPDATE_PER_SECONDS_VALUE
    }
}

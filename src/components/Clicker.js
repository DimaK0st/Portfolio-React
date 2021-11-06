import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {decrementCurrentValue, incrementCurrentValue, buyX2} from "../storeRedux/action";

function User(props) {
    const dispatch = useDispatch()


    const increment = useCallback(() => {
        dispatch(incrementCurrentValue())
    },[])

    const Decrement = useCallback(() => {
        dispatch(decrementCurrentValue())
    },[])

    const buyX2Effect = useCallback(() => {
        dispatch(buyX2())
    },[])


    console.log(props.data)
    return(
        <div>



            <span>{props.data.value}</span>
            <br/>

            <button onClick={()=>increment()}>Increment</button>
            <br/>
            <button onClick={()=>Decrement()}>Decrement</button>
            <br/>
            <button onClick={()=>{buyX2Effect()}}>X2</button>


        </div>

    )

}


export default User;

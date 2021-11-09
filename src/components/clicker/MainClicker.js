import React, {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    decrementCurrentValue,
    incrementCurrentValue,
    updatePerClick,
    updatePerSeconds,
    updatePerSecondsValue
} from "../../storeRedux/action";
import RowElementShopVideoCard from "./RowElementShopVideoCard";
import '../../styles/Clicker/main.css';

function User(props) {
    const dispatch = useDispatch()


    const increment = useCallback(() => {
        dispatch(incrementCurrentValue())
    },[])

    const Decrement = useCallback(() => {
        dispatch(decrementCurrentValue())
    },[])

    const updateClick = useCallback(() => {
        dispatch(updatePerClick())
    },[])

    const updateSeconds = useCallback((id) => {
        dispatch(updatePerSeconds(id))
    },[])



    const updateSecondsValue = useCallback(() => {
        dispatch(updatePerSecondsValue())
    },[])


    useEffect(
        () => {
            const timer = window.setInterval(() => {updateSecondsValue()}, 100);
        },
        []
    )




    console.log(props.data)
    return(
        <div className={"mainClicker"}>



            <span>{props.data.value.toFixed(1)}</span>
            <br/>
            <br/>
            <span>За клик: {props.data.click.toFixed(1)}</span>
            <br/>
            <span>В секунду: {props.data.perSecond.toFixed(1)}</span>
            <br/>

            <button onClick={()=>increment()}>Increment</button>
            <br/>
            <br/>
            <br/>
            <button onClick={()=>updateClick()}>Взять напарника (+1 клик): {props.data.costUpdateClick.toFixed(1)}</button>
            <br/>

            {props.data.videoCardsList.map((videoCard)=>{
                return <RowElementShopVideoCard updateSeconds={updateSeconds} videoCard={videoCard}/>
            })}

        </div>

    )

}


export default User;

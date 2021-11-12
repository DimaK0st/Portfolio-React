import React, {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    incrementCurrentValue,
    updatePerClick,
    updatePerSeconds,
    updatePerSecondsValue
} from "../../storeRedux/action";
import RowElementShopVideoCard from "./RowElementShopVideoCard";
import '../../styles/Clicker/main.css';
import RowElementShopBuyClick from "./RowElementShopBuyClick";

let clicked = true

function MainClicker(props) {
    const dispatch = useDispatch()

    const increment = useCallback(() => {
            dispatch(incrementCurrentValue())
    }, [dispatch])

    const updateClick = useCallback(() => {
        dispatch(updatePerClick())
    }, [dispatch])

    const updateSeconds = useCallback((id) => {
        dispatch(updatePerSeconds(id))
    }, [dispatch])


    const updateSecondsValue = useCallback(() => {
        dispatch(updatePerSecondsValue())
    }, [dispatch])


    useEffect(
        () => {
            window.setInterval(() => {
                updateSecondsValue()
            }, 100);
        },
        [updateSecondsValue]
    )


    // console.log(props.data)
    return (
        <div className={"mainClicker"} onSelect={"return false"} style={{userSelect: "none"}}>


            <span key={"value"}>{props.data.value.toFixed(1)}</span>
            <br/>
            <br/>
            <span key={"click"}>За клик: {props.data.click.toFixed(1)}</span>
            <br/>
            <span key={"perSec"}>В секунду: {props.data.perSecond.toFixed(1)}</span>
            <br/>


            <div key={"incClick"} id={"incClick"} style={{
                background: "#f5bc8b",
                border: "2px solid",
                borderRadius: "25px",
                padding: "10px",
                margin: "0 0 10px 0",
                cursor: "pointer",
            }} onClick={() => increment()}>
                <div style={{textAlign: "center"}}>
                    <span key={"tap"} style={{margin: "auto"}}>Добывать</span>
                </div>
            </div>

            <div key={"shopBuyClick"}>
                <RowElementShopBuyClick updateClick={updateClick} data={props.data}/>
            </div>

            <div key={"shopVideoCard"}>
                {props.data.videoCardsList.map((videoCard) => {
                    return <RowElementShopVideoCard updateSeconds={updateSeconds} videoCard={videoCard}/>
                })}
            </div>
        </div>

    )

}


export default MainClicker;

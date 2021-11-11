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
import RowElementShopBuyClick from "./RowElementShopBuyClick";

function MainClicker(props) {
    const dispatch = useDispatch()
    let clicked= true

    const increment = useCallback(() => {
        console.log("ZaIf")
            console.log("clicked")

        clicked=false
        if(clicked==true){
        const tim = window.setInterval(() => {

                document.getElementById('incClick').classList.add('disabled');
            console.log("Dispatch")
            dispatch(incrementCurrentValue())
            document.getElementById('incClick').classList.remove('disabled');
            clicked=true
        }, 100);}

    }, [])

    const Decrement = useCallback(() => {
        dispatch(decrementCurrentValue())
    }, [])

    const updateClick = useCallback(() => {
        dispatch(updatePerClick())
    }, [])

    const updateSeconds = useCallback((id) => {
        dispatch(updatePerSeconds(id))
    }, [])


    const updateSecondsValue = useCallback(() => {
        dispatch(updatePerSecondsValue())
    }, [])


    useEffect(
        () => {
            const timer = window.setInterval(() => {
                updateSecondsValue()
            }, 100);
        },
        []
    )


    // console.log(props.data)
    return (
        <div className={"mainClicker"} onSelect={"return false"} style={{userSelect: "none"}}>


            <span>{props.data.value.toFixed(1)}</span>
            <br/>
            <br/>
            <span>За клик: {props.data.click.toFixed(1)}</span>
            <br/>
            <span>В секунду: {props.data.perSecond.toFixed(1)}</span>
            <br/>


            <div id={"incClick"} style={{
                background: "#f5bc8b",
                border: "2px solid",
                borderRadius: "25px",
                padding: "10px",
                margin: "0 0 10px 0",
                cursor:"pointer",
            }} onClick={() => increment()}>
                <div style={{textAlign: "center"}}>
                    <span style={{margin: "auto"}}>Добывать</span>
                </div>
            </div>

            <div>
                <RowElementShopBuyClick updateClick={updateClick} data={props.data}/>
            </div>


            <div>
                {props.data.videoCardsList.map((videoCard) => {
                    return <RowElementShopVideoCard updateSeconds={updateSeconds} videoCard={videoCard}/>
                })}
            </div>
        </div>

    )

}


export default MainClicker;

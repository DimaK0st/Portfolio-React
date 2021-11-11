import React from "react";
import userIcon from "../../assets/img/clikcer/user-icon.png"


function RowElementShopBuyClick(props){





    return(
        <div style={{background: "#b4f58b", border: "2px solid", borderRadius: "25px", padding:"5px", margin: "0 0 10px 0", cursor:"pointer"}}onClick={()=>props.updateClick()}>
            <table style={{width: "100%", height: "100%"}}>
                <tr>
                    <td rowSpan="2" width="20%"><img src={userIcon} style={{width: "100%", filter: "invert(100%)"}}/></td>
                    <th colSpan="1" width="60%" align="left">Взять напарника</th>
                    <th colSpan="1" width="20%" align="right">{props.data.stageClick.toFixed(0)}</th>
                </tr>
                <tr>
                    <th colSpan="1" align="left">{props.data.costUpdateClick.toFixed(1)}</th>
                    <th colSpan="1" align="right">1</th>
                </tr>
            </table>
        </div>

    )


}

export default React.memo(RowElementShopBuyClick);

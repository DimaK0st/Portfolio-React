import React from "react";
import graphicsCard from "../../assets/img/clikcer/graphics-card.png"


function RowElementShopVideoCard(props){





    return(
        <div style={{background: "#b5cef3", border: "2px solid", borderRadius: "25px", padding:"5px", margin: "0 0 10px 0", cursor:"pointer"}} onClick={()=>props.updateSeconds(props.videoCard.id)}>
            <table style={{width: "100%", height: "100%"}}>
            <tr>
                <td rowSpan="2" width="20%"><img src={graphicsCard} style={{width: "100%", filter: "invert(100%)"}}/></td>
                <th colSpan="1" width="60%" align="left">{props.videoCard.name}</th>
                <th colSpan="1" width="20%" align="right">{props.videoCard.count.toFixed(0)}</th>
            </tr>
            <tr>
                <th colSpan="1" align="left">{props.videoCard.costNext.toFixed(1)}</th>
                <th colSpan="1" align="right">{props.videoCard.value.toFixed(1)}</th>
            </tr>
            </table>
        </div>

    )


}

export default React.memo(RowElementShopVideoCard);

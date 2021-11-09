import React from "react";
import graphicsCard from "../../assets/img/clikcer/graphics-card.png"


function RowElementShopVideoCard(props){





    return(
        <div style={{background: "red", border: "1rem solid"}} onClick={()=>props.updateSeconds(props.videoCard.id)}>
            <table style={{width: "100%", height: "100%"}}>
            <tr>
                <td rowSpan="2" width="20%"><img src={graphicsCard} style={{width: "100%"}}/></td>
                <th colSpan="1" width="60%" align="left">{props.videoCard.name}</th>
                <th colSpan="1" width="20%" align="right">{props.videoCard.count.toFixed(1)}</th>
            </tr>
            <tr>
                <th colSpan="1" align="left">{props.videoCard.costNext.toFixed(1)}</th>
                <th colSpan="1" align="right">{props.videoCard.value.toFixed(1)}</th>
            </tr>
            </table>
        </div>

    )


}

export default RowElementShopVideoCard;

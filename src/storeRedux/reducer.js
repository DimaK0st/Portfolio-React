import {
    INCREMENT_CURRENT_VALUE,
    UPDATE_PER_CLICK,
    UPDATE_PER_SECONDS,
    UPDATE_PER_SECONDS_VALUE
} from "./actionType";
import defaultState from "./defaultState";



export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case INCREMENT_CURRENT_VALUE:
            return {
                ...state,
                value: state.value + state.click
            };

        case UPDATE_PER_SECONDS:
            const currentVideoCart = state.videoCardsList[action.id]

            const priseSecond = getPricePerSecond(currentVideoCart.cost, currentVideoCart.count)
            const priseNextSecond = getPricePerSecond(priseSecond, currentVideoCart.count + 1)
            if (state.value >= priseSecond)
                return {
                    ...state,
                    value: state.value - priseSecond,
                    perSecond: state.perSecond + currentVideoCart.value,
                    videoCardsList: state.videoCardsList.map(videoCard =>
                        videoCard.id === action.id ? {
                            ...videoCard,
                            count: currentVideoCart.count + 1,
                            costNext: priseNextSecond
                        } : videoCard
                    )
                };

        case UPDATE_PER_CLICK:
            const priseSeconds = getPricePerClick(state.stageClick)
            const priseNextSeconds = getPricePerClick(state.stageClick + 1)
            if (state.value >= priseSeconds)
                return {
                    ...state,
                    click: state.click + 0.1,
                    stageClick: state.stageClick + 1,
                    value: state.value - priseSeconds,
                    costUpdateClick: priseNextSeconds
                };

        case UPDATE_PER_SECONDS_VALUE:
            return {
                ...state,
                value: state.value + (state.perSecond/10),
            };



        default:
            return state;
    }
}


function getPricePerSecond(cost, stage) {

    return (cost * Math.pow(1.07, stage))

}

function getPricePerClick(stage) {

    return (50 * Math.pow(1.07, stage))

}


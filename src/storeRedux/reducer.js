import {
    DECREMENT_CURRENT_VALUE,
    INCREMENT_CURRENT_VALUE,
    UPDATE_PER_CLICK,
    UPDATE_PER_SECONDS,
    UPDATE_PER_SECONDS_VALUE
} from "./actionType";


const defaultState = {
    click: 1,
    perSecond: 0,
    stageClick: 0,
    costUpdateClick: 50,
    value: 0,


    videoCardsList: [
        {
            id: 0,
            name: "GeForce GTX 750 ",
            count: 0,
            cost: 15,
            costNext: 15,
            value: 0.1,
        },
        {
            id: 1,
            name: "GeForce GTX 1050",
            count: 0,
            cost: 100,
            costNext: 100,
            value: 0.5,
        },
        {
            id: 2,
            name: "GeForce GTX 1050 TI",
            count: 0,
            cost: 500,
            costNext: 500,
            value: 4,
        },
        {
            id: 3,
            name: "GeForce GTX 1060",
            count: 0,
            cost: 3000,
            costNext: 3000,
            value: 10,
        },
        {
            id: 4,
            name: "GeForce GTX 1060 TI",
            count: 0,
            cost: 10000,
            costNext: 10000,
            value: 40,
        },
        {
            id: 5,
            name: "GeForce GTX 1660 TI",
            count: 0,
            cost: 40000,
            costNext: 40000,
            value: 100,
        },
        {
            id: 6,
            name: "GeForce GTX 1080 TI",
            count: 0,
            cost: 200000,
            costNext: 200000,
            value: 400,
        },
        {
            id: 7,
            name: "TITAN RTX",
            count: 0,
            cost: 1666666,
            costNext: 1666666,
            value: 666,
        },
        {
            id: 8,
            name: "GeForce RTX 2080 TI",
            count: 0,
            cost: 123456789,
            costNext: 123456789,
            value: 98765,
        },
        {
            id: 9,
            name: "GeForce RTX 3070 TI",
            count: 0,
            cost: 3999999999,
            costNext: 3999999999,
            value: 999999,
        },
        {
            id: 10,
            name: "GeForce RTX 3080 TI",
            count: 0,
            cost: 75000000000,
            costNext: 75000000000,
            value: 10000000,
        }
    ],

}

export default function reducer(state = defaultState, action) {
    switch (action.type) {

        case INCREMENT_CURRENT_VALUE:
            return {
                ...state,
                value: state.value + state.click
            };
        case DECREMENT_CURRENT_VALUE:
            return {
                ...state,
                value: state.value - state.click
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


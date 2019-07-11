import { CLICKED_AWAY, GIPHY_CLICKED } from "../actions/giphy-display";

const initialState = {
    link: null,
    isShown: false
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case CLICKED_AWAY:
            return initialState;
        case GIPHY_CLICKED:
            return {
                ...state,
                link: action.link,
                isShown: true
            };
        default:
            return state;
    }
};
import {GET_RANDOM_GIPHY, ON_ERROR, ON_SUCCESS} from "../actions/random";

const initialState = {
    giphy: {
        small: null,
        full: null,
    },
    isLoading: false
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case GET_RANDOM_GIPHY:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case ON_SUCCESS:
            return {
                ...state,
                giphy: getGiphyStateObject(action.giphy),
                isLoading: action.isLoading,
            };
        case ON_ERROR:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        default:
            return {
                ...state
            }
    }
};

function getGiphyStateObject(rawGiphy) {
    return {
        small: rawGiphy.fixed_width_downsampled_url,
        full: rawGiphy.image_original_url,
    }
}
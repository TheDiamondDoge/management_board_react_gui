import {LOAD_INDICATORS, LOAD_INDICATORS_SUCCESS, LOAD_INDICATORS_FAIL, RESET_STATE} from '../actions/indicators-tab';

const initState = {
    loaded: false,
    error: "",
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_INDICATORS:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_INDICATORS_FAIL:
            return {
                ...state,
                loaded: false,
                error: action.error,
            };
        case LOAD_INDICATORS_SUCCESS:
            return {
                ...state,
                ...action.data,
                loaded: true,
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}
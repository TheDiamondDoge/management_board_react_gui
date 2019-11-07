import {
    LOAD_INDICATORS,
    LOAD_INDICATORS_FAIL,
} from '../actions/indicators-tab';

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LOAD_INDICATORS:
            return {
                ...state,
            };
        case LOAD_INDICATORS_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}
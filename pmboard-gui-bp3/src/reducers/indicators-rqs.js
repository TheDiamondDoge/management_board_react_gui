import {
    INDICATORS_RQS_RESET_STATE,
    INDICATORS_RQS_FAIL, INDICATORS_RQS_SAVE,
    INDICATORS_RQS_SUCCESS,
    LOAD_INDICATORS_RQS
} from "../actions/indicators-rqs";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LOAD_INDICATORS_RQS:
            return {
                ...state,
                loading: true,
            };
        case INDICATORS_RQS_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case INDICATORS_RQS_FAIL:
            return {
                ...state,
                loading: false,
            };
        case INDICATORS_RQS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case INDICATORS_RQS_RESET_STATE:
            return initState;
        default:
            return state;
    }
}
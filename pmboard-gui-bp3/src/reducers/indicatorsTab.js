import {
    LOAD_INDICATORS,
    LOAD_INDICATORS_SUCCESS,
    LOAD_INDICATORS_FAIL,
    RESET_STATE,
    LOAD_INDICATORS_RQS_SUCCESS, LOAD_INDICATORS_RQS_ERROR
} from '../actions/indicators-tab';

const initState = {
    rqsLoading: true,
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
            };
            //TODO: To remove
        case LOAD_INDICATORS_FAIL:
            return {
                ...state,
            };
            //TODO: To remove
        case LOAD_INDICATORS_SUCCESS:
            return {
                ...state,
                ...action.data,
                loaded: true,
            };
        case LOAD_INDICATORS_RQS_SUCCESS:
            return {
                ...state,
                rqs: action.rqs,
                rqsLoading: false,
            };
        case LOAD_INDICATORS_RQS_ERROR:
            return {
                ...state,
                rqsLoading: false,
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}
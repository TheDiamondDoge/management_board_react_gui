import {
    INDICATORS_RQS_RESET,
    INDICATORS_RQS_ERROR, INDICATORS_RQS_SAVE,
    INDICATORS_RQS_SUCCESS,
    INDICATORS_RQS_LOAD
} from "../../actions/pws/indicators-rqs";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case INDICATORS_RQS_LOAD:
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
        case INDICATORS_RQS_ERROR:
            return {
                ...state,
                loading: false,
            };
        case INDICATORS_RQS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case INDICATORS_RQS_RESET:
            return initState;
        default:
            return state;
    }
}
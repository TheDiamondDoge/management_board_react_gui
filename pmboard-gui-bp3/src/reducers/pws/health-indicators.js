import {
    HEALTH_LOAD,
    HEALTH_ERROR,
    HEALTH_LOAD_SUCCESS,
    HEALTH_RESET, HEALTH_COMMENTS_SAVE,
    HEALTH_INDICATORS_SAVE
} from "../../actions/pws/health-indicators";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case HEALTH_LOAD:
            return {
                ...state,
                loading: true,
            };
        case HEALTH_LOAD_SUCCESS:
            return {
                ...state,
                payload: action.healthIndicators,
                loading: false,
            };
        case HEALTH_INDICATORS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case HEALTH_COMMENTS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case HEALTH_ERROR:
            return {
                ...state,
                loading: false
            };
        case HEALTH_RESET:
            return initState;
        default:
            return state;
    }
}
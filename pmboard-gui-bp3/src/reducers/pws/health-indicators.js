import {
    LOAD_HEALTH,
    LOAD_HEALTH_FAIL,
    LOAD_HEALTH_SUCCESS,
    RESET_HEALTH_STATE, SAVE_COMMENTS,
    SAVE_HEALTH
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
        case LOAD_HEALTH:
            return {
                ...state,
                loading: true,
            };
        case LOAD_HEALTH_SUCCESS:
            return {
                ...state,
                payload: action.healthIndicators,
                loading: false,
            };
        case SAVE_HEALTH:
            return {
                ...state,
                loading: true,
            };
        case SAVE_COMMENTS:
            return {
                ...state,
                loading: true,
            };
        case LOAD_HEALTH_FAIL:
            return {
                ...state,
                loading: false
            };
        case RESET_HEALTH_STATE:
            return initState;
        default:
            return state;
    }
}
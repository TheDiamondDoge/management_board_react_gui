import {LOAD_HEALTH, LOAD_HEALTH_FAIL, LOAD_HEALTH_SUCCESS, RESET_HEALTH_STATE} from "../actions/health-indicators";

const initState = {
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
                ...action.healthIndicators,
                loading: false,
            };
        case LOAD_HEALTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case RESET_HEALTH_STATE:
            return initState;
        default:
            return state;
    }
}
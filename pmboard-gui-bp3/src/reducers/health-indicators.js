import {LOAD_HEALTH, LOAD_HEALTH_FAIL, LOAD_HEALTH_SUCCESS, RESET_STATE} from "../actions/health-indicators";

const initState = {
    loaded: false,
    data: {},
    error: null
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LOAD_HEALTH:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_HEALTH_SUCCESS:
            return {
                ...state,
                data: action.healthIndicators,
                loaded: true,
            };
        case LOAD_HEALTH_FAIL:
            return {
                ...state,
                error: action.error,
                loaded: false
            };
        case RESET_STATE:
            return initState;
        default:
            return {
                ...state
            }
    }
}
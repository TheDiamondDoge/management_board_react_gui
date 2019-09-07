import {LOAD_COST, LOAD_COST_FAIL, LOAD_COST_SUCCESS, UPLOAD_COST, UPLOAD_COST_FAIL, RESET_STATE} from '../actions/cost-tab';

const initState = {
    loaded: false,
    data: {},
    filepath: "",
    error: {},
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_COST:
            return {
                ...state,
            };
        case LOAD_COST_SUCCESS:
            return {
                ...state,
                loaded: true,
                data: action.data,
            };
        case LOAD_COST_FAIL:
            return {
                ...state,
                error: action.error,
            };
        case UPLOAD_COST:
            return {
                ...state,
            };
        case UPLOAD_COST_FAIL:
            return {
                ...state,
                error: action.error,
            };
        case RESET_STATE:
        default:
            return initState;
    }
}
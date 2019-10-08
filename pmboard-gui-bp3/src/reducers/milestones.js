import {
    LOAD_MILESTONES,
    LOAD_MILESTONES_FAIL,
    LOAD_MILESTONES_SUCCESS,
    RESET_MILESTONES_STATE
} from "../actions/milestones";

const initState = {
    data: [],
    loaded: false,
    error: ""
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_MILESTONES:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_MILESTONES_SUCCESS:
            return {
                ...state,
                loaded: true,
                data: action.data,
            };
        case LOAD_MILESTONES_FAIL:
            return {
                ...state,
                error: action.error,
                loaded: false,
            };
        case RESET_MILESTONES_STATE:
            return initState;
        default:
            return state;
    }
}
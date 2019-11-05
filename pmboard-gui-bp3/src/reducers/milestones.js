import {
    LOAD_MILESTONES,
    LOAD_MILESTONES_FAIL,
    LOAD_MILESTONES_SUCCESS,
    RESET_MILESTONES_STATE
} from "../actions/milestones";

const initState = {
    payload: [],
    loading: true,
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_MILESTONES:
            return {
                ...state,
                loading: false,
            };
        case LOAD_MILESTONES_SUCCESS:
            return {
                ...state,
                payload: [...action.data],
                loading: false,
            };
        case LOAD_MILESTONES_FAIL:
            return {
                ...state,
                loading: false,
            };
        case RESET_MILESTONES_STATE:
            return initState;
        default:
            return state;
    }
}
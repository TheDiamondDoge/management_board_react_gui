import {
    MILESTONES_LOAD,
    MILESTONES_ERROR,
    MILESTONES_LOAD_SUCCESS,
    MILESTONES_RESET, MILESTONES_SAVE
} from "../../actions/pws/milestones";

const initState = {
    payload: [],
    loading: true,
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case MILESTONES_LOAD:
            return {
                ...state,
                loading: false,
            };
        case MILESTONES_SAVE:
            return {
                ...state,
                loading: true,
            };
        case MILESTONES_LOAD_SUCCESS:
            return {
                ...state,
                payload: [...action.data],
                loading: false,
            };
        case MILESTONES_ERROR:
            return {
                ...state,
                loading: false,
            };
        case MILESTONES_RESET:
            return initState;
        default:
            return state;
    }
}
import {PROJECTS_ERROR, PROJECTS_LOAD, PROJECTS_LOAD_SUCCESS, PROJECTS_RESET} from "../../actions/pws/projects-list";

const initState = {
    loading: true,
    payload: []
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case PROJECTS_LOAD:
            return {
                ...state,
                loading: true
            };
        case PROJECTS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case PROJECTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case PROJECTS_RESET:
            return initState;
        default:
            return state;
    }
}
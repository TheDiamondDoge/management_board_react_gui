import {ACTIONS_LOAD, ACTIONS_LOAD_SUCCESS, ACTIONS_ERROR, ACTIONS_SAVE, ACTIONS_RESET} from "../../actions/pws/actions-tab";

const initState = {
    loading: true,
    payload: []
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case ACTIONS_LOAD:
            return {
                ...state,
                loading: true,
            };
        case ACTIONS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case ACTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case ACTIONS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case ACTIONS_RESET:
            return initState;
        default:
            return state;
    }
}
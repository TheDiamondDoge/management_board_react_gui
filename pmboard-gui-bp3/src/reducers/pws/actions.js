import {ACTIONS_LOAD, ACTIONS_LOAD_SUCCESS, ACTIONS_FAILURE, ACTIONS_SAVE, RESET_STATE} from "../../actions/pws/actions";

const initState = {
    loading: true,
    payload: {}
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
        case ACTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case ACTIONS_SAVE:
            return {
                ...state
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}
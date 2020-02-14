import {
    USER_REPORTS_ERROR,
    USER_REPORTS_LOAD,
    USER_REPORTS_LOAD_SUCCESS,
    USER_REPORTS_RESET
} from "../../actions/pws/user-reports";

export const initState = {
    loading: true,
    payload: {}
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case USER_REPORTS_LOAD:
            return {
                ...state,
                loading: true,
            };
        case USER_REPORTS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case USER_REPORTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case USER_REPORTS_RESET:
            return initState;
        default:
            return state;
    }
}
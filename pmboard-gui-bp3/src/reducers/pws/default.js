import {
    PROJECT_DEFAULTS_ERROR,
    PROJECT_DEFAULTS_LOAD, PROJECT_DEFAULTS_LOAD_SILENT,
    PROJECT_DEFAULTS_LOAD_SUCCESS,
    PROJECT_DEFAULTS_RESET
} from "../../actions/pws/default";

const initState = {
    loading: true,
    payload: {},
    error: null,
};

export default (state, action) => {
    if(state === undefined) {
        return initState;
    }

    switch (action.type) {
        case PROJECT_DEFAULTS_LOAD:
            return {
                ...state,
                loading: true,
            };
        case PROJECT_DEFAULTS_LOAD_SILENT:
            return {
                ...state,
                loading: false
            };
        case PROJECT_DEFAULTS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case PROJECT_DEFAULTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case PROJECT_DEFAULTS_RESET:
            return initState;
        default:
            return state;
    }
};
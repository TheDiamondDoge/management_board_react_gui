import {
    ACTIONS_LOAD,
    ACTIONS_LOAD_SUCCESS,
    ACTIONS_ERROR,
    ACTIONS_SAVE,
    ACTIONS_DELETE,
    ACTIONS_RESET,
    ACTIONS_EXPORT, ACTIONS_EXPORT_SUCCESS
} from "../../actions/pws/actions-tab";

const initState = {
    loading: true,
    fileExport: false,
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
        case ACTIONS_EXPORT:
            return {
                ...state,
                loading: false,
                fileExport: true,
            };
        case ACTIONS_EXPORT_SUCCESS:
            return {
                ...state,
                fileExport: false,
            };
        case ACTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                fileExport: false,
            };
        case ACTIONS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case ACTIONS_DELETE:
            return {
                ...state,
                loading: true
            };
        case ACTIONS_RESET:
            return initState;
        default:
            return state;
    }
}
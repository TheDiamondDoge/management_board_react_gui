import {
    RISKS_SUMMARY_ERROR,
    RISKS_SUMMARY_LOAD,
    RISKS_SUMMARY_LOAD_SUCCESS, RISKS_SUMMARY_RESET
} from "../../../actions/pws/risks/risks-summary";

const initState = {
    payload: [],
    loading: true,
    error: ''
}

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case RISKS_SUMMARY_LOAD:
            return {
                ...state,
                loading: true,
            };
        case RISKS_SUMMARY_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case RISKS_SUMMARY_ERROR:
            return {
                ...state,
                loading: false,
                payload: action.error
            };
        case RISKS_SUMMARY_RESET:
            return initState;
        default:
            return state;
    }
}
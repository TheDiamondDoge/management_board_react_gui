import {
    REPORT_ERROR,
    REPORT_LOAD,
    REPORT_LOAD_SUCCESS,
    REPORT_RESET,
} from "../../../actions/pws/report/report-tab";

const initState = {
    loading: true,
    payload: {},
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case REPORT_LOAD:
            return {
                ...state,
                loading: true,
            };
        case REPORT_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data,
            };
        case REPORT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case REPORT_RESET:
            return initState;
        default:
            return state;
    }
}
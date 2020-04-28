import {
    REPORT_ERROR,
    REPORT_LOAD,
    REPORT_LOAD_SUCCESS,
    REPORT_RESET,
    SNAPSHOT_LOAD, SNAPSHOT_LOAD_SUCCESS
} from "../../actions/pws/report-tab";

const initState = {
    loading: true,
    payload: {},
    snapshots: [],
    snapshotLoading: true,
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
        case SNAPSHOT_LOAD:
            return {
                ...state,
                snapshotLoading: true,
            };
        case SNAPSHOT_LOAD_SUCCESS:
            return {
                ...state,
                snapshots: action.data,
                snapshotLoading: false,
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
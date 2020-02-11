import {BACKLOG_CHART_LOAD, BACKLOG_CHART_LOAD_SUCCESS, BACKLOG_ERROR, BACKLOG_RESET} from "../../actions/pws/backlog";

const initState = {
    loading: true,
    payload: {}
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case BACKLOG_CHART_LOAD:
            return {
                ...state,
                loading: true,
            };
        case BACKLOG_CHART_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case BACKLOG_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case BACKLOG_RESET:
            return initState;
        default:
            return state;
    }
}
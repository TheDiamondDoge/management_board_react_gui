import {
    LOAD_QUALITY_KPI,
    QUALITY_KPI_FAIL,
    QUALITY_KPI_RESET_STATE, QUALITY_KPI_SAVE,
    QUALITY_KPI_SUCCESS,
    QUALITY_KPI_SYNC
} from "../actions/quality-kpi";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LOAD_QUALITY_KPI:
            return {
                ...state,
                loading: true,
            };
        case QUALITY_KPI_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case QUALITY_KPI_SYNC:
            return {
                ...state,
            };
        case QUALITY_KPI_SAVE:
            return {
                ...state,
                loading: true,
            };
        case QUALITY_KPI_FAIL:
            return {
                ...state,
                loading: false,
            };
        case QUALITY_KPI_RESET_STATE:
            return initState;
        default:
            return state;
    }
}
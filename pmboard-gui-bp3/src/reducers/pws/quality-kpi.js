import {
    QUALITY_KPI_LOAD,
    QUALITY_KPI_ERROR,
    QUALITY_KPI_RESET, QUALITY_KPI_SAVE,
    QUALITY_KPI_SUCCESS,
    QUALITY_KPI_SYNC
} from "../../actions/pws/quality-kpi";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case QUALITY_KPI_LOAD:
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
        case QUALITY_KPI_ERROR:
            return {
                ...state,
                loading: false,
            };
        case QUALITY_KPI_RESET:
            return initState;
        default:
            return state;
    }
}
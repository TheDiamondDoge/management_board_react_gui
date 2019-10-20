import {
    LOAD_MILESTONES_KPI, MILESTONES_KPI_FAIL, MILESTONES_KPI_RESET_STATE, MILESTONES_KPI_SUCCESS
} from "../actions/milestones-kpi";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LOAD_MILESTONES_KPI:
            return {
                ...state,
                loading: true,
            };
        case MILESTONES_KPI_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case MILESTONES_KPI_FAIL:
            return {
                ...state,
                loading: false,
            };
        case MILESTONES_KPI_RESET_STATE:
            return initState;
        default:
            return state;
    }
}
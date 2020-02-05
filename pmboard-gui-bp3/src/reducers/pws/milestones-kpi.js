import {
    MILESTONES_KPI_LOAD, MILESTONES_KPI_ERROR, MILESTONES_KPI_RESET, MILESTONES_KPI_SUCCESS
} from "../../actions/pws/milestones-kpi";

const initState = {
    payload: [],
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case MILESTONES_KPI_LOAD:
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
        case MILESTONES_KPI_ERROR:
            return {
                ...state,
                loading: false,
            };
        case MILESTONES_KPI_RESET:
            return initState;
        default:
            return state;
    }
}
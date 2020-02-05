import {DR4_KPI_LOAD, DR4_KPI_SUCCESS, DR4_KPI_ERROR, DR4_KPI_RESET} from "../../actions/pws/dr4-kpi";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case DR4_KPI_LOAD:
            return {
                ...state,
                loading: true,
            };
        case DR4_KPI_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case DR4_KPI_ERROR:
            return {
                ...state,
                loading: false,
            };
        case DR4_KPI_RESET:
            return initState;
        default:
            return state;
    }
}
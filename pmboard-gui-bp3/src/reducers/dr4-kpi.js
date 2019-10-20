import {LOAD_DR4_KPI} from "../actions/dr4-kpi";
import {DR4_KPI_SUCCESS} from "../actions/dr4-kpi";
import {DR4_KPI_FAIL} from "../actions/dr4-kpi";
import {DR4_KPI_RESET_STATE} from "../actions/dr4-kpi";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LOAD_DR4_KPI:
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
        case DR4_KPI_FAIL:
            return {
                ...state,
                loading: false,
            };
        case DR4_KPI_RESET_STATE:
            return initState;
        default:
            return state;
    }
}
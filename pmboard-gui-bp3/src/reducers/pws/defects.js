import {DEFECTS_CHART_LOAD, DEFECTS_CHART_LOAD_SUCCESS, DEFECTS_ERROR, DEFECTS_RESET} from "../../actions/pws/defects";

const initState = {
    loading: true,
    payload: {}
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case DEFECTS_CHART_LOAD:
            return {
                ...state,
                loading: true,
            };
        case DEFECTS_CHART_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case DEFECTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case DEFECTS_RESET:
            return initState;
        default:
            return state;
    }
}
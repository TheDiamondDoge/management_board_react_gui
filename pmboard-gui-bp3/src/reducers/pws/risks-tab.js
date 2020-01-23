import * as Types from "../../actions/pws/risks-tab";

const initState = {
    loading: true,
    payload: [],
    riskIDs: [],
    error: "",
};

export default (state, action) => {
    if (state === undefined)
        return initState;

    switch (action.type) {
        case Types.LOAD_RISKS:
            return {
                ...state,
                loading: true,
            };
        case Types.LOAD_RISKS_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data,
            };
        case Types.LOAD_RISKS_IDS:
            return {
                ...state,
            };
        case Types.LOAD_RISKS_IDS_SUCCESS:
            return {
                ...state,
                riskIDs: [...action.data],
            };
        case Types.RISKS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case Types.SAVE_RISK:
            return {
                ...state,
            };
        case Types.RESET_STATE:
            return initState;
        default:
            return state;
    }
}

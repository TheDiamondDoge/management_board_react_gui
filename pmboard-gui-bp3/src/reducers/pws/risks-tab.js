import {
    RISKS_LOAD,
    RISKS_LOAD_SUCCESS,
    RISKS_IDS_LOAD,
    RISKS_IDS_LOAD_SUCCESS,
    RISKS_ERROR,
    RISK_RESET,
    RISK_SAVE, RISKS_UPLOAD, RISKS_UPLOAD_SUCCESS, RISKS_ERRORS_SHOWED, RISKS_DOWNLOAD, RISKS_GET_LAST_UPLOADED
} from "../../actions/pws/risks-tab";

const initState = {
    loading: true,
    payload: {},
    riskIDs: [],
    error: "",
    errorListShowed: false
};

export default (state, action) => {
    if (state === undefined)
        return initState;

    switch (action.type) {
        case RISKS_LOAD:
            return {
                ...state,
                loading: true,
            };
        case RISKS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data,
            };
        case RISKS_IDS_LOAD:
            return {
                ...state,
            };
        case RISKS_IDS_LOAD_SUCCESS:
            return {
                ...state,
                riskIDs: [...action.data],
            };
        case RISKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case RISK_SAVE:
            return {
                ...state,
                loading: true,
            };
        case RISKS_UPLOAD:
            return {
                ...state,
                loading: true,
            };
        case RISKS_UPLOAD_SUCCESS:
            return {
                ...state,
                errors: [...action.errors],
                errorListShowed: false,
            };
        case RISKS_ERRORS_SHOWED:
            return {
                ...state,
                errorListShowed: true
            };
        case RISKS_DOWNLOAD:
            return {
                ...state,
            };
        case RISKS_GET_LAST_UPLOADED:
            return {
                ...state,
            };
        case RISK_RESET:
            return initState;
        default:
            return state;
    }
}

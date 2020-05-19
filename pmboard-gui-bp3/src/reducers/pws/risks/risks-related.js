import {
    RISKS_IDS_ERROR,
    RISKS_IDS_LOAD,
    RISKS_IDS_LOAD_SUCCESS,
    RISKS_IDS_RESET
} from "../../../actions/pws/risks/risks-related";

const initState = {
    payload: [],
    loading: true,
    error: ''
}

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case RISKS_IDS_LOAD:
            return {
                ...state,
                loading: true,
            };
        case RISKS_IDS_LOAD_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case RISKS_IDS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case RISKS_IDS_RESET:
            return initState;
        default:
            return state
    }
}
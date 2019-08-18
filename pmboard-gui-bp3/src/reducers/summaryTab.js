import {LOAD_SUMMARY, LOAD_SUMMARY_FAIL, LOAD_SUMMARY_SUCCESS} from "../actions/summaryTab";

const initState = {
    isLoading: false,
    summaryData: {},
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_SUMMARY:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_SUMMARY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summaryData: action.summaryData,
            };
        case LOAD_SUMMARY_FAIL:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}


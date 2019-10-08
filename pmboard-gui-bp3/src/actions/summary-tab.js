export const LOAD_SUMMARY = "LOAD_SUMMARY";
export const LOAD_SUMMARY_SUCCESS = "LOAD_SUMMARY_SUCCESS";
export const LOAD_SUMMARY_FAIL = "LOAD_SUMMARY_FAIL";
export const RESET_STATE = "RESET_STATE";

export const loadSummary = () => ({
        type: LOAD_SUMMARY,
    }
);

export const loadSummarySuccess = (data) => ({
        type: LOAD_SUMMARY_SUCCESS,
        summaryData: data,
    }
);

export const loadSummaryError = (error) => ({
        type: LOAD_SUMMARY_FAIL,
        error: error
    }
);

export const resetSummaryState = () => ({
    type: RESET_STATE
});
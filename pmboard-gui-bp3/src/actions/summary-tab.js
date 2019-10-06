export const LOAD_SUMMARY = "LOAD_SUMMARY";
export const LOAD_SUMMARY_SUCCESS = "LOAD_SUMMARY_SUCCESS";
export const LOAD_SUMMARY_FAIL = "LOAD_SUMMARY_FAIL";
export const RESET_STATE = "RESET_STATE";

export const loadSummary = (test) => ({
        type: LOAD_SUMMARY,
        test: process.env.REACT_APP_TEST,
    }
);

export const loadSuccess = (data) => ({
        type: LOAD_SUMMARY_SUCCESS,
        summaryData: data,
    }
);

export const loadError = (error) => ({
        type: LOAD_SUMMARY_FAIL,
        error: error
    }
);

export const resetState = () => ({
    type: RESET_STATE
});
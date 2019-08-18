export const LOAD_SUMMARY = "LOAD_SUMMARY";
export const LOAD_SUMMARY_SUCCESS = "LOAD_SUMMARY_SUCCESS";
export const LOAD_SUMMARY_FAIL = "LOAD_SUMMARY_FAIL";

export const loadSummary = () => ({
        type: LOAD_SUMMARY,
        isLoading: true,
    }
);

export const loadSuccess = (data) => ({
        type: LOAD_SUMMARY_SUCCESS,
        summaryData: data,
    }
);

export const loadError = () => ({
        type: LOAD_SUMMARY_FAIL,
        isLoading: false,
    }
);
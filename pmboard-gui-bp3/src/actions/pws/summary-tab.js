export const SUMMARY_LOAD = "SUMMARY_LOAD";
export const SUMMARY_LOAD_SUCCESS = "SUMMARY_LOAD_SUCCESS";
export const SUMMARY_ERROR = "SUMMARY_ERROR";
export const SUMMARY_RESET = "SUMMARY_RESET";

export const summaryLoad = (projectId) => ({
        type: SUMMARY_LOAD,
        projectId
    }
);

export const summaryLoadSuccess = (data) => ({
        type: SUMMARY_LOAD_SUCCESS,
        summaryData: data,
    }
);

export const summaryError = (error) => ({
        type: SUMMARY_ERROR,
        error: error
    }
);

export const summaryReset = () => ({
    type: SUMMARY_RESET
});
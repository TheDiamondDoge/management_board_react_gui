export const REPORT_LOAD = "REPORT_LOAD";
export const REPORT_LOAD_SUCCESS = "REPORT_LOAD_SUCCESS";
export const REPORT_ERROR = "REPORT_ERROR";
export const REPORT_RESET = "REPORT_RESET";


export const loadReport = (projectId) => ({
    type: REPORT_LOAD,
    projectId
});

export const loadReportSuccess = (data) => ({
    type: REPORT_LOAD_SUCCESS,
    data
});

export const errorReport = (error) => ({
    type: REPORT_ERROR,
    error
});

export const resetReport = () => ({
    type: REPORT_RESET,
});
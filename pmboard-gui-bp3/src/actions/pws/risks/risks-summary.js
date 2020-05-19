export const RISKS_SUMMARY_LOAD = "RISKS_SUMMARY_LOAD";
export const RISKS_SUMMARY_LOAD_SUCCESS = "RISKS_SUMMARY_LOAD_SUCCESS";
export const RISKS_SUMMARY_ERROR = "RISKS_SUMMARY_ERROR";
export const RISKS_SUMMARY_RESET = "RISKS_SUMMARY_RESET";

export const loadRisksSummary = (projectId) => ({
    type: RISKS_SUMMARY_LOAD,
    projectId
});

export const loadRisksSummarySuccess = (data) => ({
    type: RISKS_SUMMARY_LOAD_SUCCESS,
    data
});

export const risksSummaryError = (error) => ({
    type: RISKS_SUMMARY_ERROR,
    error
});

export const risksSummaryReset = () => ({
    type: RISKS_SUMMARY_RESET,
});
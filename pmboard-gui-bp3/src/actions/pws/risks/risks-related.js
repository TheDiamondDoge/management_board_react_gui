export const RISKS_IDS_LOAD = "RISKS_IDS_LOAD";
export const RISKS_IDS_LOAD_SUCCESS = "RISKS_IDS_LOAD_SUCCESS";
export const RISKS_IDS_ERROR = "RISKS_IDS_ERROR";
export const RISKS_IDS_RESET = "RISKS_IDS_RESET";

export const loadRiskIds = (projectId) => ({
    type: RISKS_IDS_LOAD,
    projectId
});

export const loadRiskIdsSuccess = (data) => ({
    type: RISKS_IDS_LOAD_SUCCESS,
    data
});

export const riskIdsError = (error) => ({
    type: RISKS_IDS_ERROR,
    error
});

export const riskIdsReset = () => ({
    type: RISKS_IDS_RESET,
});
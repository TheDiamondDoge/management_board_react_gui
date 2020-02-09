export const RISKS_LOAD = "RISKS_LOAD";
export const RISKS_LOAD_SUCCESS = "RISKS_LOAD_SUCCESS";
export const RISKS_IDS_LOAD = "RISKS_IDS_LOAD";
export const RISKS_IDS_LOAD_SUCCESS = "RISKS_IDS_LOAD_SUCCESS";
export const RISKS_ERROR = "RISKS_ERROR";
export const RISK_SAVE = "RISK_SAVE";
export const RISK_RESET = "RISK_RESET";

export const loadRisks = () => ({
    type: RISKS_LOAD
});

export const loadSuccess = ({data}) => ({
    type: RISKS_LOAD_SUCCESS,
    data
});

export const loadRiskIds = () => ({
    type: RISKS_IDS_LOAD
});

export const loadRisksSuccess = ({data}) => ({
    type: RISKS_IDS_LOAD_SUCCESS,
    data
});

export const riskError = (error) => ({
    type: RISKS_ERROR,
    error
});

export const saveRisk = (data) => ({
    type: RISK_SAVE,
    data
});

export const resetState = () => ({
    type: RISK_RESET
});


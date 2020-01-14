export const LOAD_RISKS = "LOAD_RISKS";
export const LOAD_RISKS_SUCCESS = "LOAD_RISKS_SUCCESS";
export const RISKS_FAIL = "RISKS_FAIL";
export const SAVE_RISK = "SAVE_RISK";
export const RESET_STATE = "RESET_STATE";

export const loadRisks = () => ({
    type: LOAD_RISKS
});

export const loadSuccess = ({data}) => ({
    type: LOAD_RISKS_SUCCESS,
    data
});

export const riskFail = (error) => ({
    type: RISKS_FAIL,
    error
});

export const saveRisk = (data) => ({
    type: SAVE_RISK,
    data
});

export const resetState = () => ({
    type: RESET_STATE
});


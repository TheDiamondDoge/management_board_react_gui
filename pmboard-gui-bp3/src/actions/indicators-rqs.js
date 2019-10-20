export const LOAD_INDICATORS_RQS = "LOAD_INDICATORS_RQS";
export const INDICATORS_RQS_SUCCESS = "INDICATORS_RQS_SUCCESS";
export const INDICATORS_RQS_SAVE = "INDICATORS_RQS_SUCCESS";
export const INDICATORS_RQS_FAIL = "INDICATORS_RQS_FAIL";
export const INDICATORS_RESET_STATE = "INDICATORS_RESET_STATE";

export const loadIndicatorsRqs = () => ({
    type: LOAD_INDICATORS_RQS
});

export const indicatorsRqsSuccess = (data) => ({
    type: INDICATORS_RQS_SUCCESS,
    data
});

export const indicatorsRqsSave = () => ({
    type: INDICATORS_RQS_SAVE
});

export const indicatorsRqsFail = () => ({
    type: INDICATORS_RQS_FAIL,
});

export const indicatorsResetState = () => ({
    type: INDICATORS_RESET_STATE,
});
export const INDICATORS_RQS_LOAD = "INDICATORS_RQS_LOAD";
export const INDICATORS_RQS_SUCCESS = "INDICATORS_RQS_SUCCESS";
export const INDICATORS_RQS_SAVE = "INDICATORS_RQS_SAVE";
export const INDICATORS_RQS_ERROR = "INDICATORS_RQS_ERROR";
export const INDICATORS_RQS_RESET = "INDICATORS_RQS_RESET";

export const indicatorsRqsLoad = (projectId) => ({
    type: INDICATORS_RQS_LOAD,
    projectId
});

export const indicatorsRqsSuccess = (data) => ({
    type: INDICATORS_RQS_SUCCESS,
    data
});

export const indicatorsRqsSave = (projectId, data) => ({
    type: INDICATORS_RQS_SAVE,
    data,
    projectId,
});

export const indicatorsRqsError = () => ({
    type: INDICATORS_RQS_ERROR,
});

export const indicatorsRqsReset = () => ({
    type: INDICATORS_RQS_RESET,
});
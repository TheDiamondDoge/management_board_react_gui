export const INDICATORS_RQS_LOAD = "INDICATORS_RQS_LOAD";
export const INDICATORS_RQS_SUCCESS = "INDICATORS_RQS_SUCCESS";
export const INDICATORS_RQS_SAVE = "INDICATORS_RQS_SAVE";
export const INDICATORS_RQS_ERROR = "INDICATORS_RQS_ERROR";
export const INDICATORS_RQS_RESET = "INDICATORS_RQS_RESET";

export const indicatorsRqsLoad = () => ({
    type: INDICATORS_RQS_LOAD
});

export const indicatorsRqsSuccess = ({data}) => ({
    type: INDICATORS_RQS_SUCCESS,
    data
});

export const indicatorsRqsSave = (data) => ({
    type: INDICATORS_RQS_SAVE,
    data
});

export const indicatorsRqsError = () => ({
    type: INDICATORS_RQS_ERROR,
});

export const indicatorsRqsReset = () => ({
    type: INDICATORS_RQS_RESET,
});
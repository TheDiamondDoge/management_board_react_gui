export const LOAD_INDICATORS = "LOAD_INDICATORS";
export const LOAD_INDICATORS_SUCCESS = "LOAD_INDICATORS_SUCCESS";
export const LOAD_INDICATORS_FAIL = "LOAD_INDICATORS_FAIL";
export const LOAD_INDICATORS_RQS_SUCCESS = "LOAD_INDICATORS_RQS_SUCCESS";
export const LOAD_INDICATORS_RQS_ERROR = "LOAD_INDICATORS_RQS_ERROR";
export const RESET_STATE = "RESET_STATE";

export const loadIndicators = () => ({
        type: LOAD_INDICATORS,
    }
);
//TODO: to remove
export const loadIndicatorsSuccess = (data) => ({
        type: LOAD_INDICATORS_SUCCESS,
        data: data,
    }
);

//TODO: to remove
export const loadIndicatorsError = (error) => ({
        type: LOAD_INDICATORS_FAIL,
        error: error
    }
);

export const loadIndicatorsRqsSuccess = (data) => ({
    type: LOAD_INDICATORS_RQS_SUCCESS,
    rqs: data
});

export const loadIndicatorsRqsError = (data) => ({
    type: LOAD_INDICATORS_RQS_ERROR,
    rqs: data
});

export const resetIndicatorsState = () => ({
    type: RESET_STATE
});
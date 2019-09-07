export const LOAD_INDICATORS = "LOAD_INDICATORS";
export const LOAD_INDICATORS_SUCCESS = "LOAD_INDICATORS_SUCCESS";
export const LOAD_INDICATORS_FAIL = "LOAD_INDICATORS_FAIL";
export const RESET_STATE = "RESET_STATE";

export const loadIndicators = () => ({
        type: LOAD_INDICATORS,
    }
);

export const loadSuccess = (data) => ({
        type: LOAD_INDICATORS_SUCCESS,
        data: data,
    }
);

export const loadError = (error) => ({
        type: LOAD_INDICATORS_FAIL,
        error: error
    }
);

export const resetState = () => ({
    type: RESET_STATE
});
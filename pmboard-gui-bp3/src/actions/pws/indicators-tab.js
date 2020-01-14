export const LOAD_INDICATORS = "LOAD_INDICATORS";
export const LOAD_INDICATORS_FAIL = "LOAD_INDICATORS_FAIL";

export const loadIndicators = () => ({
        type: LOAD_INDICATORS,
    }
);

export const loadIndicatorsError = (error) => ({
        type: LOAD_INDICATORS_FAIL,
        error: error
    }
);
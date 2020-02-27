export const INDICATORS_LOAD = "INDICATORS_LOAD";
export const INDICATORS_ERROR = "INDICATORS_ERROR";

export const indicatorsLoad = (projectId) => ({
        type: INDICATORS_LOAD,
        projectId
    }
);

export const indicatorsError = (error) => ({
        type: INDICATORS_ERROR,
        error
    }
);
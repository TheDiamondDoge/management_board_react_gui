export const LOAD_HEALTH = "LOAD_HEALTH";
export const LOAD_HEALTH_SUCCESS = "LOAD_HEALTH_SUCCESS";
export const LOAD_HEALTH_FAIL = "LOAD_HEALTH_FAIL";
export const RESET_STATE = "RESET_STATE";

export const loadHealth = () => ({
    type: LOAD_HEALTH
});

export const loadSuccess = (data) => ({
    type: LOAD_HEALTH_SUCCESS,
    healthIndicators: data,
});

export const loadError = (error) => ({
    type: LOAD_HEALTH_FAIL,
    error: error,
});

export const resetState = () => ({
    type: RESET_STATE
});
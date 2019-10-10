export const LOAD_HEALTH = "LOAD_HEALTH";
export const LOAD_HEALTH_SUCCESS = "LOAD_HEALTH_SUCCESS";
export const LOAD_HEALTH_FAIL = "LOAD_HEALTH_FAIL";
export const RESET_HEALTH_STATE = "RESET_HEALTH_STATE";

export const loadHealth = () => ({
    type: LOAD_HEALTH
});

export const loadHealthSuccess = ({data}) => ({
    type: LOAD_HEALTH_SUCCESS,
    healthIndicators: data,
});

export const loadHealthError = (error) => ({
    type: LOAD_HEALTH_FAIL,
    error: error,
});

export const resetHealthState = () => ({
    type: RESET_HEALTH_STATE
});
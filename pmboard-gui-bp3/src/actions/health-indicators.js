export const LOAD_HEALTH = "LOAD_HEALTH";
export const LOAD_HEALTH_SUCCESS = "LOAD_HEALTH_SUCCESS";
export const SAVE_HEALTH = "SAVE_HEALTH";
export const SAVE_COMMENTS = "SAVE_COMMENTS";
export const LOAD_HEALTH_FAIL = "LOAD_HEALTH_FAIL";
export const RESET_HEALTH_STATE = "RESET_HEALTH_STATE";

export const loadHealth = () => ({
    type: LOAD_HEALTH
});

export const loadHealthSuccess = ({data}) => ({
    type: LOAD_HEALTH_SUCCESS,
    healthIndicators: data,
});

export const saveHealthIndicators = (data) => {
    return {
        type: SAVE_HEALTH,
        data: {
            statuses:
                {...data.statuses}
        }
    };
};

export const saveHealthComments = (data) => {
    return {
        type: SAVE_COMMENTS,
        data: {comments: {...data.comments}},
    }
};


export const loadHealthError = (error) => ({
    type: LOAD_HEALTH_FAIL,
    error: error,
});

export const resetHealthState = () => ({
    type: RESET_HEALTH_STATE
});
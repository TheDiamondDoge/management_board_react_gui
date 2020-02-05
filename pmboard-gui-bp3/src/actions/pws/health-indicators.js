export const HEALTH_LOAD = "HEALTH_LOAD";
export const HEALTH_LOAD_SUCCESS = "HEALTH_LOAD_SUCCESS";
export const HEALTH_INDICATORS_SAVE = "HEALTH_INDICATORS_SAVE";
export const HEALTH_COMMENTS_SAVE = "HEALTH_COMMENTS_SAVE";
export const HEALTH_ERROR = "HEALTH_ERROR";
export const HEALTH_RESET = "HEALTH_RESET";

export const healthLoad = () => ({
    type: HEALTH_LOAD,
});

export const healthLoadSuccess = ({data}) => ({
    type: HEALTH_LOAD_SUCCESS,
    healthIndicators: data,
});

export const healthIndicatorsSave = (data) => {
    return {
        type: HEALTH_INDICATORS_SAVE,
        data: {
            statuses:
                {...data.statuses}
        }
    };
};

export const healthCommentsSave = (data) => {
    return {
        type: HEALTH_COMMENTS_SAVE,
        data: {
            comments:
                {...data.comments}
        },
    }
};


export const healthError = (error) => ({
    type: HEALTH_ERROR,
    error: error,
});

export const healthReset = () => ({
    type: HEALTH_RESET
});
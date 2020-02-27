export const BLC_LOAD = "BLC_LOAD";
export const BLC_LOAD_SUCCESS = "BLC_LOAD_SUCCESS";
export const BLC_ERROR = "BLC_ERROR";
export const BLC_INDICATORS_SAVE = "BLC_INDICATORS_SAVE";
export const BLC_COMMENTS_SAVE = "BLC_COMMENTS_SAVE";
export const BLC_RESET = "BLC_RESET";

export const blcLoad = (projectId) => ({
    type: BLC_LOAD,
    projectId
});

export const blcLoadSuccess = (data) => ({
    type: BLC_LOAD_SUCCESS,
    data
});

export const blcError = (error) => ({
    type: BLC_ERROR,
    error
});

export const blcIndicatorsSave = (projectId, data) => ({
    type: BLC_INDICATORS_SAVE,
    data,
    projectId,
});

export const blcCommentsSave = (projectId, data) => ({
    type: BLC_COMMENTS_SAVE,
    data,
    projectId,
});

export const blcReset = () => ({
    type: BLC_RESET,
});
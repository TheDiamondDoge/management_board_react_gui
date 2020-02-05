export const BLC_LOAD = "BLC_LOAD";
export const BLC_LOAD_SUCCESS = "BLC_LOAD_SUCCESS";
export const BLC_ERROR = "BLC_ERROR";
export const BLC_INDICATORS_SAVE = "BLC_INDICATORS_SAVE";
export const BLC_COMMENTS_SAVE = "BLC_COMMENTS_SAVE";
export const BLC_RESET = "BLC_RESET";

export const blcLoad = () => ({
    type: BLC_LOAD,
});

export const blcLoadSuccess = (data) => ({
    type: BLC_LOAD_SUCCESS,
    data
});

export const blcError = (error) => ({
    type: BLC_ERROR,
    error
});

export const blcIndicatorsSave = (data) => ({
    type: BLC_INDICATORS_SAVE,
    data
});

export const blcCommentsSave = (data) => ({
    type: BLC_COMMENTS_SAVE,
    data
});

export const blcReset = () => ({
    type: BLC_RESET,
});
export const LOAD_BLC = "LOAD_BLC";
export const LOAD_BLC_SUCCESS = "LOAD_BLC_SUCCESS";
export const LOAD_BLC_FAILURE = "LOAD_BLC_FAILURE";
export const SAVE_BLC_INDICATORS = "SAVE_BLC_INDICATORS";
export const SAVE_BLC_COMMENTS = "SAVE_BLC_COMMENTS";
export const RESET_STATE = "RESET_STATE";

export const loadBlc = () => ({
    type: LOAD_BLC,
});

export const loadSuccess = (data) => ({
    type: LOAD_BLC_SUCCESS,
    data
});

export const loadFailure = (error) => ({
    type: LOAD_BLC_FAILURE,
    error
});

export const saveBlcIndicators = (data) => ({
    type: SAVE_BLC_INDICATORS,
    data
});

export const saveBlcComments = (data) => ({
    type: SAVE_BLC_COMMENTS,
    data
});

export const resetState = () => ({
    type: RESET_STATE,
});
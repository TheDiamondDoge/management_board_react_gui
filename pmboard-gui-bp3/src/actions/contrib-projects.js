export const LOAD_CONTRIB = "LOAD_CONTRIB";
export const LOAD_CONTRIB_SUCCESS = "LOAD_CONTRIB_SUCCESS";
export const LOAD_CONTRIB_FAIL = "LOAD_CONTRIB_FAIL";
export const RESET_CONTRIB = "RESET_CONTRIB";

export const loadContrib = () => ({
    type: LOAD_CONTRIB
});

export const loadContribSuccess = ({data}) => ({
    type: LOAD_CONTRIB_SUCCESS,
    data
});

export const loadContribFail = (error) => ({
    type: LOAD_CONTRIB_FAIL,
    error
});

export const resetContrib = () => ({
    type: RESET_CONTRIB
});
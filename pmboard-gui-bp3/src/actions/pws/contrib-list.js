export const CONTRIB_LOAD = "CONTRIB_LOAD";
export const CONTRIB_LOAD_SUCCESS = "CONTRIB_LOAD_SUCCESS";
export const CONTRIB_LOAD_FAIL = "CONTRIB_LOAD_FAIL";
export const CONTRIB_RESET = "CONTRIB_RESET";

export const contribLoad = (projectId) => ({
    type: CONTRIB_LOAD,
    projectId
});

export const contribLoadSuccess = ({data}) => ({
    type: CONTRIB_LOAD_SUCCESS,
    data
});

export const contribLoadFail = (error) => ({
    type: CONTRIB_LOAD_FAIL,
    error
});

export const contribReset = () => ({
    type: CONTRIB_RESET
});
export const CONTRIB_TABLE_LOAD = "CONTRIB_TABLE_LOAD";
export const CONTRIB_TABLE_LOAD_SUCCESS = "CONTRIB_TABLE_LOAD_SUCCESS";
export const CONTRIB_TABLE_ERROR = "CONTRIB_TABLE_ERROR";
export const CONTRIB_TABLE_RESET = "CONTRIB_TABLE_RESET";


export const loadContribTable = () => ({
    type: CONTRIB_TABLE_LOAD,
});

export const loadContribTableSuccess = ({data}) => ({
    type: CONTRIB_TABLE_LOAD_SUCCESS,
    data
});

export const errorContribTable = (error) => ({
    type: CONTRIB_TABLE_ERROR,
    error
});

export const resetContribTable = () => ({
    type: CONTRIB_TABLE_RESET,
});
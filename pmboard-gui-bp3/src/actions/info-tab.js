export const LOAD_INFO = "LOAD_INFO";
export const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS";
export const LOAD_INFO_FAIL = "LOAD_INFO_FAIL";
export const SAVE_INFO_DATA = "SAVE_INFO_DATA";
export const RESET_STATE = "RESET_STATE";

export const loadInfo = () => ({
        type: LOAD_INFO,
    }
);

export const loadInfoSuccess = ({data}) => ({
        type: LOAD_INFO_SUCCESS,
        data: data,
    }
);

export const loadInfoError = (error) => ({
        type: LOAD_INFO_FAIL,
        error: error
    }
);

export const saveInfoDate = (data) => ({
    type: SAVE_INFO_DATA,
    data
});

export const resetState = () => ({
    type: RESET_STATE
});
export const INFO_LOAD = "INFO_LOAD";
export const INFO_LOAD_SUCCESS = "INFO_LOAD_SUCCESS";
export const INFO_ERROR = "INFO_ERROR";
export const INFO_SAVE_DATA = "INFO_SAVE_DATA";
export const INFO_RESET = "INFO_RESET";

export const infoLoad = () => ({
        type: INFO_LOAD,
    }
);

export const infoLoadSuccess = ({data}) => ({
        type: INFO_LOAD_SUCCESS,
        data: data,
    }
);

export const infoError = (error) => ({
        type: INFO_ERROR,
        error: error
    }
);

export const infoSaveData = (data) => ({
    type: INFO_SAVE_DATA,
    data
});

export const infoReset = () => ({
    type: INFO_RESET
});
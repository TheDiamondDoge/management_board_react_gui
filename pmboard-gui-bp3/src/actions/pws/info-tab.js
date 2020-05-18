export const INFO_LOAD = "INFO_LOAD";
export const INFO_LOAD_SUCCESS = "INFO_LOAD_SUCCESS";
export const INFO_ERROR = "INFO_ERROR";
export const INFO_SAVE_DATA = "INFO_SAVE_DATA";
export const INFO_RESET = "INFO_RESET";

export const infoLoad = (projectId) => ({
        type: INFO_LOAD,
        projectId
    }
);

export const infoLoadSuccess = (data) => ({
        type: INFO_LOAD_SUCCESS,
        data: data,
    }
);

export const infoError = (error) => ({
        type: INFO_ERROR,
        error: error
    }
);

export const infoSaveData = (projectId, data) => ({
    type: INFO_SAVE_DATA,
    data,
    projectId,
});

export const infoReset = () => ({
    type: INFO_RESET
});
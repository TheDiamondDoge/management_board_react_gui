export const COST_LOAD = "COST_LOAD";
export const COST_LOAD_SUCCESS = "COST_LOAD_SUCCESS";
export const COST_UPLOAD = "COST_UPLOAD";
export const COST_ERROR = "COST_ERROR";
export const COST_RESET = "COST_RESET";

export const costLoad = () => ({
        type: COST_LOAD,
    }
);

export const costLoadSuccess = (data) => ({
        type: COST_LOAD_SUCCESS,
        data,
    }
);

export const costUpload = (error) => ({
    type: COST_UPLOAD,
});

export const costError = (error) => ({
    type: COST_ERROR,
    error,
});

export const costReset = () => ({
    type: COST_RESET
});
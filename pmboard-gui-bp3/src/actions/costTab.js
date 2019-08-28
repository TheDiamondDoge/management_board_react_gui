export const LOAD_COST = "LOAD_COST";
export const LOAD_COST_SUCCESS = "LOAD_COST_SUCCESS";
export const LOAD_COST_FAIL = "LOAD_COST_FAIL";
export const UPLOAD_COST = "SAVE_COST";
export const UPLOAD_COST_FAIL = "SAVE_COST_FAIL";
export const RESET_STATE = "RESET_STATE";

export const loadCost = () => ({
        type: LOAD_COST,
    }
);

export const loadSuccess = (data) => ({
        type: LOAD_COST_SUCCESS,
        data: data,
    }
);

export const loadError = (error) => ({
        type: LOAD_COST_FAIL,
        error: error
    }
);

export const uploadCost = (error) => ({
    type: UPLOAD_COST,
});

export const uploadCostFail = (error) => ({
    type: UPLOAD_COST_FAIL,
    error: error,
});

export const resetState = () => ({
    type: RESET_STATE
});
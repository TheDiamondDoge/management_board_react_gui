export const LOAD_INFO = "LOAD_INFO";
export const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS";
export const LOAD_INFO_FAIL = "LOAD_INFO_FAIL";
export const EDIT_GENERAL_DATA = "EDIT_GENERAL_DATA";
export const EDIT_MILESTONE_DATA = "EDIT_MILESTONE_DATA";
export const RESET_STATE = "RESET_STATE";

export const loadInfo = () => ({
        type: LOAD_INFO,
    }
);

export const loadSuccess = (data) => ({
        type: LOAD_INFO_SUCCESS,
        data: data,
    }
);

export const loadError = (error) => ({
        type: LOAD_INFO_FAIL,
        error: error
    }
);

export const editGeneralData = (data, id) => ({
    type: EDIT_GENERAL_DATA,
    data: data,
    id: id
});

export const editMilestoneData = (data, id) => ({
    type: EDIT_MILESTONE_DATA,
    data: data,
    id: id
});

export const resetState = () => ({
    type: RESET_STATE
});
export const ACTIONS_LOAD = "ACTIONS_LOAD";
export const ACTIONS_LOAD_SUCCESS = "ACTIONS_LOAD_SUCCESS";
export const ACTIONS_ERROR = "ACTIONS_ERROR";
export const ACTIONS_SAVE = "ACTIONS_SAVE";
export const ACTIONS_DELETE = "ACTIONS_DELETE";
export const ACTIONS_RESET = "ACTIONS_RESET";

export const actionsLoad = (projectId) => ({
    type: ACTIONS_LOAD,
    projectId
});

export const actionsLoadSuccess = ({data}) => ({
    type: ACTIONS_LOAD_SUCCESS,
    data
});

export const actionsError = (error) => ({
    type: ACTIONS_ERROR,
    error
});

export const actionSave = (projectId, data) => ({
    type: ACTIONS_SAVE,
    data,
    projectId
});

export const actionDelete = (projectId, uid) => ({
    type: ACTIONS_DELETE,
    uid,
    projectId,
});

export const actionsReset = () => ({
    type: ACTIONS_RESET
});
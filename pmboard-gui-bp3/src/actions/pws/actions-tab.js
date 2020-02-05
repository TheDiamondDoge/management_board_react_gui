export const ACTIONS_LOAD = "ACTIONS_LOAD";
export const ACTIONS_LOAD_SUCCESS = "ACTIONS_LOAD_SUCCESS";
export const ACTIONS_ERROR = "ACTIONS_ERROR";
export const ACTIONS_SAVE = "ACTIONS_SAVE";
export const ACTIONS_RESET = "ACTIONS_RESET";

export const actionsLoad = () => ({
    type: ACTIONS_LOAD,
});

export const actionsLoadSuccess = ({data}) => ({
    type: ACTIONS_LOAD_SUCCESS,
    data
});

export const actionsError = (error) => ({
    type: ACTIONS_ERROR,
    error
});

export const actionSave = (data) => ({
    type: ACTIONS_SAVE,
    data
});

export const actionsReset = () => ({
    type: ACTIONS_RESET
});
export const ACTIONS_LOAD = "ACTIONS_LOAD";
export const ACTIONS_LOAD_SUCCESS = "ACTIONS_LOAD_SUCCESS";
export const ACTIONS_FAILURE = "ACTIONS_LOAD_FAILURE";
export const ACTIONS_SAVE = "ACTIONS_SAVE";
export const RESET_STATE = "RESET_STATE";

export const loadActions = () => ({
    type: ACTIONS_LOAD,
});

export const loadActionsSuccess = ({data}) => ({
    type: ACTIONS_LOAD_SUCCESS,
    data
});

export const actionsFailure = (error) => ({
    type: ACTIONS_FAILURE,
    error
});

export const saveAction = (data) => ({
    type: ACTIONS_SAVE,
    data
});

export const resetState = () => ({
    type: RESET_STATE
});
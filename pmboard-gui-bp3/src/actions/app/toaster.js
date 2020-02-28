import {Intent} from "@blueprintjs/core";

export const ADD_SUCCESS_TOAST = "ADD_SUCCESS_TOAST";
export const ADD_WARNING_TOAST = "ADD_WARNING_TOAST";
export const ADD_DANGER_TOAST = "ADD_DANGER_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

export const addSuccessToast = (message) => ({
    type: ADD_SUCCESS_TOAST,
    intent: Intent.SUCCESS,
    message,
});

export const addWarningToast = (message) => ({
    type: ADD_WARNING_TOAST,
    intent: Intent.WARNING,
    message
});

export const addDangerToast = (message) => ({
    type: ADD_DANGER_TOAST,
    intent: Intent.DANGER,
    message
});

export const hideToast = (id) => ({
    type: HIDE_TOAST,
    id
});


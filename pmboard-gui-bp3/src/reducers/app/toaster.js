import {ADD_DANGER_TOAST, ADD_SUCCESS_TOAST, ADD_WARNING_TOAST, HIDE_TOAST} from "../../actions/app/toaster";

const initState = {
    toasts: [],
    toastsCount: 0
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case ADD_SUCCESS_TOAST:
        case ADD_WARNING_TOAST:
        case ADD_DANGER_TOAST:
            return {
                ...state,
                toasts: [...state.toasts, createToastObject(state.toastsCount, action.message, action.intent)],
                toastsCount: state.toastsCount + 1
            };
        case HIDE_TOAST:
            return {
                ...state,
                toasts: getArrWithHiddenToast(state.toasts, action.id),
            };
        default:
            return state;
    }
}

function createToastObject(id, message, intent) {
    return {id, message, intent, hidden: false}
}

function getArrWithHiddenToast(toasts, hideId) {
    let modifiedToasts = [...toasts];
    for (let i = 0; i < modifiedToasts.length; i++) {
        if (modifiedToasts[i].id === hideId) {
            modifiedToasts[i].hidden = true;
            return modifiedToasts;
        }
    }

    return modifiedToasts;
}
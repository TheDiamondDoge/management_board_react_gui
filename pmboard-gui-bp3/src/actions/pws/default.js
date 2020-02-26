export const PROJECT_DEFAULTS_LOAD = "PROJECT_DEFAULTS_LOAD";
export const PROJECT_DEFAULTS_LOAD_SUCCESS = "PROJECT_DEFAULTS_LOAD_SUCCESS";
export const PROJECT_DEFAULTS_ERROR = "PROJECT_DEFAULTS_ERROR";
export const PROJECT_DEFAULTS_RESET = "PROJECT_DEFAULTS_RESET";

export const loadProjectDefaults = () => ({
    type: PROJECT_DEFAULTS_LOAD
});

export const loadProjectDefaultsSuccess = ({data}) => ({
    type: PROJECT_DEFAULTS_LOAD_SUCCESS,
    data
});

export const errorProjectDefaults = (error) => ({
    type: PROJECT_DEFAULTS_ERROR,
    error
});

export const resetProjectDefaults = () => ({
    type: PROJECT_DEFAULTS_RESET,
});
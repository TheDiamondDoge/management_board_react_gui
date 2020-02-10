export const REQUIREMENTS_LOAD = "REQUIREMENTS_LOAD";
export const REQUIREMENTS_LOAD_SUCCESS = "REQUIREMENTS_LOAD_SUCCESS";
export const REQUIREMENTS_ERROR = "REQUIREMENTS_ERROR";
export const REQUIREMENTS_RESET = "REQUIREMENTS_RESET";

export const loadRequirements = () => ({
    type: REQUIREMENTS_LOAD,
});

export const loadRequirementsSuccess = ({data}) => ({
    type: REQUIREMENTS_LOAD_SUCCESS,
    data,
});

export const errorRequirements = (error) => ({
    type: REQUIREMENTS_ERROR,
    error,
});

export const resetRequirements = () => ({
    type: REQUIREMENTS_RESET
});

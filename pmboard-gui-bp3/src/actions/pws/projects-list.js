export const PROJECTS_LOAD = "PROJECTS_LOAD";
export const PROJECTS_LOAD_SUCCESS = "PROJECTS_LOAD_SUCCESS";
export const PROJECTS_ERROR = "PROJECTS_ERROR";
export const PROJECTS_RESET = "PROJECTS_RESET";

export const loadProjects = (isEpm, status) => ({
    type: PROJECTS_LOAD,
    isEpm,
    status
});

export const loadProjectsSuccess = (data) => ({
    type: PROJECTS_LOAD_SUCCESS,
    data
});

export const projectsError = (error) => ({
    type: PROJECTS_ERROR,
    error
});

export const resetProjects = () => ({
    type: PROJECTS_RESET,
});
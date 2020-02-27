export const MILESTONES_LOAD = "MILESTONES_LOAD";
export const MILESTONES_SAVE = "MILESTONES_SAVE";
export const MILESTONES_LOAD_SUCCESS = "MILESTONES_LOAD_SUCCESS";
export const MILESTONES_ERROR = "MILESTONES_ERROR";
export const MILESTONES_RESET = "MILESTONES_RESET";

export const milestonesLoad = (projectId) => ({
    type: MILESTONES_LOAD,
    projectId
});

export const milestonesSave = (projectId, data) => ({
    type: MILESTONES_SAVE,
    data,
    projectId,
});

export const milestonesLoadSuccess = ({data}) => ({
    type: MILESTONES_LOAD_SUCCESS,
    data
});

export const milestonesError = (error) => ({
    type: MILESTONES_ERROR,
    error
});

export const milestonesReset = () => ({
    type: MILESTONES_RESET
});
export const LOAD_MILESTONES = "LOAD_MILESTONES";
export const SAVE_MILESTONES = "SAVE_MILESTONES";
export const LOAD_MILESTONES_SUCCESS = "LOAD_MILESTONES_SUCCESS";
export const LOAD_MILESTONES_FAIL = "LOAD_MILESTONES_FAIL";
export const RESET_MILESTONES_STATE = "RESET_MILESTONES_STATE";

export const loadMilestones = () => ({
    type: LOAD_MILESTONES,
});

export const saveMilestones = (data) => ({
    type: SAVE_MILESTONES,
    data
});

export const loadMilestonesSuccess = ({data}) => ({
    type: LOAD_MILESTONES_SUCCESS,
    data
});

export const loadMilestonesFail = (error) => ({
    type: LOAD_MILESTONES_FAIL,
    error
});

export const resetMilestonesState = () => ({
    type: RESET_MILESTONES_STATE
});
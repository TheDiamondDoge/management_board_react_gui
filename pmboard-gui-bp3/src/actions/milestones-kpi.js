export const LOAD_MILESTONES_KPI = "LOAD_MILESTONES_KPI";
export const MILESTONES_KPI_SUCCESS = "MILESTONES_KPI_SUCCESS";
export const MILESTONES_KPI_FAIL = "MILESTONES_KPI_FAIL";
export const MILESTONES_KPI_RESET_STATE = "MILESTONES_KPI_RESET_STATE";

export const loadMilestonesKpi = () => ({
    type: LOAD_MILESTONES_KPI
});

export const milestonesKpiSuccess = ({data}) => ({
    type: MILESTONES_KPI_SUCCESS,
    data
});

export const milestonesKpiFail = () => ({
    type: MILESTONES_KPI_FAIL,
});

export const milestonesKpiResetState = () => ({
    type: MILESTONES_KPI_RESET_STATE,
});
export const MILESTONES_KPI_LOAD = "MILESTONES_KPI_LOAD";
export const MILESTONES_KPI_SUCCESS = "MILESTONES_KPI_SUCCESS";
export const MILESTONES_KPI_ERROR = "MILESTONES_KPI_ERROR";
export const MILESTONES_KPI_RESET = "MILESTONES_KPI_RESET";

export const milestonesKpiLoad = (projectId) => ({
    type: MILESTONES_KPI_LOAD,
    projectId
});

export const milestonesKpiSuccess = ({data}) => ({
    type: MILESTONES_KPI_SUCCESS,
    data
});

export const milestonesKpiError = () => ({
    type: MILESTONES_KPI_ERROR,
});

export const milestonesKpiReset = () => ({
    type: MILESTONES_KPI_RESET,
});
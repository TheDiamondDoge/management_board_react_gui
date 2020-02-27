export const BACKLOG_CHART_LOAD = "BACKLOG_CHART_LOAD";
export const BACKLOG_CHART_LOAD_SUCCESS = "BACKLOG_CHART_LOAD_SUCCESS";
export const BACKLOG_ERROR = "BACKLOG_ERROR";
export const BACKLOG_RESET = "BACKLOG_RESET";

export const loadBacklogChart = (projectId) => ({
    type: BACKLOG_CHART_LOAD,
    projectId
});

export const loadBacklogChartSuccess = ({data}) => ({
    type: BACKLOG_CHART_LOAD_SUCCESS,
    data
});

export const errorBacklog = (error) => ({
    type: BACKLOG_ERROR,
    error
});

export const resetBacklog = () => ({
    type: BACKLOG_RESET,
});
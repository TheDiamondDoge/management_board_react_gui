export const DEFECTS_CHART_LOAD = "DEFECTS_CHART_LOAD";
export const DEFECTS_CHART_LOAD_SUCCESS = "DEFECTS_CHART_LOAD_SUCCESS";
export const DEFECTS_ERROR = "DEFECTS_ERROR";
export const DEFECTS_RESET = "DEFECTS_RESET";

export const loadDefectsChart = (projectId) => ({
    type: DEFECTS_CHART_LOAD,
    projectId
});

export const loadDefectsChartSuccess = (data) => ({
    type: DEFECTS_CHART_LOAD_SUCCESS,
    data
});

export const errorDefects = (error) => ({
    type: DEFECTS_ERROR,
    error
});

export const resetDefects = () => ({
    type: DEFECTS_RESET,
});
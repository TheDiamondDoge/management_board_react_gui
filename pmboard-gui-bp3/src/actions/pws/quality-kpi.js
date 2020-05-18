export const QUALITY_KPI_LOAD = "QUALITY_KPI_LOAD";
export const QUALITY_KPI_SYNC = "QUALITY_KPI_SYNC";
export const QUALITY_KPI_SAVE = "QUALITY_KPI_SAVE";
export const QUALITY_KPI_SUCCESS = "QUALITY_KPI_SUCCESS";
export const QUALITY_KPI_ERROR = "QUALITY_KPI_ERROR";
export const QUALITY_KPI_RESET = "QUALITY_KPI_RESET";

export const qualityKpiLoad = (projectId) => ({
    type: QUALITY_KPI_LOAD,
    projectId
});

export const qualityKpiSuccess = (data) => ({
    type: QUALITY_KPI_SUCCESS,
    data
});

export const qualityKpiSync = (projectId) => ({
    type: QUALITY_KPI_SYNC,
    projectId
});

export const qualityKpiSave = (projectId, data) => ({
    type: QUALITY_KPI_SAVE,
    data,
    projectId,
});

export const qualityKpiError = () => ({
    type: QUALITY_KPI_ERROR,
});

export const qualityKpiReset = () => ({
    type: QUALITY_KPI_RESET,
});
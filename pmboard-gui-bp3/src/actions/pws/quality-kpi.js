export const QUALITY_KPI_LOAD = "QUALITY_KPI_LOAD";
export const QUALITY_KPI_SYNC = "QUALITY_KPI_SYNC";
export const QUALITY_KPI_SAVE = "QUALITY_KPI_SAVE";
export const QUALITY_KPI_SUCCESS = "QUALITY_KPI_SUCCESS";
export const QUALITY_KPI_ERROR = "QUALITY_KPI_ERROR";
export const QUALITY_KPI_RESET = "QUALITY_KPI_RESET";

export const qualityKpiLoad = () => ({
    type: QUALITY_KPI_LOAD
});

export const qualityKpiSuccess = ({data}) => ({
    type: QUALITY_KPI_SUCCESS,
    data
});

export const qualityKpiSync = () => ({
    type: QUALITY_KPI_SYNC,
});

export const qualityKpiSave = (data) => ({
    type: QUALITY_KPI_SAVE,
    data
});

export const qualityKpiError = () => ({
    type: QUALITY_KPI_ERROR,
});

export const qualityKpiReset = () => ({
    type: QUALITY_KPI_RESET,
});
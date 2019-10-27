export const LOAD_QUALITY_KPI = "LOAD_QUALITY_KPI";
export const QUALITY_KPI_SYNC = "QUALITY_KPI_SYNC";
export const QUALITY_KPI_SAVE = "QUALITY_KPI_SYNC";
export const QUALITY_KPI_SUCCESS = "QUALITY_KPI_SUCCESS";
export const QUALITY_KPI_FAIL = "QUALITY_KPI_FAIL";
export const QUALITY_KPI_RESET_STATE = "QUALITY_KPI_RESET_STATE";

export const loadQualityKpi = () => ({
    type: LOAD_QUALITY_KPI
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

export const qualityKpiFail = () => ({
    type: QUALITY_KPI_FAIL,
});

export const qualityKpiResetState = () => ({
    type: QUALITY_KPI_RESET_STATE,
});
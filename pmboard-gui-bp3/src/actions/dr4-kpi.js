export const LOAD_DR4_KPI = "LOAD_DR4_KPI";
export const DR4_KPI_SUCCESS = "DR4_KPI_SUCCESS";
export const DR4_KPI_FAIL = "DR4_KPI_FAIL";
export const DR4_KPI_RESET_STATE = "DR4_KPI_RESET_STATE";

export const loadDr4Kpi = () => ({
    type: LOAD_DR4_KPI
});

export const dr4KpiSuccess = (data) => ({
    type: DR4_KPI_SUCCESS,
    data
});

export const dr4KpiFail = () => ({
    type: DR4_KPI_FAIL,
});

export const dr4KpiResetState = () => ({
    type: DR4_KPI_RESET_STATE,
});
export const DR4_KPI_LOAD = "DR4_KPI_LOAD";
export const DR4_KPI_SUCCESS = "DR4_KPI_SUCCESS";
export const DR4_KPI_ERROR = "DR4_KPI_ERROR";
export const DR4_KPI_RESET = "DR4_KPI_RESET";

export const dr4KpiLoad = () => ({
    type: DR4_KPI_LOAD
});

export const dr4KpiSuccess = ({data}) => ({
    type: DR4_KPI_SUCCESS,
    data
});

export const dr4KpiError = () => ({
    type: DR4_KPI_ERROR,
});

export const dr4KpiReset = () => ({
    type: DR4_KPI_RESET,
});
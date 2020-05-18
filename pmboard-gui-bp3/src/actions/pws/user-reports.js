export const USER_REPORTS_LOAD = "USER_REPORTS_LOAD";
export const USER_REPORTS_LOAD_SUCCESS = "USER_REPORTS_LOAD_SUCCESS";
export const USER_REPORTS_SAVE = "USER_REPORTS_SAVE";
export const USER_REPORTS_ERROR = "USER_REPORTS_ERROR";
export const USER_REPORTS_RESET = "USER_REPORTS_RESET";

export const loadUserReports = (projectId) => ({
    type: USER_REPORTS_LOAD,
    projectId
});

export const loadUserReportsSuccess = (data) => ({
    type: USER_REPORTS_LOAD_SUCCESS,
    data
});


export const saveUserReport = (projectId, data) => ({
    type: USER_REPORTS_SAVE,
    data,
    projectId
});

export const errorUserReports = (error) => ({
    type: USER_REPORTS_ERROR,
    error
});

export const resetUserReports = () => ({
    type: USER_REPORTS_RESET
});
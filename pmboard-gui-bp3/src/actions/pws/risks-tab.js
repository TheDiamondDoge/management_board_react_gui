export const RISKS_LOAD = "RISKS_LOAD";
export const RISKS_LOAD_SUCCESS = "RISKS_LOAD_SUCCESS";
export const RISKS_IDS_LOAD = "RISKS_IDS_LOAD";
export const RISKS_IDS_LOAD_SUCCESS = "RISKS_IDS_LOAD_SUCCESS";
export const RISKS_ERROR = "RISKS_ERROR";
export const RISK_SAVE = "RISK_SAVE";
export const RISKS_UPLOAD = "RISKS_UPLOAD";
export const RISKS_UPLOAD_SUCCESS = "RISKS_UPLOAD_SUCCESS";
export const RISKS_ERRORS_SHOWED = "RISKS_ERRORS_SHOWED";
export const RISKS_DOWNLOAD = "RISKS_DOWNLOAD";
export const RISKS_GET_LAST_UPLOADED = "RISKS_GET_LAST_UPLOADED";
export const RISK_RESET = "RISK_RESET";

export const loadRisks = (projectId) => ({
    type: RISKS_LOAD,
    projectId
});

export const loadSuccess = ({data}) => ({
    type: RISKS_LOAD_SUCCESS,
    data
});

export const loadRiskIds = (projectId) => ({
    type: RISKS_IDS_LOAD,
    projectId
});

export const loadRisksSuccess = ({data}) => ({
    type: RISKS_IDS_LOAD_SUCCESS,
    data
});

export const riskError = (error) => ({
    type: RISKS_ERROR,
    error
});

export const riskUploadSucceed = (errors) => ({
    type: RISKS_UPLOAD_SUCCESS,
    errors
});

export const saveRisk = (projectId, data) => ({
    type: RISK_SAVE,
    data,
    projectId,
});

export const uploadRisks = (projectId, data) => ({
    type: RISKS_UPLOAD,
    data,
    projectId,
});

export const setErrorsShowedTrue = () => ({
    type: RISKS_ERRORS_SHOWED
});

export const downloadRisks = (projectId, projectName) => ({
    type: RISKS_DOWNLOAD,
    projectId,
    projectName
});

export const getLastUploadedRisks = (projectId, projectName) => ({
    type: RISKS_GET_LAST_UPLOADED,
    projectId,
    projectName
});

export const resetRisks = () => ({
    type: RISK_RESET
});


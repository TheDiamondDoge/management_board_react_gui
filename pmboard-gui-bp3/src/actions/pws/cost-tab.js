export const COST_LOAD = "COST_LOAD";
export const COST_LOAD_SUCCESS = "COST_LOAD_SUCCESS";
export const COST_UPLOAD = "COST_UPLOAD";
export const COST_GET_LAST_UPLOADED = "COST_GET_LAST_UPLOADED";
export const COST_ERROR = "COST_ERROR";
export const COST_RESET = "COST_RESET";

export const costLoad = (projectId) => ({
    type: COST_LOAD,
    projectId
});

export const costLoadSuccess = ({data}) => ({
    type: COST_LOAD_SUCCESS,
    data,
});

export const costUpload = (projectId, data) => ({
    type: COST_UPLOAD,
    projectId,
    data
});

export const costGetLastUploaded = (projectId, projectName) => ({
    type: COST_GET_LAST_UPLOADED,
    projectId,
    projectName
});

export const costError = (error) => ({
    type: COST_ERROR,
    error,
});

export const costReset = () => ({
    type: COST_RESET
});
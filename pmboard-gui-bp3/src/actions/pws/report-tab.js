export const REPORT_LOAD = "REPORT_LOAD";
export const REPORT_LOAD_SUCCESS = "REPORT_LOAD_SUCCESS";
export const SNAPSHOT_LOAD = "SNAPSHOT_LOAD";
export const SNAPSHOT_LOAD_SUCCESS = "SNAPSHOT_LOAD_SUCCESS";
export const REPORT_ERROR = "REPORT_ERROR";
export const REPORT_RESET = "REPORT_RESET";

export const REPORT_IMAGES_LOAD = "REPORT_IMAGES_LOAD";
export const REPORT_IMAGES_LOAD_SUCCESS = "REPORT_IMAGES_LOAD_SUCCESS";
export const REPORT_IMAGES_UPLOAD = "REPORT_IMAGES_UPLOAD";
export const REPORT_IMAGES_UPLOAD_SUCCESS = "REPORT_IMAGES_UPLOAD_SUCCESS";
export const REPORT_IMAGES_DELETE = "REPORT_IMAGES_DELETE";
export const REPORT_IMAGES_ERROR = "REPORT_IMAGES_ERROR";
export const RESET_REPORT_IMAGES = "RESET_REPORT_IMAGES";


export const loadReport = (projectId) => ({
    type: REPORT_LOAD,
    projectId
});

export const loadReportSuccess = (data) => ({
    type: REPORT_LOAD_SUCCESS,
    data
});

export const loadSnapshot = (projectId) => ({
    type: SNAPSHOT_LOAD,
    projectId
});

export const loadSnapshotSuccess = (data) => ({
    type: SNAPSHOT_LOAD_SUCCESS,
    data
});

export const errorReport = (error) => ({
    type: REPORT_ERROR,
    error
});

export const resetReport = () => ({
    type: REPORT_RESET,
});

export const uploadReportImages = (projectId, files) => ({
    type: REPORT_IMAGES_UPLOAD,
    projectId,
    files
});

export const loadReportImages = (projectId) => ({
    type: REPORT_IMAGES_LOAD,
    projectId,
});

export const loadReportImagesSuccess = (data) => ({
    type: REPORT_IMAGES_LOAD_SUCCESS,
    data
});

export const deleteReportImage = (projectId, filename) => ({
    type: REPORT_IMAGES_DELETE,
    projectId,
    filename
});

export const uploadReportImagesSuccess = () => ({
    type: REPORT_IMAGES_UPLOAD_SUCCESS,
});

export const reportImagesError = (error) => ({
    type: REPORT_IMAGES_ERROR,
    error
});

export const resetReportImages = () => ({
    type: RESET_REPORT_IMAGES,
});
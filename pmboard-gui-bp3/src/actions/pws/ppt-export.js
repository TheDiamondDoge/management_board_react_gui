export const EXPORT_PPT = "EXPORT_PPT";
export const EXPORT_SUCCESS = "EXPORT_SUCCESS";
export const EXPORT_FAILED = "EXPORT_FAILED";

export const exportPpt = (projectId, pptType) => ({
    type: EXPORT_PPT,
    projectId,
    pptType
});

export const exportSuccess = () => ({
    type: EXPORT_SUCCESS,
});

export const exportFailed = () => ({
    type: EXPORT_FAILED,
});



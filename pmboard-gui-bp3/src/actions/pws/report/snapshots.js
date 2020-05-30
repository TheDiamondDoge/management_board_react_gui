export const SNAPSHOT_LOAD = "SNAPSHOT_LOAD";
export const SNAPSHOT_LOAD_SUCCESS = "SNAPSHOT_LOAD_SUCCESS";
export const SNAPSHOT_ERROR = "SNAPSHOT_ERROR";
export const RESET_SNAPSHOT = "RESET_SNAPSHOT";

export const loadSnapshot = (projectId) => ({
    type: SNAPSHOT_LOAD,
    projectId
});

export const loadSnapshotSuccess = (data) => ({
    type: SNAPSHOT_LOAD_SUCCESS,
    data
});

export const snapshotError = (error) => ({
    type: SNAPSHOT_ERROR,
    error
});

export const snapshotReset = () => ({
    type: RESET_SNAPSHOT
});
import {
    REPORT_ERROR, REPORT_IMAGES_DELETE,
    REPORT_IMAGES_ERROR,
    REPORT_IMAGES_LOAD,
    REPORT_IMAGES_LOAD_SUCCESS,
    REPORT_IMAGES_UPLOAD,
    REPORT_IMAGES_UPLOAD_SUCCESS,
    REPORT_LOAD,
    REPORT_LOAD_SUCCESS,
    REPORT_RESET,
    SNAPSHOT_LOAD,
    SNAPSHOT_LOAD_SUCCESS
} from "../../actions/pws/report-tab";

const initState = {
    loading: true,
    payload: {},
    images: [],
    imagesLoading: true,
    snapshots: [],
    snapshotLoading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case REPORT_LOAD:
            return {
                ...state,
                loading: true,
            };
        case REPORT_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data,
            };
        case SNAPSHOT_LOAD:
            return {
                ...state,
                snapshotLoading: true,
            };
        case SNAPSHOT_LOAD_SUCCESS:
            return {
                ...state,
                snapshots: action.data,
                snapshotLoading: false,
            };
        case REPORT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case REPORT_RESET:
            return initState;
            //////////
        case REPORT_IMAGES_LOAD:
            return {
                ...state,
                imagesLoading: true,
            };
        case REPORT_IMAGES_LOAD_SUCCESS:
            return {
                ...state,
                imagesLoading: false,
                images: action.data,
            };
        case REPORT_IMAGES_UPLOAD:
            return {
                ...state,
                imagesLoading: true,
            };
        case REPORT_IMAGES_UPLOAD_SUCCESS:
            return {
                ...state,
                imagesLoading: false,
            };
        case REPORT_IMAGES_DELETE:
            return {
                ...state,
            };
        case REPORT_IMAGES_ERROR:
            return {
                ...state,
                imagesLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}
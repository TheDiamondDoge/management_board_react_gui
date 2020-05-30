import {
    REPORT_IMAGES_DELETE, REPORT_IMAGES_ERROR,
    REPORT_IMAGES_LOAD,
    REPORT_IMAGES_LOAD_SUCCESS,
    REPORT_IMAGES_UPLOAD,
    REPORT_IMAGES_UPLOAD_SUCCESS,
    RESET_REPORT_IMAGES
} from "../../../actions/pws/report/images";

const initState = {
    loading: true,
    payload: [],
    error: ""
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case REPORT_IMAGES_LOAD:
            return {
                ...state,
                loading: true,
            };
        case REPORT_IMAGES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data,
            };
        case REPORT_IMAGES_UPLOAD:
            return {
                ...state,
                loading: true,
            };
        case REPORT_IMAGES_UPLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case REPORT_IMAGES_DELETE:
            return {
                ...state,
            };
        case REPORT_IMAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case RESET_REPORT_IMAGES:
            return initState;
        default:
            return state;
    }
}
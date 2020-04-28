import {EXPORT_PPT, EXPORT_FAILED, EXPORT_SUCCESS} from "../../actions/pws/ppt-export";

const initialState = {
    loading: false,
    type: "",
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case EXPORT_PPT:
            return {
                ...state,
                loading: true,
                type: action.pptType,
                snapshotId: action.snapshotId
            };
        case EXPORT_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case EXPORT_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
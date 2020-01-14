import {LOAD_CONTRIB, LOAD_CONTRIB_FAIL, LOAD_CONTRIB_SUCCESS, RESET_CONTRIB} from "../../actions/pws/contrib-projects";

const initialState = {
    loading: true,
    payload: []
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case LOAD_CONTRIB:
            return {
                ...state,
                loading: true,
            };
        case LOAD_CONTRIB_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case LOAD_CONTRIB_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case RESET_CONTRIB:
            return initialState;
        default:
            return state;
    }
}
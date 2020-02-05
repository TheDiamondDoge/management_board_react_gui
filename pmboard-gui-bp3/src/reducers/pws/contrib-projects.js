import {CONTRIB_LOAD, CONTRIB_LOAD_FAIL, CONTRIB_LOAD_SUCCESS, CONTRIB_RESET} from "../../actions/pws/contrib-projects";

const initialState = {
    loading: true,
    payload: []
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case CONTRIB_LOAD:
            return {
                ...state,
                loading: true,
            };
        case CONTRIB_LOAD_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case CONTRIB_LOAD_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case CONTRIB_RESET:
            return initialState;
        default:
            return state;
    }
}
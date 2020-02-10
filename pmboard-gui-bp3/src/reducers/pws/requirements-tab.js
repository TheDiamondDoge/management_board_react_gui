import {
    REQUIREMENTS_ERROR,
    REQUIREMENTS_LOAD,
    REQUIREMENTS_LOAD_SUCCESS,
    REQUIREMENTS_RESET
} from "../../actions/pws/requirements-tab";

const initialState = {
    loading: true,
    payload: [],
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case REQUIREMENTS_LOAD:
            return {
                ...state,
                loading: true,
            };
        case REQUIREMENTS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case REQUIREMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case REQUIREMENTS_RESET:
            return initialState;
        default:
            return state;
    }
}
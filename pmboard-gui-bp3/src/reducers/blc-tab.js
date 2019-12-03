import {
    LOAD_BLC,
    LOAD_BLC_FAILURE,
    LOAD_BLC_SUCCESS,
    RESET_STATE,
    SAVE_BLC_COMMENTS, SAVE_BLC_INDICATORS,
} from "../actions/blc-tab";

const initState = {
    loading: true,
    payload: {},
    error: ""
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_BLC:
            return {
                ...state,
                loading: true,
            };
        case LOAD_BLC_SUCCESS:
            return {
                ...state,
                payload: {...action.data},
                loading: false,
            };
        case LOAD_BLC_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case SAVE_BLC_INDICATORS:
        case SAVE_BLC_COMMENTS:
            return {
                ...state,
                loading: true,
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}
import {
    BLC_LOAD,
    BLC_ERROR,
    BLC_LOAD_SUCCESS,
    BLC_RESET,
    BLC_COMMENTS_SAVE, BLC_INDICATORS_SAVE,
} from "../../actions/pws/blc-tab";

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
        case BLC_LOAD:
            return {
                ...state,
                loading: true,
            };
        case BLC_LOAD_SUCCESS:
            return {
                ...state,
                payload: {...action.data},
                loading: false,
            };
        case BLC_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case BLC_INDICATORS_SAVE:
        case BLC_COMMENTS_SAVE:
            return {
                ...state,
                loading: true,
            };
        case BLC_RESET:
            return initState;
        default:
            return state;
    }
}
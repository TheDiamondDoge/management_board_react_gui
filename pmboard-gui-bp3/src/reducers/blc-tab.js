import {LOAD_BLC, LOAD_BLC_FAILURE, LOAD_BLC_SUCCESS, RESET_STATE} from "../actions/blc-tab";

const initState = {
    loaded: false,
    data: {},
    error: "",
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_BLC:
            return {
                ...state
            };
        case LOAD_BLC_SUCCESS:
            return {
                ...state,
                data: {...action.data},
                loaded: true,
            };
        case LOAD_BLC_FAILURE:
            return {
                ...state,
                loaded: false,
                error: action.error,
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}
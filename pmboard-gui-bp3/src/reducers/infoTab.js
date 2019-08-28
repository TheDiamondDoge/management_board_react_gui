import {LOAD_INFO, LOAD_INFO_FAIL, LOAD_INFO_SUCCESS, RESET_STATE} from '../actions/infoTab';

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
        case LOAD_INFO:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_INFO_SUCCESS:
            return {
                ...state,
                loaded: true,
                data: action.data,
            };
        case LOAD_INFO_FAIL:
            return {
                ...state,
                loaded: false,
                error: action.error
            };
        case RESET_STATE:
        default:
            return initState;
    }
}
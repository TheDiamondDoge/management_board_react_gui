import {
    COST_LOAD,
    COST_LOAD_SUCCESS,
    COST_UPLOAD,
    COST_ERROR,
    COST_RESET,
    COST_GET_LAST_UPLOADED
} from '../../actions/pws/cost-tab';

const initState = {
    loading: true,
    payload: {}
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case COST_LOAD:
            return {
                ...state,
                loading: true,
            };
        case COST_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data,
            };
        case COST_UPLOAD:
            return {
                ...state,
                loading: true,
            };
        case COST_GET_LAST_UPLOADED:
            return {
                ...state,
            };
        case COST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case COST_RESET:
            return initState;
        default:
            return state;
    }
}
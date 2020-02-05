import {COST_LOAD, COST_LOAD_SUCCESS, COST_UPLOAD, COST_ERROR, COST_RESET} from '../../actions/pws/cost-tab';

const initState = {
    loaded: false,
    data: {},
    filepath: "",
    error: {},
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case COST_LOAD:
            return {
                ...state,
            };
        case COST_LOAD_SUCCESS:
            return {
                ...state,
                loaded: true,
                data: action.data,
            };
        case COST_UPLOAD:
            return {
                ...state,
            };
        case COST_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case COST_RESET:
            return initState;
        default:
            return state;
    }
}
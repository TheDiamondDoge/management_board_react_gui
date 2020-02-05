import {
    INDICATORS_LOAD,
    INDICATORS_ERROR,
} from '../../actions/pws/indicators-tab';

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case INDICATORS_LOAD:
            return {
                ...state,
            };
        case INDICATORS_ERROR:
            return {
                ...state,
            };
        default:
            return state;
    }
}
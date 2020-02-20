import {
    CONTRIB_TABLE_ERROR,
    CONTRIB_TABLE_LOAD,
    CONTRIB_TABLE_LOAD_SUCCESS,
    CONTRIB_TABLE_RESET
} from "../../actions/pws/contrib-table";

const initState = {
    loading: true,
    payload: {},
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case CONTRIB_TABLE_LOAD:
            return {
                ...state,
                loading: true
            };
        case CONTRIB_TABLE_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.data
            };
        case CONTRIB_TABLE_ERROR:
            return {
                ...state,
                loading: false,
                payload: action.error
            };
        case CONTRIB_TABLE_RESET:
            return initState;
        default:
            return state;
    }
}
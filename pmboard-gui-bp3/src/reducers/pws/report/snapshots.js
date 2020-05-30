import {SNAPSHOT_LOAD, SNAPSHOT_LOAD_SUCCESS, SNAPSHOT_ERROR, RESET_SNAPSHOT} from "../../../actions/pws/report/snapshots";

const initState = {
    loading: true,
    payload: [],
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case SNAPSHOT_LOAD:
            return {
                ...state,
                loading: true,
            };
        case SNAPSHOT_LOAD_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
            };
        case SNAPSHOT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case RESET_SNAPSHOT:
            return initState;
        default:
            return state;
    }
}
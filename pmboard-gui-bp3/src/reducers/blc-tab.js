import {EDIT_ROW_VALUE, LOAD_BLC, LOAD_BLC_FAILURE, LOAD_BLC_SUCCESS, RESET_STATE} from "../actions/blc-tab";

const initState = {
    loaded: false,
    pm: {},
    pmo: {},
    sales: {},
    error: "",
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_BLC:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_BLC_SUCCESS:
            return {
                ...state,
                ...action.data,
                loaded: true,
            };
        case LOAD_BLC_FAILURE:
            return {
                ...state,
                loaded: false,
                error: action.error,
            };
        case EDIT_ROW_VALUE:
            return {
                ...state,
                [action.fieldData.propKey]: {...editRowData(state, action)}
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}

let editRowData = (state, action) => {
    console.log(state);
    console.log(action);

    let rowObject = {...state[action.fieldData.propKey]};
    rowObject.indicators[action.fieldData.key] = action.fieldData.value;
    console.log({...state[action.fieldData.propKey]});

    return rowObject;
};
import {LEFT_MENU_EXPANDED} from "../../actions/app/app-settings";

const initState = {
    isNavMenuExpanded: true,
};

export default (state, action) => {
    console.log("APP REDUCER", state)
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case LEFT_MENU_EXPANDED:
            return {
                ...state,
                isNavMenuExpanded: !state.isNavMenuExpanded
            }
        default:
            return state;
    }
}
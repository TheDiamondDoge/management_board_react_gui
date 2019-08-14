import {TEST_FAIL, TEST_SUCCESS} from "../actions/test";

const initialState = {
    test: true,
    testPassed: false,
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case TEST_SUCCESS:
            return {
                ...state,
                test: true,
                testPassed: true
            };
        case TEST_FAIL:
            return {
                ...state,
                test: false,
                testPassed: false,
            };
        default:
            return state;
    }
}
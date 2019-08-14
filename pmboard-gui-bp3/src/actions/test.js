export const TEST_SUCCESS = "TEST_SUCCESS";
export const TEST_FAIL = "TEST_FAIL";

export const testSuccess = () => ({ type: TEST_SUCCESS });
export const testFailure = () => ({ type: TEST_FAIL });
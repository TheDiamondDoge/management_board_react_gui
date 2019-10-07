import {takeEvery, fork} from 'redux-saga/effects';
import {LOAD_SUMMARY} from "../actions/summary-tab";
import {loadSummaryTab} from "./worker-sagas";

function* watchSummaryTabLoad() {
    yield takeEvery(LOAD_SUMMARY, loadSummaryTab);
}

const exportSagas = [
    fork(watchSummaryTabLoad)
];

export default exportSagas;
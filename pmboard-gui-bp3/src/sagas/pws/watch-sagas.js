import {takeEvery, fork} from 'redux-saga/effects';
import {LOAD_SUMMARY} from "../../actions/summary-tab";
import {loadIndicatorsTab, loadSummaryTab} from "./worker-sagas";
import {LOAD_INDICATORS} from "../../actions/indicators-tab";

function* watchSummaryTabLoad() {
    yield takeEvery(LOAD_SUMMARY, loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(LOAD_INDICATORS, loadIndicatorsTab);
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
];

export default exportSagas;
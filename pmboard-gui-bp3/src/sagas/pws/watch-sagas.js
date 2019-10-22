import {takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {LOAD_SUMMARY} from "../../actions/summary-tab";
import {loadIndicatorsTab, loadInformationTab, loadSummaryTab, saveHealthIndicators} from "./worker-sagas";
import {LOAD_INDICATORS} from "../../actions/indicators-tab";
import {LOAD_INFO} from "../../actions/info-tab";
import {SAVE_COMMENTS, SAVE_HEALTH} from "../../actions/health-indicators";

function* watchSummaryTabLoad() {
    yield takeEvery(LOAD_SUMMARY, loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(LOAD_INDICATORS, loadIndicatorsTab);
}

function* watchInformationTabLoad() {
    yield takeEvery(LOAD_INFO, loadInformationTab);
}

function* watchHealthIndicatorsSave() {
    yield takeLatest(SAVE_HEALTH, saveHealthIndicators);
}

function* watchHealthCommentsSave() {
    yield takeLatest(SAVE_COMMENTS, saveHealthIndicators);
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad),
    fork(watchHealthIndicatorsSave),
    fork(watchHealthCommentsSave)
];

export default exportSagas;
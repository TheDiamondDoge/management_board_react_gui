import {takeEvery, fork} from 'redux-saga/effects';
import {LOAD_SUMMARY} from "../../actions/summary-tab";
import {loadIndicatorsTab, loadInformationTab, loadSummaryTab} from "./worker-sagas";
import {LOAD_INDICATORS} from "../../actions/indicators-tab";
import {LOAD_INFO} from "../../actions/info-tab";

function* watchSummaryTabLoad() {
    yield takeEvery(LOAD_SUMMARY, loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(LOAD_INDICATORS, loadIndicatorsTab);
}

function* watchInformationTabLoad() {
    yield takeEvery(LOAD_INFO, loadInformationTab);
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad)
];

export default exportSagas;
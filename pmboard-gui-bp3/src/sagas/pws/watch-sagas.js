import {takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {LOAD_SUMMARY} from "../../actions/summary-tab";
import {
    loadIndicatorsTab, loadInformationTab, loadSummaryTab, saveHealthIndicators, saveIndicatorsQuality,
    saveIndicatorsRqs, loadQualityKpi, loadIndicatorsRqs, loadHealthIndicators
} from "./worker-sagas";
import {LOAD_INDICATORS} from "../../actions/indicators-tab";
import {LOAD_INFO} from "../../actions/info-tab";
import {LOAD_HEALTH, SAVE_COMMENTS, SAVE_HEALTH} from "../../actions/health-indicators";
import {INDICATORS_RQS_SAVE, LOAD_INDICATORS_RQS} from "../../actions/indicators-rqs";
import {LOAD_QUALITY_KPI, QUALITY_KPI_SAVE} from "../../actions/quality-kpi";

function* watchSummaryTabLoad() {
    yield takeEvery(LOAD_SUMMARY, loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(LOAD_INDICATORS, loadIndicatorsTab);
}

function* watchInformationTabLoad() {
    yield takeEvery(LOAD_INFO, loadInformationTab);
}

function* watchHealthIndicatorsLoad() {
    yield takeEvery(LOAD_HEALTH, loadHealthIndicators)
}

function* watchHealthIndicatorsSave() {
    yield takeLatest(SAVE_HEALTH, saveHealthIndicators);
}

function* watchHealthCommentsSave() {
    yield takeLatest(SAVE_COMMENTS, saveHealthIndicators);
}

function* watchIndicatorsRqsSave() {
    yield takeLatest(INDICATORS_RQS_SAVE, saveIndicatorsRqs);
}

function* watchIndicatorsRqsLoad() {
    yield takeLatest(LOAD_INDICATORS_RQS, loadIndicatorsRqs)
}

function* watchIndicatorsQualityLoad() {
    yield takeEvery(LOAD_QUALITY_KPI, loadQualityKpi)
}

function* watchIndicatorsQualitySave() {
    yield takeLatest(QUALITY_KPI_SAVE, saveIndicatorsQuality);
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad),
    fork(watchHealthIndicatorsLoad),
    fork(watchHealthIndicatorsSave),
    fork(watchHealthCommentsSave),
    fork(watchIndicatorsRqsSave),
    fork(watchIndicatorsRqsLoad),
    fork(watchIndicatorsQualitySave),
    fork(watchIndicatorsQualityLoad)
];

export default exportSagas;
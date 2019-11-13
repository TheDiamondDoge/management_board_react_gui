import {takeEvery, takeLatest, fork} from 'redux-saga/effects';
import {
    loadIndicatorsTab,
    loadInformationTab,
    loadSummaryTab,
    saveHealthIndicators,
    saveIndicatorsQuality,
    saveIndicatorsRqs,
    loadQualityKpi,
    loadIndicatorsRqs,
    loadHealthIndicators,
    saveInformationTab,
    saveMilestones,
    loadMilestones
} from "./worker-sagas";
import * as summaryTab from "../../actions/summary-tab";
import * as indicatorsTab from "../../actions/indicators-tab";
import * as informationTab from "../../actions/info-tab";
import * as healthIndicators from "../../actions/health-indicators";
import * as rqIndicators from "../../actions/indicators-rqs";
import * as quality from "../../actions/quality-kpi";
import * as milestones from "../../actions/milestones";

function* watchSummaryTabLoad() {
    yield takeEvery(summaryTab.LOAD_SUMMARY, loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(indicatorsTab.LOAD_INDICATORS, loadIndicatorsTab);
}

function* watchInformationTabLoad() {
    yield takeEvery(informationTab.LOAD_INFO, loadInformationTab);
}

function* watchHealthIndicatorsLoad() {
    
    yield takeEvery(healthIndicators.LOAD_HEALTH, loadHealthIndicators)
}

function* watchHealthIndicatorsSave() {
    yield takeLatest(healthIndicators.SAVE_HEALTH, saveHealthIndicators);
}

function* watchHealthCommentsSave() {
    yield takeLatest(healthIndicators.SAVE_COMMENTS, saveHealthIndicators);
}

function* watchIndicatorsRqsSave() {
    yield takeLatest(rqIndicators.INDICATORS_RQS_SAVE, saveIndicatorsRqs);
}

function* watchIndicatorsRqsLoad() {
    yield takeLatest(rqIndicators.LOAD_INDICATORS_RQS, loadIndicatorsRqs)
}

function* watchIndicatorsQualityLoad() {
    yield takeEvery(quality.LOAD_QUALITY_KPI, loadQualityKpi)
}

function* watchIndicatorsQualitySave() {
    yield takeLatest(quality.QUALITY_KPI_SAVE, saveIndicatorsQuality);
}

function* watchInformationTabSave() {
    yield takeLatest(informationTab.SAVE_INFO_DATA, saveInformationTab);
}

function* watchMilestonesLoad() {
    yield takeEvery(milestones.LOAD_MILESTONES, loadMilestones);
}

function* watchMilestonesSave() {
    yield takeLatest(milestones.SAVE_MILESTONES, saveMilestones)
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad),
    fork(watchInformationTabSave),
    fork(watchMilestonesLoad),
    fork(watchMilestonesSave),
    fork(watchHealthIndicatorsLoad),
    fork(watchHealthIndicatorsSave),
    fork(watchHealthCommentsSave),
    fork(watchIndicatorsRqsSave),
    fork(watchIndicatorsRqsLoad),
    fork(watchIndicatorsQualitySave),
    fork(watchIndicatorsQualityLoad)
];

export default exportSagas;
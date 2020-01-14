import {takeEvery, takeLatest, fork} from 'redux-saga/effects';
import * as sagas from "./worker-sagas";
import * as summaryTab from "../../actions/pws/summary-tab";
import * as indicatorsTab from "../../actions/pws/indicators-tab";
import * as informationTab from "../../actions/pws/info-tab";
import * as healthIndicators from "../../actions/pws/health-indicators";
import * as rqIndicators from "../../actions/pws/indicators-rqs";
import * as quality from "../../actions/pws/quality-kpi";
import * as milestones from "../../actions/pws/milestones";
import * as contrib from "../../actions/pws/contrib-projects";
import * as blc from "../../actions/pws/blc-tab";
import * as risks from "../../actions/pws/risks-tab";

function* watchSummaryTabLoad() {
    yield takeEvery(summaryTab.LOAD_SUMMARY, sagas.loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(indicatorsTab.LOAD_INDICATORS, sagas.loadIndicatorsTab);
}

function* watchInformationTabLoad() {
    yield takeEvery(informationTab.LOAD_INFO, sagas.loadInformationTab);
}

function* watchBlcTabLoad() {
    yield takeEvery(blc.LOAD_BLC, sagas.loadBlcTab);
}

function* watchBlcTabSaveIndicators() {
    yield takeLatest(blc.SAVE_BLC_INDICATORS, sagas.saveBlcTabIndicators);
}

function* watchBlcTabSaveComments() {
    yield takeLatest(blc.SAVE_BLC_COMMENTS, sagas.saveBlcTabComments);
}

function* watchHealthIndicatorsLoad() {
    yield takeEvery(healthIndicators.LOAD_HEALTH, sagas.loadHealthIndicators)
}

function* watchHealthIndicatorsSave() {
    yield takeLatest(healthIndicators.SAVE_HEALTH, sagas.saveHealthIndicators);
}

function* watchHealthCommentsSave() {
    yield takeLatest(healthIndicators.SAVE_COMMENTS, sagas.saveHealthIndicators);
}

function* watchIndicatorsRqsSave() {
    yield takeLatest(rqIndicators.INDICATORS_RQS_SAVE, sagas.saveIndicatorsRqs);
}

function* watchIndicatorsRqsLoad() {
    yield takeLatest(rqIndicators.LOAD_INDICATORS_RQS, sagas.loadIndicatorsRqs)
}

function* watchIndicatorsQualityLoad() {
    yield takeEvery(quality.LOAD_QUALITY_KPI, sagas.loadQualityKpi)
}

function* watchIndicatorsQualitySave() {
    yield takeLatest(quality.QUALITY_KPI_SAVE, sagas.saveIndicatorsQuality);
}

function* watchInformationTabSave() {
    yield takeLatest(informationTab.SAVE_INFO_DATA, sagas.saveInformationTab);
}

function* watchMilestonesLoad() {
    yield takeEvery(milestones.LOAD_MILESTONES, sagas.loadMilestones);
}

function* watchMilestonesSave() {
    yield takeLatest(milestones.SAVE_MILESTONES, sagas.saveMilestones)
}

function* watchContribLoad() {
    yield takeEvery(contrib.LOAD_CONTRIB, sagas.loadContributableProjects)
}

function* watchRisksLoad() {
    yield takeEvery(risks.LOAD_RISKS, sagas.loadRisks)
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad),
    fork(watchBlcTabLoad),
    fork(watchBlcTabSaveIndicators),
    fork(watchBlcTabSaveComments),
    fork(watchRisksLoad),
    fork(watchInformationTabSave),
    fork(watchMilestonesLoad),
    fork(watchMilestonesSave),
    fork(watchHealthIndicatorsLoad),
    fork(watchHealthIndicatorsSave),
    fork(watchHealthCommentsSave),
    fork(watchIndicatorsRqsSave),
    fork(watchIndicatorsRqsLoad),
    fork(watchIndicatorsQualitySave),
    fork(watchIndicatorsQualityLoad),
    fork(watchContribLoad),
];

export default exportSagas;
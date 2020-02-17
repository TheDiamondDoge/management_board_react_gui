import {takeEvery, takeLatest, takeLeading, fork} from 'redux-saga/effects';
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
import * as actions from "../../actions/pws/actions-tab";
import * as cost from "../../actions/pws/cost-tab";
import * as requirements from "../../actions/pws/requirements-tab";
import * as backlog from "../../actions/pws/backlog";
import * as defects from "../../actions/pws/defects";
import * as report from "../../actions/pws/report-tab";
import * as userReport from "../../actions/pws/user-reports";

function* watchSummaryTabLoad() {
    yield takeEvery(summaryTab.SUMMARY_LOAD, sagas.loadSummaryTab);
}

function* watchIndicatorsTabLoad() {
    yield takeEvery(indicatorsTab.INDICATORS_LOAD, sagas.loadIndicatorsTab);
}

function* watchInformationTabLoad() {
    yield takeEvery(informationTab.INFO_LOAD, sagas.loadInformationTab);
}

function* watchBlcTabLoad() {
    yield takeEvery(blc.BLC_LOAD, sagas.loadBlcTab);
}

function* watchBlcTabSaveIndicators() {
    yield takeLatest(blc.BLC_INDICATORS_SAVE, sagas.saveBlcTabIndicators);
}

function* watchBlcTabSaveComments() {
    yield takeLatest(blc.BLC_COMMENTS_SAVE, sagas.saveBlcTabComments);
}

function* watchHealthIndicatorsLoad() {
    yield takeEvery(healthIndicators.HEALTH_LOAD, sagas.loadHealthIndicators)
}

function* watchHealthIndicatorsSave() {
    yield takeLatest(healthIndicators.HEALTH_INDICATORS_SAVE, sagas.saveHealthIndicators);
}

function* watchHealthCommentsSave() {
    yield takeLatest(healthIndicators.HEALTH_COMMENTS_SAVE, sagas.saveHealthIndicators);
}

function* watchIndicatorsRqsSave() {
    yield takeLatest(rqIndicators.INDICATORS_RQS_SAVE, sagas.saveIndicatorsRqs);
}

function* watchIndicatorsRqsLoad() {
    yield takeLatest(rqIndicators.INDICATORS_RQS_LOAD, sagas.loadIndicatorsRqs)
}

function* watchIndicatorsQualityLoad() {
    yield takeEvery(quality.QUALITY_KPI_LOAD, sagas.loadQualityKpi)
}

function* watchIndicatorsQualitySave() {
    yield takeLatest(quality.QUALITY_KPI_SAVE, sagas.saveIndicatorsQuality);
}

function* watchInformationTabSave() {
    yield takeLatest(informationTab.INFO_SAVE_DATA, sagas.saveInformationTab);
}

function* watchMilestonesLoad() {
    yield takeEvery(milestones.MILESTONES_LOAD, sagas.loadMilestones);
}

function* watchMilestonesSave() {
    yield takeLatest(milestones.MILESTONES_SAVE, sagas.saveMilestones)
}

function* watchContribLoad() {
    yield takeEvery(contrib.CONTRIB_LOAD, sagas.loadContributableProjects)
}

function* watchRisksLoad() {
    yield takeEvery(risks.RISKS_LOAD, sagas.loadRisks)
}

function* watchRiskSave() {
    yield takeLatest(risks.RISK_SAVE, sagas.saveRisk);
}

function* watchRelatedRisksLoad() {
    yield takeEvery(risks.RISKS_IDS_LOAD, sagas.loadRelatedRisksIds)
}

function* watchActionsLoad() {
    yield takeEvery(actions.ACTIONS_LOAD, sagas.loadActions)
}

function* watchActionsSave() {
    yield takeLatest(actions.ACTIONS_SAVE, sagas.saveAction);
}

function* watchActionDelete() {
    yield takeLeading(actions.ACTIONS_DELETE, sagas.deleteAction);
}

function* watchCostLoad() {
    yield takeEvery(cost.COST_LOAD, sagas.loadCost);
}

function* watchRequirementsLoad() {
    yield takeEvery(requirements.REQUIREMENTS_LOAD, sagas.loadRequirements);
}

function* watchBacklogChartLoad() {
    yield takeEvery(backlog.BACKLOG_CHART_LOAD, sagas.loadBacklogChart)
}

function* watchDefectsChartLoad() {
    yield takeEvery(defects.DEFECTS_CHART_LOAD, sagas.loadDefectsChart)
}

function* watchReportTabLoad() {
    yield takeEvery(report.REPORT_LOAD, sagas.loadReportTab)
}

function* watchUserReportLoad() {
    yield takeEvery(userReport.USER_REPORTS_LOAD, sagas.loadUserReports)
}

function* watchUserReportSave() {
    yield takeLatest(userReport.USER_REPORTS_SAVE, sagas.saveUserReport)
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad),
    fork(watchBlcTabLoad),
    fork(watchBlcTabSaveIndicators),
    fork(watchBlcTabSaveComments),
    fork(watchRisksLoad),
    fork(watchRiskSave),
    fork(watchRelatedRisksLoad),
    fork(watchActionsLoad),
    fork(watchActionsSave),
    fork(watchActionDelete),
    fork(watchCostLoad),
    fork(watchRequirementsLoad),
    fork(watchBacklogChartLoad),
    fork(watchDefectsChartLoad),
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
    fork(watchReportTabLoad),
    fork(watchUserReportLoad),
    fork(watchUserReportSave)
];

export default exportSagas;
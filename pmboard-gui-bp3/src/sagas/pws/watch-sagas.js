import {takeEvery, takeLatest, takeLeading, fork} from 'redux-saga/effects';
import * as sagas from "./worker-sagas";
import * as summaryTab from "../../actions/pws/summary-tab";
import * as indicatorsTab from "../../actions/pws/indicators-tab";
import * as informationTab from "../../actions/pws/info-tab";
import * as healthIndicators from "../../actions/pws/health-indicators";
import * as rqIndicators from "../../actions/pws/indicators-rqs";
import * as quality from "../../actions/pws/quality-kpi";
import * as milestones from "../../actions/pws/milestones";
import * as contrib from "../../actions/pws/contrib-list";
import * as blc from "../../actions/pws/blc-tab";
import * as risksTab from "../../actions/pws/risks/risks-tab";
import * as risksSummary from "../../actions/pws/risks/risks-summary";
import * as risksRelated from "../../actions/pws/risks/risks-related";
import * as actions from "../../actions/pws/actions-tab";
import * as cost from "../../actions/pws/cost-tab";
import * as requirements from "../../actions/pws/requirements-tab";
import * as backlog from "../../actions/pws/backlog";
import * as defects from "../../actions/pws/defects";
import * as report from "../../actions/pws/report-tab";
import * as userReport from "../../actions/pws/user-reports";
import * as contribTable from "../../actions/pws/contrib-table";
import * as defaults from "../../actions/pws/default";
import * as pptExport from "../../actions/pws/ppt-export";

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

function* watchContibTableLoad() {
    yield takeEvery(contribTable.CONTRIB_TABLE_LOAD, sagas.loadContribTable)
}

function* watchRisksLoad() {
    yield takeEvery(risksTab.RISKS_LOAD, sagas.loadRisks)
}

function* watchRiskSave() {
    yield takeLatest(risksTab.RISK_SAVE, sagas.saveRisk);
}

function* watchRisksUpload() {
    yield takeLatest(risksTab.RISKS_UPLOAD, sagas.uploadRisksFile);
}

function* watchRisksDownload() {
    yield takeLeading(risksTab.RISKS_DOWNLOAD, sagas.downloadRisksFile);
}

function* watchRisksSummaryLoad() {
    yield takeLeading(risksSummary.RISKS_SUMMARY_LOAD, sagas.loadRisksSummary);
}

function* watchRelatedRisksLoad() {
    yield takeEvery(risksRelated.RISKS_IDS_LOAD, sagas.loadRelatedRisksIds)
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

function* watchCostUpload() {
    yield takeEvery(cost.COST_UPLOAD, sagas.uploadCostFile);
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

function* watchGetLastUploadedCost() {
    yield takeLatest(cost.COST_GET_LAST_UPLOADED, sagas.getLastUploadedCost)
}

function* watchGetLastUploadedRisks() {
    yield takeLatest(risksTab.RISKS_GET_LAST_UPLOADED, sagas.getLastUploadedRisks)
}

function* watchProjectDefaultsLoad() {
    yield takeLatest(defaults.PROJECT_DEFAULTS_LOAD, sagas.loadProjectDefaults)
}

function* watchCustomPptFile() {
    yield takeLeading(pptExport.EXPORT_PPT, sagas.loadPptFile)
}

function* watchSnapshotsDataLoad() {
    yield takeEvery(report.SNAPSHOT_LOAD, sagas.loadReportSnapshotsData);
}

const exportSagas = [
    fork(watchSummaryTabLoad),
    fork(watchIndicatorsTabLoad),
    fork(watchInformationTabLoad),
    fork(watchBlcTabLoad),
    fork(watchBlcTabSaveIndicators),
    fork(watchBlcTabSaveComments),
    fork(watchRisksLoad),
    fork(watchRisksSummaryLoad),
    fork(watchRiskSave),
    fork(watchRisksUpload),
    fork(watchRisksDownload),
    fork(watchRelatedRisksLoad),
    fork(watchActionsLoad),
    fork(watchActionsSave),
    fork(watchActionDelete),
    fork(watchCostLoad),
    fork(watchCostUpload),
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
    fork(watchUserReportSave),
    fork(watchContibTableLoad),
    fork(watchGetLastUploadedCost),
    fork(watchGetLastUploadedRisks),
    fork(watchProjectDefaultsLoad),
    fork(watchCustomPptFile),
    fork(watchSnapshotsDataLoad),
];

export default exportSagas;
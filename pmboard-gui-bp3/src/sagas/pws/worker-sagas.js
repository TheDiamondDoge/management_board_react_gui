import * as api from '../../api/pws';
import FileSaver from 'file-saver';
import {call, put} from 'redux-saga/effects';
import * as summaryTab from "../../actions/pws/summary-tab";
import * as healthIndicators from "../../actions/pws/health-indicators";
import * as milestones from "../../actions/pws/milestones";
import * as indicatorsTab from "../../actions/pws/indicators-tab";
import * as rqIndicators from "../../actions/pws/indicators-rqs";
import * as milestonesKpi from "../../actions/pws/milestones-kpi";
import * as dr4Kpi from "../../actions/pws/dr4-kpi";
import * as qualityKpi from "../../actions/pws/quality-kpi";
import * as infoTab from "../../actions/pws/info-tab";
import * as contrib from "../../actions/pws/contrib-list";
import * as blc from "../../actions/pws/blc-tab";
import * as risksTab from "../../actions/pws/risks/risks-tab";
import * as risksSummary from "../../actions/pws/risks/risks-summary";
import * as risksIds from "../../actions/pws/risks/risks-related";
import * as actions from "../../actions/pws/actions-tab";
import * as cost from "../../actions/pws/cost-tab";
import * as requirements from "../../actions/pws/requirements-tab";
import * as backlog from "../../actions/pws/backlog";
import * as defects from "../../actions/pws/defects";
import * as report from "../../actions/pws/report/report-tab";
import * as reportSnapshots from "../../actions/pws/report/snapshots";
import * as reportImages from "../../actions/pws/report/images";
import * as userReports from "../../actions/pws/user-reports";
import * as contribTable from "../../actions/pws/contrib-table";
import * as defaults from "../../actions/pws/default";
import * as exportPpt from "../../actions/pws/ppt-export";
import * as projectsList from "../../actions/pws/projects-list";
import * as toasts from "../../actions/app/toaster";
import {projectNameDecorator} from "../../util/common-decorators";
import {addDangerToast} from "../../actions/app/toaster";

export function* loadSummaryTab({projectId}) {
    try {
        const data = yield call(api.getSummaryInfo, projectId);
        yield put(summaryTab.summaryLoadSuccess(data));
        yield call(loadHealthIndicators, {projectId});
        yield call(loadMilestones, {projectId, isShown: true});
    } catch (e) {
        yield put(summaryTab.summaryError(e));
        yield put(toasts.addDangerToast("'Summary' load failed. Please try again"));
    }
}

export function* loadIndicatorsTab({projectId}) {
    try {
        yield call(loadMilestones, {projectId, isShown: true});
        yield call(loadHealthIndicators, {projectId});
        yield call(loadIndicatorsRqs, {projectId});
        yield call(loadMilestonesKpi, {projectId});
        yield call(loadDr4Kpi, {projectId});
        yield call(loadQualityKpi, {projectId});
    } catch (e) {
        yield put(indicatorsTab.indicatorsError(e));
        yield put(toasts.addDangerToast("'Indicators' load failed. Please try again"));
    }
}

export function* loadInformationTab({projectId}) {
    try {
        const {data} = yield call(api.getInformationTab, projectId);
        yield put(infoTab.infoLoadSuccess(data));
    } catch (e) {
        yield put(infoTab.infoError(e));
        yield put(toasts.addDangerToast("'Information' load failed. Please try again"));
    }
}

export function* loadContributableProjects({projectId}) {
    try {
        const {data} = yield call(api.getContributableProjects, projectId);
        yield put(contrib.contribLoadSuccess(data));
    } catch (e) {
        yield put(contrib.contribLoadFail(e));
        yield put(toasts.addDangerToast("'List of contributing projects' load failed. Please try again"));
    }
}

export function* loadContribTable({projectId}) {
    try {
        const {data} = yield call(api.getContribTable, projectId);
        yield put(contribTable.loadContribTableSuccess(data));
    } catch (e) {
        yield put(contribTable.errorContribTable(e));
        yield put(toasts.addDangerToast("'Contribution table' load failed. Please try again"));
    }
}

export function* loadContribTableFile({projectId, projectName}) {
    try {
        const {data} = yield call(api.exportContribTable, projectId);
        const filename = projectNameDecorator(projectName);
        yield call(FileSaver.saveAs, new Blob([data]), `${filename}_contrib.xlsx`);
        yield put(contribTable.exportContribTableSuccess())
        yield put(toasts.addSuccessToast("Table exported"));
    } catch (e) {
        yield put(contribTable.errorContribTable(e))
        yield put(toasts.addDangerToast("Export failed"));
    }
}

export function* loadHealthIndicators({projectId}) {
    try {
        const {data} = yield call(api.getHealthIndicators, projectId);
        yield put(healthIndicators.healthLoadSuccess(data));
    } catch (e) {
        yield put(healthIndicators.healthError(e));
        yield put(toasts.addDangerToast("'Health Indicators' load failed. Please try again"));
    }
}

export function* loadMilestones({projectId, isShown}) {
    try {
        const {data} = yield call(api.getMilestones, projectId, !!isShown);
        yield put(milestones.milestonesLoadSuccess(data));
    } catch (e) {
        yield put(milestones.milestonesError(e));
        yield put(toasts.addDangerToast("'Milestones' load failed. Please try again"));
    }
}

export function* loadIndicatorsRqs({projectId}) {
    try {
        const {data} = yield call(api.getIndicatorsRqs, projectId);
        yield put(rqIndicators.indicatorsRqsSuccess(data));
    } catch (e) {
        yield put(rqIndicators.indicatorsRqsError(e));
        yield put(toasts.addDangerToast("'RQs indicators' load failed. Please try again"));
    }
}

export function* loadMilestonesKpi({projectId}) {
    try {
        const {data} = yield call(api.getMilestonesKpi, projectId);
        yield put(milestonesKpi.milestonesKpiSuccess(data));
    } catch (e) {
        yield put(milestonesKpi.milestonesKpiError(e));
        yield put(toasts.addDangerToast("'Milestones KPI' load failed. Please try again"));
    }
}

export function* loadDr4Kpi({projectId}) {
    try {
        const {data} = yield call(api.getDr4Kpi, projectId);
        yield put(dr4Kpi.dr4KpiSuccess(data));
    } catch (e) {
        yield put(dr4Kpi.dr4KpiError(e));
        yield put(toasts.addDangerToast("'DR4 KPI' load failed. Please try again"));
    }
}

export function* loadQualityKpi({projectId}) {
    try {
        const {data} = yield call(api.getQualityKpi, projectId);
        yield put(qualityKpi.qualityKpiSuccess(data))
    } catch (e) {
        yield put(qualityKpi.qualityKpiError(e));
        yield put(toasts.addDangerToast("'Quality KPI' load failed. Please try again"));
    }
}

export function* loadBlcTab({projectId}) {
    try {
        const data = yield call(api.getBlcTabData, projectId);
        yield put(blc.blcLoadSuccess(data.data))
    } catch (e) {
        yield put(blc.blcError(e));
        yield put(toasts.addDangerToast("'BLC' load failed. Please try again"));
    }
}

export function* loadRisks({projectId}) {
    try {
        const {data} = yield call(api.getRisks, projectId);
        yield put(risksTab.loadSuccess(data));
    } catch (e) {
        yield put(risksTab.riskError(e));
        yield put(toasts.addDangerToast("'Risks' failed. Please try again"));
    }
}

export function* loadRisksSummary({projectId}) {
    const mini = true;
    try {
        const {data} = yield call(api.getRisks, projectId, mini);
        yield put(risksSummary.loadRisksSummarySuccess(data));
    } catch (e) {
        yield put(risksSummary.risksSummaryError(e));
        yield put(toasts.addDangerToast("'Risks' failed. Please try again"));
    }
}

export function* saveRisk({projectId, data}) {
    try {
        yield call(api.saveRisks, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadRisks, {projectId});
    } catch (e) {
        yield put(risksTab.riskError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* uploadRisksFile({projectId, data}) {
    try {
        const errors = yield call(api.uploadRisksFile, projectId, data);
        yield put(risksTab.riskUploadSucceed(errors.data));
        yield put(toasts.addSuccessToast("File uploaded"));
        yield call(loadRisks, {projectId});
    } catch (e) {
        yield put(risksTab.riskError(e));
        yield put(toasts.addDangerToast(`Risks upload failed. ${e.response.data.message}`));
    }
}

export function* downloadRisksFile({projectId, projectName}) {
    try {
        const data = yield call(api.downloadRisksFile, projectId);
        const filename = projectNameDecorator(projectName);
        yield call(FileSaver.saveAs, new Blob([data.data]), `${filename}_risks.xlsx`);

        yield put(toasts.addSuccessToast("Risk file downloaded"))
    } catch (e) {
        yield put(risksTab.riskError(e));
        yield put(toasts.addDangerToast(`Risk download failed. ${e.response.data.message}`))
    }
}

export function* loadRelatedRisksIds({projectId}) {
    try {
        const {data} = yield call(api.getRelatedRisksIds, projectId);
        yield put(risksIds.loadRiskIdsSuccess(data));
    } catch (e) {
        yield put(risksIds.riskIdsError(e));
        yield put(toasts.addDangerToast("'Related Risks' load failed. Please try again"));
    }
}

export function* loadActions({projectId}) {
    try {
        const {data} = yield call(api.getActions, projectId);
        yield put(actions.actionsLoadSuccess(data))
    } catch (e) {
        yield put(actions.actionsError(e));
        yield put(toasts.addDangerToast("'Actions' load failed. Please try again"));
    }
}

export function* loadCost({projectId}) {
    try {
        const {data} = yield call(api.getCost, projectId);
        yield put(cost.costLoadSuccess(data));
    } catch (e) {
        yield put(cost.costError(e));
        yield put(toasts.addDangerToast("'Cost' load failed. Please try again"));
    }
}

export function* uploadCostFile({projectId, data}) {
    try {
        yield call(api.uploadCost, projectId, data);
        yield call(loadCost, {projectId});
        yield put(toasts.addSuccessToast("File uploaded"));
    } catch (e) {
        yield put(cost.costError(e));
        yield put(toasts.addDangerToast(`'Cost' upload failed. ${e.response.data.message}`));
    }
}

export function* loadRequirements({projectId}) {
    try {
        const {data} = yield call(api.getRequirements, projectId);
        yield put(requirements.loadRequirementsSuccess(data));
    } catch (e) {
        yield put(requirements.errorRequirements(e));
        yield put(toasts.addDangerToast("'Requirements' load failed. Please try again"));
    }
}

export function* loadBacklogChart({projectId}) {
    try {
        const {data} = yield call(api.getBacklogChart, projectId);
        yield put(backlog.loadBacklogChartSuccess(data));
    } catch (e) {
        yield put(backlog.errorBacklog(e));
        yield put(toasts.addDangerToast("'Backlog chart' load failed. Please try again"));
    }
}

export function* loadDefectsChart({projectId}) {
    try {
        const {data} = yield call(api.getDefectsChart, projectId);
        yield put(defects.loadDefectsChartSuccess(data));
    } catch (e) {
        yield put(defects.errorDefects(e));
        yield put(toasts.addDangerToast("'Defects chart' load failed. Please try again"));
    }
}

export function* loadReportTab({projectId}) {
    try {
        const {data} = yield call(api.getReportTab, projectId);
        yield call(loadMilestones, {projectId, isShown: true});
        yield call(loadHealthIndicators, {projectId});
        yield call(loadRisksSummary, {projectId});
        yield put(report.loadReportSuccess(data));
        yield call(loadRequirements, {projectId});
        yield call(loadUserReports, {projectId});
        yield call(loadReportImages, {projectId});
    } catch (e) {
        yield put(report.errorReport(e));
        yield put(toasts.addDangerToast("'Report tab' load failed. Please try again"));
    }
}

export function* loadUserReports({projectId}) {
    try {
        const {data} = yield call(api.getUserReports, projectId);
        yield put(userReports.loadUserReportsSuccess(data));
        yield call(loadReportSnapshotsData, {projectId});
    } catch (e) {
        yield put(userReports.errorUserReports(e));
        yield put(toasts.addDangerToast("Save failed. Please try again" + e.response.data.message));
    }
}

export function* saveUserReport({projectId, data}) {
    try {
        yield call(api.saveUserReports, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadUserReports, {projectId});
    } catch (e) {
        yield put(userReports.errorUserReports(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveAction({projectId, data}) {
    try {
        yield call(api.saveAction, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadActions, {projectId});
    } catch (e) {
        yield put(actions.actionsError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* deleteAction({uid, projectId}) {
    try {
        yield call(api.deleteAction, uid);
        yield put(toasts.addSuccessToast("Deleted"));
        yield call(loadActions, {projectId});
    } catch (e) {
        yield put(actions.actionsError(e));
        yield put(toasts.addDangerToast("Delete failed. Please try again"));
    }
}

export function* exportActions({projectId, projectName}) {
    try {
        const {data} = yield call(api.exportActions, projectId);
        const filename = projectNameDecorator(projectName);
        yield call(FileSaver.saveAs, new Blob([data]), `${filename}_actions.xlsx`);
        yield put(actions.actionsExportSuccess());
        yield put(toasts.addSuccessToast("Actions exported"));
    } catch (e) {
        yield put(actions.actionsError(e));
        yield put(toasts.addDangerToast("Actions export failed"));
    }
}

export function* saveHealthIndicators({projectId, data}) {
    try {
        yield call(api.saveHealthIndicatorsPost, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadHealthIndicators, {projectId});
    } catch (e) {
        yield put(healthIndicators.healthError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveIndicatorsRqs({projectId, data}) {
    try {
        yield call(api.saveIndicatorsRqs, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadIndicatorsRqs, {projectId});
        yield call(loadDr4Kpi, {projectId});
    } catch (e) {
        yield put(rqIndicators.indicatorsRqsError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveIndicatorsQuality({projectId, data}) {
    try {
        yield call(api.saveQualityKpi, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadQualityKpi, {projectId});
    } catch (e) {
        yield put(qualityKpi.qualityKpiError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveInformationTab({projectId, data}) {
    try {
        yield call(api.saveInformationTab, projectId, data);
        yield put(toasts.addSuccessToast("Information saved"));
        yield put(defaults.silentLoadProjectDefaults(projectId));
        yield call(loadInformationTab, {projectId});
        yield call(loadMilestones, {projectId});
    } catch (e) {
        yield put(infoTab.infoError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveMilestones({projectId, data}) {
    try {
        yield call(api.saveMilestones, projectId, data);
        yield put(toasts.addSuccessToast("Milestones saved"));
        yield call(loadMilestones, {projectId});
    } catch (e) {
        yield put(milestones.milestonesError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveBlcTabIndicators({projectId, data}) {
    try {
        yield call(api.saveBlcIndicators, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadBlcTab, {projectId});
    } catch (e) {
        yield put(blc.blcError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* saveBlcTabComments({projectId, data}) {
    try {
        yield call(api.saveBlcComments, projectId, data);
        yield put(toasts.addSuccessToast("Saved"));
        yield call(loadBlcTab, {projectId});
    } catch (e) {
        yield put(blc.blcError(e));
        yield put(toasts.addDangerToast("Save failed. Please try again"));
    }
}

export function* getLastUploadedCost({projectId, projectName}) {
    try {
        const data = yield call(api.getCostLastUploadedFile, projectId);
        const filename = projectNameDecorator(projectName);
        yield call(FileSaver.saveAs, new Blob([data.data]), `${filename}_cost.xlsx`);
    } catch (e) {
        yield put(cost.costError(e));
        yield put(toasts.addDangerToast("Error. Can`t get last updated cost file."));
    }
}

export function* getLastUploadedRisks({projectId, projectName}) {
    try {
        const data = yield call(api.getRisksLastUploadedFile, projectId);
        const filename = projectNameDecorator(projectName);
        yield call(FileSaver.saveAs, new Blob([data.data]), `${filename}_risks.xlsx`);
    } catch (e) {
        yield put(risksTab.riskError(e));
        yield put(toasts.addDangerToast("Error. Can`t get last updated risksTab file"));
    }
}

export function* loadProjectDefaults({projectId}) {
    try {
        const {data} = yield call(api.getProjectDefaults, projectId);
        yield put(defaults.loadProjectDefaultsSuccess(data));
    } catch (e) {
        yield put(defaults.errorProjectDefaults(e));
        yield put(toasts.addDangerToast("'Project defaults' load failed. Please try again"));
    }
}

export function* loadPptFile({projectId, pptType, snapshotId}) {
    try {
        const file = yield call(api.getPptCustomFile, projectId, pptType, snapshotId);
        const snapshotName = snapshotId ? `_snapshot_${snapshotId}` : "";
        yield call(FileSaver.saveAs, new Blob([file.data]), `${projectId}_${pptType}${snapshotName}.pptx`);
        yield put(exportPpt.exportSuccess());
    } catch (e) {
        yield put(exportPpt.exportFailed());
        yield put(toasts.addDangerToast("PowerPoint export failed. Please try again"));
    }
}

export function* loadReportSnapshotsData({projectId}) {
    try {
        const {data} = yield call(api.getSnapshotsData, projectId);
        yield put(reportSnapshots.loadSnapshotSuccess(data));
    } catch (e) {
        yield put(reportSnapshots.snapshotError(e));
        yield put(toasts.addDangerToast("'Report snapshots' load failed."));
    }
}

export function* loadReportImages({projectId}) {
    try {
        const {data} = yield call(api.loadReportImages, projectId);
        yield put(reportImages.loadReportImagesSuccess(data));
    } catch (e) {
        yield put(reportImages.reportImagesError(e));
        yield put(toasts.addDangerToast("'Report images' load failed"));
    }
}

export function* uploadReportImages({projectId, files}) {
    try {
        yield call(api.uploadReportImages, projectId, files);
        yield put(reportImages.uploadReportImagesSuccess());
        yield put(toasts.addSuccessToast("Images uploaded"));
        yield call(loadReportImages, {projectId});
    } catch (e) {
        yield put(reportImages.reportImagesError(e));
        yield put(toasts.addDangerToast(`Upload failed. ${e.response.data.message}`));
    }
}

export function* deleteReportImage({projectId, filename}) {
    try {
        yield call(api.deleteReportImage, projectId, filename);
        yield put(toasts.addSuccessToast("Image deleted"));
        yield call(loadReportImages, {projectId});
    } catch (e) {
        yield put(reportImages.reportImagesError(e));
        yield put(toasts.addDangerToast("Deletion failed"));
    }
}

export function* loadProjectsList({isEpm, status}) {
    try {
        const {data} = yield call(api.getProjectsList, isEpm, status);
        yield put(projectsList.loadProjectsSuccess(data));
    } catch (e) {
        yield put(projectsList.projectsError(e));
        yield put(addDangerToast("Projects load failed"))
    }
}
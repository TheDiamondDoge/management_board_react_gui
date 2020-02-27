import * as api from '../../api/pws';
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
import * as risks from "../../actions/pws/risks-tab";
import * as actions from "../../actions/pws/actions-tab";
import * as cost from "../../actions/pws/cost-tab";
import * as requirements from "../../actions/pws/requirements-tab";
import * as backlog from "../../actions/pws/backlog";
import * as defects from "../../actions/pws/defects";
import * as report from "../../actions/pws/report-tab";
import * as userReports from "../../actions/pws/user-reports";
import * as contribTable from "../../actions/pws/contrib-table";
import * as defaults from "../../actions/pws/default";

export function* loadSummaryTab({projectId}) {
    try {
        const data = yield call(api.getSummaryInfo, projectId);
        yield put(summaryTab.summaryLoadSuccess(data));

        yield call(loadHealthIndicators, {projectId});
        yield call(loadMilestones, {projectId});
    } catch (e) {
        yield put(summaryTab.summaryError(e));
    }
}

export function* loadIndicatorsTab({projectId}) {
    try {
        yield call(loadMilestones, {projectId});
        yield call(loadHealthIndicators, {projectId});
        yield call(loadIndicatorsRqs, {projectId});
        yield call(loadMilestonesKpi, {projectId});
        yield call(loadDr4Kpi, {projectId});
        yield call(loadQualityKpi, {projectId});
    } catch (e) {
        yield put(indicatorsTab.indicatorsError(e))
    }
}

export function* loadInformationTab({projectId}) {
    try {
        const data = yield call(api.getInformationTab, projectId);
        yield put(infoTab.infoLoadSuccess(data));
    } catch (e) {
        yield put(infoTab.infoError);
    }
}

export function* loadContributableProjects() {
    try {
        const data = yield call(api.getContributableProjects);
        yield put(contrib.contribLoadSuccess(data));
    } catch (e) {
        yield put(contrib.contribLoadFail(e))
    }
}

export function* loadContribTable({projectId}) {
    try {
        const data = yield call(api.getContribTable, projectId);
        yield put(contribTable.loadContribTableSuccess(data));
    } catch (e) {
        yield put(contribTable.errorContribTable(e));
    }
}

export function* loadHealthIndicators({projectId}) {
    try {
        const data = yield call(api.getHealthIndicators, projectId);
        yield put(healthIndicators.healthLoadSuccess(data));
    } catch (e) {
        yield put(healthIndicators.healthError(e));
    }
}

export function* loadMilestones({projectId}) {
    try {
        const data = yield call(api.getMilestones, projectId);
        yield put(milestones.milestonesLoadSuccess(data));
    } catch (e) {
        yield put(milestones.milestonesError(e));
    }
}

export function* loadIndicatorsRqs({projectId}) {
    try {
        const data = yield call(api.getIndicatorsRqs, projectId);
        yield put(rqIndicators.indicatorsRqsSuccess(data));
    } catch (e) {
        yield put(rqIndicators.indicatorsRqsError(e));
    }
}

export function* loadMilestonesKpi({projectId}) {
    try {
        const data = yield call(api.getMilestonesKpi, projectId);
        yield put(milestonesKpi.milestonesKpiSuccess(data));
    } catch (e) {
        yield put(milestonesKpi.milestonesKpiError(e))
    }
}

export function* loadDr4Kpi({projectId}) {
    try {
        const data = yield call(api.getDr4Kpi, projectId);
        yield put(dr4Kpi.dr4KpiSuccess(data));
    } catch (e) {
        yield put(dr4Kpi.dr4KpiError(e))
    }
}

export function* loadQualityKpi({projectId}) {
    try {
        const data = yield call(api.getQualityKpi, projectId);
        yield put(qualityKpi.qualityKpiSuccess(data))
    } catch (e) {
        yield put(qualityKpi.qualityKpiError(e))
    }
}

export function* loadBlcTab({projectId}) {
    try {
        const data = yield call(api.getBlcTabData, projectId);
        yield put(blc.blcLoadSuccess(data.data))
    } catch(e) {
        yield put(blc.blcError(e))
    }
}

export function* loadRisks({projectId}) {
    try {
        const data = yield call(api.getRisks, projectId);
        yield put(risks.loadSuccess(data));
    } catch (e) {
        yield put(risks.riskError(e));
    }
}

export function* saveRisk({projectId, data}) {
    try {
        yield call(api.saveRisks, projectId, data);
        yield call(loadRisks, {projectId});
    } catch (e) {
        yield put(risks.riskError(e));
    }
}

export function* loadRelatedRisksIds({projectId}) {
    try {
        const data = yield call(api.getRelatedRisksIds, projectId);
        yield put(risks.loadRisksSuccess(data));
    } catch (e) {
        yield put(risks.riskError(e))
    }
}

export function* loadActions({projectId}) {
    try {
        const data = yield call(api.getActions, projectId);
        yield put(actions.actionsLoadSuccess(data))
    } catch (e) {
        yield put(actions.actionsError(e))
    }
}

export function* loadCost({projectId}) {
    try {
        const data = yield call(api.getCost, projectId);
        yield put(cost.costLoadSuccess(data));
    } catch (e) {
        yield put(cost.costError(e));
    }
}

export function* loadRequirements({projectId}) {
    try {
        const data = yield call(api.getRequirements, projectId);
        yield put(requirements.loadRequirementsSuccess(data));
    } catch (e) {
        yield put(requirements.errorRequirements(e));
    }
}

export function* loadBacklogChart({projectId}) {
    try {
        const data = yield call(api.getBacklogChart, projectId);
        yield put(backlog.loadBacklogChartSuccess(data));
    } catch (e) {
        yield put(backlog.errorBacklog(e))
    }
}

export function* loadDefectsChart({projectId}) {
    try {
        const data = yield call(api.getDefectsChart, projectId);
        yield put(defects.loadDefectsChartSuccess(data));
    } catch (e) {
        yield put(defects.errorDefects(e))
    }
}

export function* loadReportTab({projectId}) {
    try {
        const data = yield call(api.getReportTab, projectId);
        yield put(report.loadReportSuccess(data));
        yield call(loadRequirements, {projectId});
        yield call(loadUserReports, {projectId});
    } catch (e) {
        yield put(report.errorReport(e));
    }
}

export function* loadUserReports({projectId}) {
    try {
        const data = yield call(api.getUserReports, projectId);
        yield put(userReports.loadUserReportsSuccess(data));
    } catch(e) {
        yield put(userReports.errorUserReports(e));
    }
}

export function* saveUserReport({projectId, data}) {
    try {
        yield call(api.saveUserReports, projectId, data);
        yield call(loadUserReports, {projectId});
    } catch (e) {
        yield put(userReports.errorUserReports(e));
    }
}

export function* saveAction({projectId, data}) {
    try {
         yield call(api.saveAction, projectId, data);
         yield call(loadActions, {projectId});
    } catch (e) {
        yield put(actions.actionsError(e));
    }
}

export function* deleteAction({uid, projectId}) {
    try {
        yield call(api.deleteAction, uid);
        yield call(loadActions, {projectId});
    } catch (e) {
        yield put(actions.actionsError(e));
    }
}

export function* saveHealthIndicators({projectId, data}) {
    try {
        yield call(api.saveHealthIndicatorsPost, projectId, data);
        yield call(loadHealthIndicators, {projectId});
    } catch (e) {
        yield put(healthIndicators.healthError(e))
    }
}

export function* saveIndicatorsRqs({projectId, data}) {
    try {
        yield call(api.saveIndicatorsRqs, projectId, data);
        yield call(loadIndicatorsRqs, {projectId});
        yield call(loadDr4Kpi, {projectId});
    } catch(e) {
        yield put(rqIndicators.indicatorsRqsError(e));
    }
}

export function* saveIndicatorsQuality({projectId, data}) {
    try {
        yield call(api.saveQualityKpi, projectId, data);
        yield call(loadQualityKpi, {projectId});
    } catch (e) {
        yield put(qualityKpi.qualityKpiError(e));
    }
}

export function* saveInformationTab({projectId, data}) {
    try {
        yield call(api.saveInformationTab, projectId, data);
        yield call(loadInformationTab, {projectId});
    } catch (e) {
        yield put(infoTab.infoError(e));
    }
}

export function* saveMilestones({projectId, data}) {
    try {
        yield call(api.saveMilestones, projectId, data);
        yield call(loadMilestones, {projectId});
    } catch (e) {
        yield put(milestones.milestonesError(e));
    }
}

export function* saveBlcTabIndicators({projectId, data}) {
    try {
        yield call(api.saveBlcIndicators, projectId, data);
        yield call(loadBlcTab, {projectId});
    } catch (e) {
        yield put(blc.blcError(e))
    }
}

export function* saveBlcTabComments({projectId, data}) {
    try {
        yield call(api.saveBlcComments, projectId, data);
        yield call(loadBlcTab, {projectId});
    } catch (e) {
        yield put(blc.blcError(e))
    }
}

export function* loadProjectDefaults({projectId}) {
    try {
        const data = yield call(api.getProjectDefaults, projectId);
        yield put(defaults.loadProjectDefaultsSuccess(data));
    } catch (e) {
        yield put(defaults.errorProjectDefaults(e));
    }
}
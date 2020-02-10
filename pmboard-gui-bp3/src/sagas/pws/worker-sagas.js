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
import * as contrib from "../../actions/pws/contrib-projects";
import * as blc from "../../actions/pws/blc-tab";
import * as risks from "../../actions/pws/risks-tab";
import * as actions from "../../actions/pws/actions-tab";
import * as cost from "../../actions/pws/cost-tab";

export function* loadSummaryTab() {
    try {
        const data = yield call(api.getSummaryInfo, 1);
        yield put(summaryTab.summaryLoadSuccess(data));

        yield call(loadHealthIndicators);
        yield call(loadMilestones);
    } catch (e) {
        yield put(summaryTab.summaryError(e));
    }
}

export function* loadIndicatorsTab() {
    try {
        yield call(loadMilestones);
        yield call(loadHealthIndicators);
        yield call(loadIndicatorsRqs);
        yield call(loadMilestonesKpi);
        yield call(loadDr4Kpi);
        yield call(loadQualityKpi)
    } catch (e) {
        yield put(indicatorsTab.indicatorsError(e))
    }
}

export function* loadInformationTab() {
    try {
        const data = yield call(api.getInformationTab, 1);
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

export function* loadHealthIndicators() {
    try {
        const data = yield call(api.getHealthIndicators, 1);
        yield put(healthIndicators.healthLoadSuccess(data));
    } catch (e) {
        yield put(healthIndicators.healthError(e));
    }
}

export function* loadMilestones() {
    try {
        const data = yield call(api.getMilestones, 1);
        yield put(milestones.milestonesLoadSuccess(data));
    } catch (e) {
        yield put(milestones.milestonesError(e));
    }
}

export function* loadIndicatorsRqs() {
    try {
        const data = yield call(api.getIndicatorsRqs, 1);
        yield put(rqIndicators.indicatorsRqsSuccess(data));
    } catch (e) {
        yield put(rqIndicators.indicatorsRqsError(e));
    }
}

export function* loadMilestonesKpi() {
    try {
        const data = yield call(api.getMilestonesKpi, 1);
        yield put(milestonesKpi.milestonesKpiSuccess(data));
    } catch (e) {
        yield put(milestonesKpi.milestonesKpiError(e))
    }
}

export function* loadDr4Kpi() {
    try {
        const data = yield call(api.getDr4Kpi, 1);
        yield put(dr4Kpi.dr4KpiSuccess(data));
    } catch (e) {
        yield put(dr4Kpi.dr4KpiError(e))
    }
}

export function* loadQualityKpi() {
    try {
        const data = yield call(api.getQualityKpi, 1);
        yield put(qualityKpi.qualityKpiSuccess(data))
    } catch (e) {
        yield put(qualityKpi.qualityKpiError(e))
    }
}

export function* loadBlcTab() {
    try {
        const data = yield call(api.getBlcTabData, 1);
        yield put(blc.blcLoadSuccess(data.data))
    } catch(e) {
        yield put(blc.blcError(e))
    }
}

export function* loadRisks() {
    try {
        const data = yield call(api.getRisks, 1);
        yield put(risks.loadSuccess(data));
    } catch (e) {
        yield put(risks.riskError(e));
    }
}

export function* saveRisk(actions) {
    try {
        yield call(api.saveRisks, 1, actions.data);
        yield call(loadRisks);
    } catch (e) {
        yield put(risks.riskError(e));
    }
}

export function* loadRelatedRisksIds() {
    try {
        const data = yield call(api.getRelatedRisksIds, 1);
        yield put(risks.loadRisksSuccess(data));
    } catch (e) {
        yield put(risks.riskError(e))
    }
}

export function* loadActions() {
    try {
        const data = yield call(api.getActions, 1);
        yield put(actions.actionsLoadSuccess(data))
    } catch (e) {
        yield put(actions.actionsError(e))
    }
}

export function* loadCost() {
    try {
        const data = yield call(api.getCost, 1);
        yield put(cost.costLoadSuccess(data));
    } catch (e) {
        yield put(cost.costError(e));
    }
}

export function* saveAction(action) {
    try {
         yield call(api.saveAction, 1, action.data);
         yield call(loadActions);
    } catch (e) {
        yield put(actions.actionsError(e));
    }
}

export function* deleteAction(action) {
    try {
        yield call(api.deleteAction, action.uid);
        yield call(loadActions);
    } catch (e) {
        yield put(actions.actionsError(e));
    }
}

export function* saveHealthIndicators(action) {
    try {
        yield call(api.saveHealthIndicatorsPost, 1, action.data);
        yield call(loadHealthIndicators);
    } catch (e) {
        yield put(healthIndicators.healthError(e))
    }
}

export function* saveIndicatorsRqs(action) {
    try {
        yield call(api.saveIndicatorsRqs, 1, action.data);
        yield call(loadIndicatorsRqs);
        yield call(loadDr4Kpi);
    } catch(e) {
        yield put(rqIndicators.indicatorsRqsError(e));
    }
}

export function* saveIndicatorsQuality(action) {
    try {
        yield call(api.saveQualityKpi, 1, action.data);
        yield call(loadQualityKpi);
    } catch (e) {
        yield put(qualityKpi.qualityKpiError(e));
    }
}

export function* saveInformationTab(action) {
    try {
        yield call(api.saveInformationTab, 1, action.data);
        yield call(loadInformationTab);
    } catch (e) {
        yield put(infoTab.infoError(e));
    }
}

export function* saveMilestones(action) {
    try {
        yield call(api.saveMilestones, 1, action.data);
        yield call(loadMilestones);
    } catch (e) {
        yield put(milestones.milestonesError(e));
    }
}

export function* saveBlcTabIndicators(action) {
    try {
        yield call(api.saveBlcIndicators, 1, action.data);
        yield call(loadBlcTab);
    } catch (e) {
        yield put(blc.blcError(e))
    }
}

export function* saveBlcTabComments(action) {
    try {
        yield call(api.saveBlcComments, 1, action.data);
        yield call(loadBlcTab);
    } catch (e) {
        yield put(blc.blcError(e))
    }
}
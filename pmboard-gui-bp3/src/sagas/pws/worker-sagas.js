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

export function* loadSummaryTab() {
    try {
        const summaryInfo = yield call(api.getSummaryInfo, 1);
        yield put(summaryTab.loadSummarySuccess(summaryInfo));

        yield call(loadHealthIndicators);
        yield call(loadMilestones);
    } catch (e) {
        yield put(summaryTab.loadSummaryError(e));
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
        yield put(indicatorsTab.loadIndicatorsError(e))
    }
}

export function* loadInformationTab() {
    try {
        const info = yield call(api.getInformationTab, 1);
        yield put(infoTab.loadInfoSuccess(info));
    } catch (e) {
        yield put(infoTab.loadInfoError);
    }
}

export function* loadContributableProjects() {
    try {
        const projects = yield call(api.getContributableProjects);
        yield put(contrib.loadContribSuccess(projects));
    } catch (e) {
        yield put(contrib.loadContribFail(e))
    }
}

export function* loadHealthIndicators() {
    try {
        const indicators = yield call(api.getHealthIndicators, 1);
        yield put(healthIndicators.loadHealthSuccess(indicators));
    } catch (e) {
        yield put(healthIndicators.loadHealthError(e));
    }
}

export function* loadMilestones() {
    try {
        const milestonesList = yield call(api.getMilestones, 1);
        yield put(milestones.loadMilestonesSuccess(milestonesList));
    } catch (e) {
        yield put(milestones.loadMilestonesFail(e));
    }
}

export function* loadIndicatorsRqs() {
    try {
        const indicatorRqs = yield call(api.getIndicatorsRqs, 1);
        yield put(rqIndicators.indicatorsRqsSuccess(indicatorRqs));
    } catch (e) {
        yield put(rqIndicators.indicatorsRqsFail(e));
    }
}

export function* loadMilestonesKpi() {
    try {
        const kpi = yield call(api.getMilestonesKpi, 1);
        yield put(milestonesKpi.milestonesKpiSuccess(kpi));
    } catch (e) {
        yield put(milestonesKpi.milestonesKpiFail(e))
    }
}

export function* loadDr4Kpi() {
    try {
        const kpi = yield call(api.getDr4Kpi, 1);
        yield put(dr4Kpi.dr4KpiSuccess(kpi));
    } catch (e) {
        yield put(dr4Kpi.dr4KpiFail(e))
    }
}

export function* loadQualityKpi() {
    try {
        const kpi = yield call(api.getQualityKpi, 1);
        yield put(qualityKpi.qualityKpiSuccess(kpi))
    } catch (e) {
        yield put(qualityKpi.qualityKpiFail(e))
    }
}

export function* loadBlcTab() {
    try {
        const blcData = yield call(api.getBlcTabData, 1);
        yield put(blc.loadSuccess(blcData.data))
    } catch(e) {
        yield put(blc.loadFailure(e))
    }
}

export function* loadRisks() {
    try {
        const data = yield call(api.getRisks, 1);
        yield put(risks.loadSuccess(data));
    } catch (e) {
        yield put(risks.riskFail(e));
    }
}

export function* loadRelatedRisksIds() {
    try {
        const data = yield call(api.getRelatedRisksIds, 1);
        yield put(risks.loadRisksSuccess(data));
    } catch (e) {
        yield put(risks.riskFail(e))
    }
}

export function* loadActions() {
    try {
        const data = yield call(api.getActions, 1);
        yield put(actions.loadActionsSuccess(data))
    } catch (e) {
        yield put(actions.actionsFailure(e))
    }
}

export function* saveHealthIndicators(action) {
    try {
        yield call(api.saveHealthIndicatorsPost, 1, action.data);
        yield call(loadHealthIndicators);
    } catch (e) {
        yield put(healthIndicators.loadHealthError(e))
    }
}

export function* saveIndicatorsRqs(action) {
    try {
        yield call(api.saveIndicatorsRqs, 1, action.data);
        yield call(loadIndicatorsRqs);
        yield call(loadDr4Kpi);
    } catch(e) {
        yield put(rqIndicators.indicatorsRqsFail(e));
    }
}

export function* saveIndicatorsQuality(action) {
    try {
        yield call(api.saveQualityKpi, 1, action.data);
        yield call(loadQualityKpi);
    } catch (e) {
        yield put(qualityKpi.qualityKpiFail(e));
    }
}

export function* saveInformationTab(action) {
    try {
        yield call(api.saveInformationTab, 1, action.data);
        yield call(loadInformationTab);
    } catch (e) {
        yield put(infoTab.loadInfoError(e));
    }
}

export function* saveMilestones(action) {
    try {
        yield call(api.saveMilestones, 1, action.data);
        yield call(loadMilestones);
    } catch (e) {
        yield put(milestones.loadMilestonesFail(e));
    }
}

export function* saveBlcTabIndicators(action) {
    try {
        yield call(api.saveBlcIndicators, 1, action.data);
        yield call(loadBlcTab);
    } catch (e) {
        yield put(blc.loadFailure(e))
    }
}

export function* saveBlcTabComments(action) {
    try {
        yield call(api.saveBlcComments, 1, action.data);
        yield call(loadBlcTab);
    } catch (e) {
        yield put(blc.loadFailure(e))
    }
}
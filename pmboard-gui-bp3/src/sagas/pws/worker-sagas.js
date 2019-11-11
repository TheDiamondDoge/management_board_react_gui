import * as api from '../../api/pws';
import {call, put} from 'redux-saga/effects';
import * as summaryTab from "../../actions/summary-tab";
import * as healthIndicators from "../../actions/health-indicators";
import * as milestones from "../../actions/milestones";
import * as indicatorsTab from "../../actions/indicators-tab";
import * as rqIndicators from "../../actions/indicators-rqs";
import * as milestonesKpi from "../../actions/milestones-kpi";
import * as dr4Kpi from "../../actions/dr4-kpi";
import * as qualityKpi from "../../actions/quality-kpi";
import * as infoTab from "../../actions/info-tab";

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

        yield call(loadMilestones);
    } catch (e) {
        yield put(infoTab.loadInfoError);
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
        yield call(loadMilestones);
    } catch (e) {
        yield put(infoTab.loadInfoError(e));
    }
}
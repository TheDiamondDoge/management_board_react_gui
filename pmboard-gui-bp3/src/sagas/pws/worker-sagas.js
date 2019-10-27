import * as api from '../../api/pws';
import {call, put} from 'redux-saga/effects';
import {loadSummaryError, loadSummarySuccess} from "../../actions/summary-tab";
import {loadHealthError, loadHealthSuccess} from "../../actions/health-indicators";
import {loadMilestonesFail, loadMilestonesSuccess} from "../../actions/milestones";
import {loadIndicatorsError} from "../../actions/indicators-tab";
import {indicatorsRqsFail, indicatorsRqsSuccess} from "../../actions/indicators-rqs";
import {milestonesKpiFail, milestonesKpiSuccess} from "../../actions/milestones-kpi";
import {dr4KpiFail, dr4KpiSuccess} from "../../actions/dr4-kpi";
import {qualityKpiFail, qualityKpiSuccess} from "../../actions/quality-kpi";
import {loadInfoError, loadInfoSuccess} from "../../actions/info-tab";

export function* loadSummaryTab() {
    try {
        const summaryInfo = yield call(api.getSummaryInfo, 1);
        yield put(loadSummarySuccess(summaryInfo));

        yield call(loadHealthIndicators);
        yield call(loadMilestones);
    } catch (e) {
        yield put(loadSummaryError(e));
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
        yield put(loadIndicatorsError(e))
    }
}

export function* loadInformationTab() {
    try {
        const infoTab = yield call(api.getInformationTab, 1);
        yield put(loadInfoSuccess(infoTab));

        yield call(loadMilestones);
    } catch (e) {
        yield put(loadInfoError);
    }
}

export function* loadHealthIndicators() {
    try {
        const healthIndicators = yield call(api.getHealthIndicators, 1);
        yield put(loadHealthSuccess(healthIndicators));
    } catch (e) {
        yield put(loadHealthError(e));
    }
}

export function* loadMilestones() {
    try {
        const milestones = yield call(api.getMilestones, 1);
        yield put(loadMilestonesSuccess(milestones));
    } catch (e) {
        yield put(loadMilestonesFail(e));
    }
}

export function* loadIndicatorsRqs() {
    try {
        const indicatorRqs = yield call(api.getIndicatorsRqs, 1);
        console.log("LOADEDDDDD", indicatorRqs);
        yield put(indicatorsRqsSuccess(indicatorRqs));
    } catch (e) {
        yield put(indicatorsRqsFail(e));
    }
}

export function* loadMilestonesKpi() {
    try {
        const milestonesKpi = yield call(api.getMilestonesKpi, 1);
        yield put(milestonesKpiSuccess(milestonesKpi));
    } catch (e) {
        yield put(milestonesKpiFail(e))
    }
}

export function* loadDr4Kpi() {
    try {
        const dr4Kpi = yield call(api.getDr4Kpi, 1);
        yield put(dr4KpiSuccess(dr4Kpi));
    } catch (e) {
        yield put(dr4KpiFail(e))
    }
}

export function* loadQualityKpi() {
    try {
        const qualityKpi = yield call(api.getQualityKpi, 1);
        yield put(qualityKpiSuccess(qualityKpi))
    } catch (e) {
        yield put(qualityKpiFail(e))
    }
}

export function* saveHealthIndicators(action) {
    try {
        yield call(api.saveHealthIndicatorsPost, 1, action.data);
        yield call(loadHealthIndicators);
    } catch (e) {
        yield put(loadHealthError(e))
    }
}

export function* saveIndicatorsRqs(action) {
    try {
        yield call(api.saveIndicatorsRqs, 1, action.data);
        yield call(loadIndicatorsRqs);
        yield call(loadDr4Kpi);
    } catch(e) {
        yield put(indicatorsRqsFail(e));
    }
}

export function* saveIndicatorsQuality(action) {
    try {
        yield call(api.saveQualityKpi, 1, action.data);
        yield call(loadQualityKpi);
    } catch (e) {
        yield put(qualityKpiFail(e));
    }
}
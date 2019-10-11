import {getSummaryInfo, getHealthIndicators, getMilestones, getIndicatorsRqs} from '../../api/pws';
import {call, put} from 'redux-saga/effects';
import {loadSummaryError, loadSummarySuccess} from "../../actions/summary-tab";
import {loadHealthError, loadHealthSuccess} from "../../actions/health-indicators";
import {loadMilestonesFail, loadMilestonesSuccess} from "../../actions/milestones";
import {loadIndicatorsError, loadIndicatorsRqsError, loadIndicatorsRqsSuccess} from "../../actions/indicators-tab";

export function* loadSummaryTab() {
    try {
        const summaryInfo = yield call(getSummaryInfo, 1);
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
    } catch (e) {
        yield put(loadIndicatorsError)
    }
}

export function* loadHealthIndicators() {
    try {
        const healthIndicators = yield call(getHealthIndicators, 1);
        yield put(loadHealthSuccess(healthIndicators));
    } catch (e) {
        yield put(loadHealthError(e));
    }
}

export function* loadMilestones() {
    try {
        const milestones = yield call(getMilestones, 1);
        yield put(loadMilestonesSuccess(milestones));
    } catch (e) {
        yield put(loadMilestonesFail(e));
    }
}

export function* loadIndicatorsRqs() {
    try {
        const indicatorRqs = yield call(getIndicatorsRqs, 1);
        yield put(loadIndicatorsRqsSuccess(indicatorRqs));
    } catch (e) {
        yield put(loadIndicatorsRqsError(e));
    }
}
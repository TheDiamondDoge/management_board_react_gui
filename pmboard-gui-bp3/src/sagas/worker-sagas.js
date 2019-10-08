import {getSummaryInfo, getHealthIndicators, getMilestones} from '../api/pws';
import {call, put} from 'redux-saga/effects';
import {loadSummaryError, loadSummarySuccess} from "../actions/summary-tab";
import {loadHealthError, loadHealthSuccess} from "../actions/health-indicators";
import {loadMilestonesFail, loadMilestonesSuccess} from "../actions/milestones";

export function* loadSummaryTab() {
    try {
        yield call(loadHealthIndicators);
        yield call(loadMilestones);

        const summaryInfo = yield call(getSummaryInfo, 1);
        yield put(loadSummarySuccess(summaryInfo));
    } catch (e) {
        yield put(loadSummaryError(e));
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
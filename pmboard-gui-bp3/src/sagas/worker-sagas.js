import {getSummaryInfo, getHealthIndicators} from '../api/pws';
import {call, put} from 'redux-saga/effects';
import {loadError, loadSuccess} from "../actions/summary-tab";

export function* loadSummaryTab() {
    try {
        const summaryInfo = yield call(getSummaryInfo, 1);
        const healthIndicators = yield call(loadHealthIndicators);
        yield put(loadSuccess(summaryInfo));
    } catch (e) {
        yield put(loadError(e));
    }
}

export function* loadHealthIndicators() {
    try {
        yield call(getHealthIndicators, 1);
    } catch (e) {
        yield ;
    }
}
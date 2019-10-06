import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

function* fetch({url, successHandler, failureHandler}) {
    try {
        const fetchResults = yield call(
            axios.get,
            url
        );
        yield put(successHandler(fetchResults.data));
    } catch (e) {
        yield put(failureHandler(e))
    }
}

export default function* () {
    yield takeLatest()
}
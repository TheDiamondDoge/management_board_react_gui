import axios from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {LOAD_INDICATORS, loadSuccess, loadError} from "../actions/indicators-tab";

function* doSearch() {
    try {
        const getResult = yield call(
            axios.get,
            "http://localhost:8080/api/projects/1/tabs/indicators",
        );
        yield put(loadSuccess(getResult.data));
    } catch (e) {
        yield put(loadError(e));
    }
}

export default function* () {
    yield takeLatest(LOAD_INDICATORS, doSearch);
}
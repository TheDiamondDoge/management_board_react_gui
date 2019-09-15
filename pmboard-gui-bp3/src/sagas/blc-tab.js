import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { LOAD_BLC, loadSuccess, loadFailure } from "../actions/blc-tab";

function* getData() {
    try {
        const result = yield call(
            axios.get,
            "http://localhost:8080/api/projects/1/tabs/blc",
        );
        yield put(loadSuccess(result.data));
    } catch (e) {
        yield put(loadFailure(e))
    }
}

export default function* () {
    yield takeLatest(LOAD_BLC, getData);
}
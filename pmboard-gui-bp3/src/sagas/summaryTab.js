import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import {LOAD_SUMMARY, loadError, loadSuccess} from "../actions/summary-tab";

function* doSearch(test) {
    console.log("doSearch", test);
    try {
        const searchResults = yield call(
            axios.get,
            "http://localhost:8080/api/projects/1/tabs/summary",
        );
        yield put(loadSuccess(searchResults.data));
    } catch (e) {
        yield put(loadError(e))
    }
}

export default function* () {
    yield takeLatest(LOAD_SUMMARY, doSearch);
}
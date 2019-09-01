import axios from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {LOAD_INFO, loadSuccess, loadError} from "../actions/infoTab";

function* doSearch() {
    try {
        const searchResults = yield call(
            axios.get,
            "http://localhost:8080/api/projects/1/tabs/information",
        );
        yield put(loadSuccess(searchResults.data));
    } catch (e) {
        yield put(loadError(e))
    }
}

export default function* () {
    yield takeLatest(LOAD_INFO, doSearch);
}
import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {GET_RANDOM_GIPHY, onError, onSuccess} from "../actions/random";

const apiKey = '905ee2e802364f25829caca102b38b73';
// const apiKey = '92o7IBxIw4aLRF0WaOPgpPMjcTy7Yi6C';

function* doSearch() {
    try{
        const result = yield call(
            axios.get,
            `https://api.giphy.com/v1/gifs/random`,
            {
                params: {
                    apiKey
                }
            }
        );
        yield put(onSuccess(result.data.data));
    }catch (e) {
        yield put(onError())
    }
}

export default function* () {
    yield takeLatest(GET_RANDOM_GIPHY, doSearch);
}




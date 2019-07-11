import axios from 'axios';
import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { PERFORM_SEARCH, searchSuccess, searchError } from '../actions/search';

const apiKey = '905ee2e802364f25829caca102b38b73';
// const apiKey = '92o7IBxIw4aLRF0WaOPgpPMjcTy7Yi6C';

const selectSearchState = (state) => state.search;

function* doSearch() {
    const { currentOffset, searchTerm } = yield select(selectSearchState);

    try {
        const params = {
            apiKey,
            q: searchTerm,
            limit: 50,
            offset: currentOffset,
        };
        let endpoint;
        if (searchTerm === undefined){
            endpoint = 'trending';
            delete params.q;
        } else {
            endpoint = 'search';
            params.q = searchTerm;
        }


        const searchResults = yield call(
            axios.get,
            `https://api.giphy.com/v1/gifs/${endpoint}`,
            {
               params
            }
        );
        yield put(searchSuccess(searchResults.data.data));
    } catch (e) {
        yield put(searchError());
    }
}

export default function* () {
    yield takeLatest(PERFORM_SEARCH, doSearch);
}

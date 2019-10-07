import pwsSagas from './watch-sagas';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...pwsSagas
    ])
}
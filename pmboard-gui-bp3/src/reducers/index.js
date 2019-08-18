import {combineReducers} from 'redux';
import testReducer from './test'
import summaryTabReducer from './summaryTab';

export default combineReducers({
    test: testReducer,
    summaryTab: summaryTabReducer,
});
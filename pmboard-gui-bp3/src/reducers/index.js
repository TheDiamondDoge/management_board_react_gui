import {combineReducers} from 'redux';
import testReducer from './test'
import summaryTabReducer from './summaryTab';
import indicatorsTabReducer from "./indicatorsTab";
import infoTabReducer from "./infoTab";
import costTabReducer from "./costTab";

export default combineReducers({
    test: testReducer,
    summaryTab: summaryTabReducer,
    indicatorsTab: indicatorsTabReducer,
    infoTab: infoTabReducer,
    costTab: costTabReducer,
});
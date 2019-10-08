import {combineReducers} from 'redux';
import testReducer from './test'
import summaryTabReducer from './summaryTab';
import indicatorsTabReducer from "./indicatorsTab";
import infoTabReducer from "./infoTab";
import costTabReducer from "./costTab";
import blcTabReducer from "./blc-tab";
import healthIndicatorsReducer from "./health-indicators";
import milestonesReducer from "./milestones";

export default combineReducers({
    test: testReducer,
    summaryTab: summaryTabReducer,
    indicatorsTab: indicatorsTabReducer,
    infoTab: infoTabReducer,
    costTab: costTabReducer,
    blcTab: blcTabReducer,
    healthIndicators: healthIndicatorsReducer,
    milestones: milestonesReducer,
});
import {combineReducers} from 'redux';
import testReducer from './test'
import summaryTabReducer from './summaryTab';
import indicatorsTabReducer from "./indicatorsTab";
import infoTabReducer from "./infoTab";
import costTabReducer from "./costTab";
import blcTabReducer from "./blc-tab";
import healthIndicatorsReducer from "./health-indicators";
import milestonesReducer from "./milestones";
import indicatorsRqsReducer from "./indicators-rqs";
import milestonesKpiReducer from "./milestones-kpi";
import dr4KpiReducer from "./dr4-kpi";
import qualityKpiReducer from "./quality-kpi";

export default combineReducers({
    pws: pwsReducers()
});

function pwsReducers() {
    return combineReducers({
        test: testReducer,
        summaryTab: summaryTabReducer,
        healthIndicators: healthIndicatorsReducer,
        milestones: milestonesReducer,
        indicatorsRqs: indicatorsRqsReducer,
        milestonesKpi: milestonesKpiReducer,
        dr4kpi: dr4KpiReducer,
        qualityKpi: qualityKpiReducer,
        indicatorsTab: indicatorsTabReducer,
        infoTab: infoTabReducer,
        costTab: costTabReducer,
        blcTab: blcTabReducer,
    })
}

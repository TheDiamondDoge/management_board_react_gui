import {combineReducers} from 'redux';
import testReducer from './test'
import summaryTabReducer from './pws/summary-tab';
import indicatorsTabReducer from "./pws/indicators-tab";
import infoTabReducer from "./pws/info-tab";
import costTabReducer from "./pws/cost-tab";
import blcTabReducer from "./pws/blc-tab";
import healthIndicatorsReducer from "./pws/health-indicators";
import milestonesReducer from "./pws/milestones";
import indicatorsRqsReducer from "./pws/indicators-rqs";
import milestonesKpiReducer from "./pws/milestones-kpi";
import dr4KpiReducer from "./pws/dr4-kpi";
import qualityKpiReducer from "./pws/quality-kpi";
import contrib from "./pws/contrib-list";
import risks from "./pws/risks-tab";
import actions from "./pws/actions";
import requirements from "./pws/requirements-tab";
import backlog from "./pws/backlog";
import defects from "./pws/defects";
import report from "./pws/report-tab";
import userReports from "./pws/user-reports";
import contribTable from "./pws/contrib-table";
import defaults from "./pws/default";

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
        contrib: contrib,
        risks: risks,
        actions: actions,
        requirementsTab: requirements,
        backlogTab: backlog,
        defectsTab: defects,
        reportTab: report,
        userReports: userReports,
        contribTable: contribTable,
        defaults: defaults
    })
}

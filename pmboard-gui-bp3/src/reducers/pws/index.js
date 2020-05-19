import {combineReducers} from 'redux';
import summaryTabReducer from './summary-tab';
import indicatorsTabReducer from "./indicators-tab";
import infoTabReducer from "./info-tab";
import costTabReducer from "./cost-tab";
import blcTabReducer from "./blc-tab";
import healthIndicatorsReducer from "./health-indicators";
import milestonesReducer from "./milestones";
import indicatorsRqsReducer from "./indicators-rqs";
import milestonesKpiReducer from "./milestones-kpi";
import dr4KpiReducer from "./dr4-kpi";
import qualityKpiReducer from "./quality-kpi";
import contrib from "./contrib-list";
import risks from "./risks";
import actions from "./actions";
import requirements from "./requirements-tab";
import backlog from "./backlog";
import defects from "./defects";
import report from "./report-tab";
import userReports from "./user-reports";
import contribTable from "./contrib-table";
import defaults from "./default";
import pptExport from "./ppt-export";

export default function pwsReducers() {
    return combineReducers({
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
        risks: risks(),
        actions: actions,
        requirementsTab: requirements,
        backlogTab: backlog,
        defectsTab: defects,
        reportTab: report,
        userReports: userReports,
        contribTable: contribTable,
        defaults: defaults,
        pptReport: pptExport,
    })
}

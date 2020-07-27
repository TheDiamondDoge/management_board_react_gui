import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {summaryLoad, summaryReset} from "../../../../../actions/pws/summary-tab";
import {milestonesReset} from "../../../../../actions/pws/milestones";
import {healthReset} from "../../../../../actions/pws/health-indicators";
import {exportContribTable, loadContribTable, resetContribTable} from "../../../../../actions/pws/contrib-table";
import { useOnMountCall, usePwsTabNameUrlChanger } from "../../../../../util/HOCs";
import SummaryTab from "./summary-tab";

function SummaryTabContainer(props) {
    usePwsTabNameUrlChanger(props.tabId);

    const {projectId} = props.defaults.payload;
    const dispatch = useDispatch();
    const dispatchFunctions = {};
    dispatchFunctions.loadData = useCallback(() => {
        dispatch(summaryLoad(projectId));
        dispatch(loadContribTable(projectId));
    }, [dispatch, projectId]);

    dispatchFunctions.onContribExport = useCallback((projectName) => {
        dispatch(exportContribTable(projectId, projectName));
    }, [dispatch, projectId]);

    const resetData = useCallback(() => {
        dispatch(summaryReset());
        dispatch(milestonesReset());
        dispatch(healthReset());
        dispatch(resetContribTable());
    }, [dispatch]);

    const reduxData = {};
    reduxData.summaryData = useSelector(state => state.pws.summaryTab);
    reduxData.milestones = useSelector(state => state.pws.milestones);
    reduxData.healthIndicators = useSelector(state => state.pws.healthIndicators);
    reduxData.contribTable = useSelector(state => state.pws.contribTable);

    useOnMountCall(dispatchFunctions.loadData, resetData)

    return (<SummaryTab
                {...props}
                {...dispatchFunctions}
                {...reduxData}
             />)
}

export default SummaryTabContainer;
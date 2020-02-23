import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import Report from '../../tabs/report-tab/report-tab.container';
import styles from './pws.module.css';
import SummaryTab from "../../tabs/summary-tab/summary-tab.container";
import InfoTab from "../../tabs/info-tab/info-tab.container";
import IndicatorsTab from "../../tabs/indicators-tab/indicators-tab.container";
import CostTab from "../../tabs/cost-tab/cost-tab.container";
import BlcDashboard from "../../tabs/blc/blc.container";
import Risks from "../../tabs/risks/risks.container";
import ErrorBoundary from "../../error-boundary/error-boundary";
import Actions from "../../tabs/actions/actions.container";
import Requirements from "../../tabs/requirements-tab/requirements-tab.container";
import BacklogTab from "../../tabs/backlog-tab/backlog-tab.container";
import DefectsTab from "../../tabs/defects-tab/defects-tab.container";

export default class PWS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 'rqs'
        };
    }

    onChange = (tabId) => (
        this.setState({selectedId: tabId})
    );

    render() {
        return (
            <div>
                <h1>Project Pineapple</h1>
                <Tabs
                    id="pws_tabs"
                    large
                    renderActiveTabPanelOnly
                    selectedTabId={this.state.selectedId}
                    className={styles.center}
                    onChange={this.onChange}
                >
                    <Tab id="summary" title="Summary" panel={<ErrorBoundary><SummaryTab/></ErrorBoundary>}/>
                    <Tab id="indicators" title="Indicators" panel={<ErrorBoundary><IndicatorsTab/></ErrorBoundary>}/>
                    <Tab id="information" title="Information" panel={<ErrorBoundary><InfoTab/></ErrorBoundary>}/>
                    <Tab id="actions" title="Actions" panel={<ErrorBoundary><Actions/></ErrorBoundary>}/>
                    <Tab id="risks" title="Risks" panel={<ErrorBoundary><Risks/></ErrorBoundary>}/>
                    <Tab id="cost" title="Cost" panel={<ErrorBoundary><CostTab/></ErrorBoundary>}/>
                    <Tab id="report" title="Report" panel={<ErrorBoundary><Report/></ErrorBoundary>}/>
                    <Tab id="rqs" title="Requirements" panel={<ErrorBoundary><Requirements/></ErrorBoundary>}/>
                    <Tab id="backlog" title="Backlog" panel={<ErrorBoundary><BacklogTab/></ErrorBoundary>}/>
                    <Tab id="defects" title="Defects" panel={<ErrorBoundary><DefectsTab/></ErrorBoundary>}/>
                    <Tab id="blc" title="BLC Dashboard" panel={<ErrorBoundary><BlcDashboard/></ErrorBoundary>}/>
                </Tabs>
            </div>
        );
    }
}
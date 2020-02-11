import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import Hello from '../../test_comps/world.container';
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
import BacklogTab from "../../tabs/actions/backlog-tab/backlog-tab.container";

export default class PWS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 'back'
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
                    <Tab id="sum" title="Summary" panel={<ErrorBoundary><SummaryTab/></ErrorBoundary>}/>
                    <Tab id="ind" title="Indicators" panel={<ErrorBoundary><IndicatorsTab/></ErrorBoundary>}/>
                    <Tab id="inf" title="Information" panel={<ErrorBoundary><InfoTab/></ErrorBoundary>}/>
                    <Tab id="actions" title="Actions" panel={<ErrorBoundary><Actions/></ErrorBoundary>}/>
                    <Tab id="risks" title="Risks" panel={<ErrorBoundary><Risks/></ErrorBoundary>}/>
                    <Tab id="cost" title="Cost" panel={<ErrorBoundary><CostTab/></ErrorBoundary>}/>
                    <Tab id="rep" title="Report" disabled panel={<ErrorBoundary><Hello/></ErrorBoundary>}/>
                    <Tab id="req" title="Requirements" panel={<ErrorBoundary><Requirements/></ErrorBoundary>}/>
                    <Tab id="back" title="Backlog" panel={<ErrorBoundary><BacklogTab/></ErrorBoundary>}/>
                    <Tab id="blc" title="BLC Dashboard" panel={<ErrorBoundary><BlcDashboard/></ErrorBoundary>}/>
                </Tabs>
            </div>
        );
    }
}
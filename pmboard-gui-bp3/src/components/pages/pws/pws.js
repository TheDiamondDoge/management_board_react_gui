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
import {PWSTabs} from "../../../util/constants";

export default class PWS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: "",
            defaults: {
                defaultSelectedTab: "summary",
                defaultTabNames: this.getDefaultTabNames()
            }
        };
    }

    getDefaultTabNames() {
        return Object.keys(PWSTabs).map(key => PWSTabs[key])
    }

    onChange = (tabId) => (
        this.setState({selectedId: tabId})
    );

    render() {
        console.log(SummaryTab);
        console.log("PARAMS", this.props.location.search);
        const tabName = this.getActiveTabName();
        return (
            <div>
                <h1>Project Pineapple</h1>
                <Tabs
                    id="pws_tabs"
                    large
                    renderActiveTabPanelOnly
                    selectedTabId={this.state.selectedId || tabName}
                    className={styles.center}
                    onChange={this.onChange}
                >
                    <Tab id="summary" title="Summary" panel={<ErrorBoundary><SummaryTab tabId={PWSTabs.SUMMARY}/></ErrorBoundary>}/>
                    <Tab id="indicators" title="Indicators" panel={<ErrorBoundary><IndicatorsTab tabId={PWSTabs.INDICATORS}/></ErrorBoundary>}/>
                    <Tab id="information" title="Information" panel={<ErrorBoundary><InfoTab tabId={PWSTabs.INFORMATION}/></ErrorBoundary>}/>
                    <Tab id="actions" title="Actions" panel={<ErrorBoundary><Actions tabId={PWSTabs.ACTIONS}/></ErrorBoundary>}/>
                    <Tab id="risks" title="Risks" panel={<ErrorBoundary><Risks tabId={PWSTabs.RISKS}/></ErrorBoundary>}/>
                    <Tab id="cost" title="Cost" panel={<ErrorBoundary><CostTab tabId={PWSTabs.COST}/></ErrorBoundary>}/>
                    <Tab id="report" title="Report" panel={<ErrorBoundary><Report tabId={PWSTabs.REPORT}/></ErrorBoundary>}/>
                    <Tab id="rqs" title="Requirements" panel={<ErrorBoundary><Requirements tabId={PWSTabs.REQUIREMENTS}/></ErrorBoundary>}/>
                    <Tab id="backlog" title="Backlog" panel={<ErrorBoundary><BacklogTab tabId={PWSTabs.BACKLOG}/></ErrorBoundary>}/>
                    <Tab id="defects" title="Defects" panel={<ErrorBoundary><DefectsTab tabId={PWSTabs.DEFECTS}/></ErrorBoundary>}/>
                    <Tab id="blc" title="BLC Dashboard" panel={<ErrorBoundary><BlcDashboard tabId={PWSTabs.BLC}/></ErrorBoundary>}/>
                </Tabs>
            </div>
        );
    }

    getActiveTabName() {
        const urlParams = this.props.location.search;
        const tabName = new URLSearchParams(urlParams).get('tab');
        return this.isTabNameExists(tabName) ? tabName.toLowerCase() : this.state.defaults.defaultSelectedTab;
    }

    isTabNameExists(name) {
        return this.state.defaults.defaultTabNames.includes(String(name).toLowerCase());
    }
}
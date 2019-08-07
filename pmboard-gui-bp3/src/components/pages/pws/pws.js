import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import Hello from '../../test_comps/world';
import styles from './pws.module.css';
import SummaryTab from "../../tabs/summaryTab/summaryTab";
import InfoTab from "../../tabs/infoTab/infoTab";
import IndicatorsTab from "../../tabs/indicatorsTab/indicatorsTab";
import CostTab from "../../tabs/costTab/costTab";
import BlcDashboard from "../../tabs/blc/blc";

export default class PWS extends React.Component {
    state = {
        selectedId: 'ind'
    };

    handleTabsOnChange = (tabId) => (
        this.setState({selectedId: tabId})
    );

    render() {
        return (
            <div>
                <h1>Project Pineapple</h1>
                <Tabs
                    id="pws_tabs"
                    selectedTabId={this.state.selectedId}
                    className={styles.center}
                    onChange={this.handleTabsOnChange}
                    renderActiveTabPanelOnly={true}
                    large={true}
                >
                    <Tab id="sum" title="Summary" panel={<SummaryTab />} />
                    <Tab id="ind" title="Indicators"  panel={<IndicatorsTab/>}/>
                    <Tab id="inf" title="Information" panel={<InfoTab />}/>
                    <Tab id="risks" title="Risks" disabled={true}/>
                    <Tab id="cost" title="Cost" panel={<CostTab />} />
                    <Tab id="rep" title="Report" panel={<Hello/>}/>
                    <Tab id="req" title="Requirements" disabled={true}/>
                    <Tab id="back" title="Backlog" disabled={true}/>
                    <Tab id="blc" title="BLC Dashboard" panel={<BlcDashboard />}/>
                </Tabs>
            </div>
        );
    }
}
import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import Hello from '../../test_comps/world';
import styles from './pws.module.css';
import SummaryTab from "./tabs/summaryTab/summaryTab";
import InfoTab from "./tabs/infoTab/infoTab";

export default class PWS extends React.Component {
    state = {
        selectedId: 'sum'
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
                    <Tab id="sum" title="Summary" panel={<SummaryTab/>}/>
                    <Tab id="ind" title="Indicators" panel={<Hello/>}/>
                    <Tab id="inf" title="Information" panel={<InfoTab />}/>
                    <Tab id="rep" title="Report" panel={<Hello/>}/>
                </Tabs>
            </div>
        );
    }
}
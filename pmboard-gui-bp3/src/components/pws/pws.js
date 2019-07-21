import React from 'react';
import {Alignment, Tab, Tabs} from "@blueprintjs/core";
import Test from '../test_comps/test';
import Hello from '../test_comps/world';
import styles from './pws.module.css';

export default class PWS extends React.Component {
    state = {
        selectedId: 'sum'
    };

    handleTabsOnChange = (tabId) => (
        this.setState({selectedId: tabId})
    );

    render() {
        console.log(Alignment.CENTER)
        return (
            <div>
                Welcome to PWS
                <div>
                    <Tabs className={styles.center} id="pws_tabs" selectedTabId={this.state.selectedId} onChange={this.handleTabsOnChange} large={true} >
                        <Tab id="sum" title="Summary" panel={<Test/>} />
                        <Tab id="ind" title="Indicators" panel={<Hello/>} />
                        <Tab id="inf" title="Information" panel={<Test/>} />
                        <Tab id="rep" title="Report" panel={<Hello/>} />
                    </Tabs>
                </div>
            </div>
        );
    }
}
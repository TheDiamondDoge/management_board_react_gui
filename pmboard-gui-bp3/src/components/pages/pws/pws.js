import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import Report from '../../tabs/report-tab/report-tab.container';
import styles from './pws.module.scss';
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
import PropTypes from "prop-types";
import LoadingStatus from "../../global-statuses/loading-status";
import StatusContainer from "../../status-container/status-container";
import {getUrlParam} from "../../../util/util";
import ProjectNotFoundStatus from "../../global-statuses/project-not-found-status/project-not-found-status";
import config from "./config";

import "./pws.scss";
import {Helmet} from "react-helmet";
import RenderFieldHelper from "../../../util/render-field-helper";
import {ProjectDefaults} from "../../../util/custom-types";

export default class PWS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: "",
            defaults: {
                defaultSelectedTab: PWSTabs.SUMMARY,
                defaultTabNames: this.getDefaultTabNames()
            }
        };
    }

    componentDidMount() {
        this.projectId = Number(getUrlParam("projectId"));
        this.props.loadData(this.projectId);
    }

    componentWillUnmount() {
        this.props.resetData();
    }


    render() {
        const {loading, error} = this.props.defaults;
        if (loading) {
            return <StatusContainer><LoadingStatus/></StatusContainer>;
        } else if (error) {
            return <ProjectNotFoundStatus id={this.projectId}/>;
        } else {
            this.renderFieldHelper = new RenderFieldHelper(config, this.props.defaults.payload);
            const tabName = this.getActiveTabName();
            const {projectName, requirementsUrl, metricsScope} = this.props.defaults.payload;
            const selectedTabId = this.state.selectedId || tabName;
            return (
                <>
                    <Helmet>
                        <title>{projectName}</title>
                    </Helmet>
                    <div className={styles.pws_container}>
                        <h1>Project {projectName}</h1>
                        <Tabs
                            id="pws_tabs"
                            large
                            renderActiveTabPanelOnly
                            selectedTabId={selectedTabId}
                            className={styles.tabs}
                            onChange={this.onChange}
                        >
                            {this.renderFieldHelper.displayOrNot(PWSTabs.SUMMARY) &&
                            <Tab
                                id={PWSTabs.SUMMARY}
                                title="Summary"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <SummaryTab tabId={PWSTabs.SUMMARY}/>
                                    </ErrorBoundary>
                                )}
                            />
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.INDICATORS) &&
                            <Tab
                                id={PWSTabs.INDICATORS}
                                title="Indicators"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <IndicatorsTab tabId={PWSTabs.INDICATORS}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.INFORMATION) &&
                            <Tab
                                id={PWSTabs.INFORMATION}
                                title="Information"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <InfoTab tabId={PWSTabs.INFORMATION}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.ACTIONS) &&
                            <Tab
                                id={PWSTabs.ACTIONS}
                                title="Actions"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <Actions tabId={PWSTabs.ACTIONS}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.RISKS) &&
                            <Tab
                                id={PWSTabs.RISKS}
                                title="Risks"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <Risks tabId={PWSTabs.RISKS}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.COST) &&
                            <Tab
                                id={PWSTabs.COST}
                                title="Cost"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <CostTab tabId={PWSTabs.COST}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.REPORT) &&
                            <Tab
                                id={PWSTabs.REPORT}
                                title="Report"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <Report tabId={PWSTabs.REPORT}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.REQUIREMENTS) &&
                            <Tab
                                id={PWSTabs.REQUIREMENTS}
                                title="Requirements"
                                className={styles.tab_container}
                                disabled={!requirementsUrl}
                                panel={(
                                    <ErrorBoundary>
                                        <Requirements tabId={PWSTabs.REQUIREMENTS}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.BACKLOG) &&
                            <Tab
                                id={PWSTabs.BACKLOG}
                                title="Backlog"
                                className={styles.tab_container}
                                disabled={!metricsScope}
                                panel={(
                                    <ErrorBoundary>
                                        <BacklogTab tabId={PWSTabs.BACKLOG}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.DEFECTS) &&
                            <Tab
                                id={PWSTabs.DEFECTS}
                                title="Defects"
                                className={styles.tab_container}
                                disabled={!metricsScope}
                                panel={(
                                    <ErrorBoundary>
                                        <DefectsTab tabId={PWSTabs.DEFECTS}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                            {this.renderFieldHelper.displayOrNot(PWSTabs.BLC) &&
                            <Tab
                                id={PWSTabs.BLC}
                                title="BLC Dashboard"
                                className={styles.tab_container}
                                panel={(
                                    <ErrorBoundary>
                                        <BlcDashboard tabId={PWSTabs.BLC}/>
                                    </ErrorBoundary>
                                )}/>
                            }
                        </Tabs>
                    </div>
                </>
            );
        }
    }

    getDefaultTabNames() {
        return Object.keys(PWSTabs).map(key => PWSTabs[key])
    }

    onChange = (tabId) => (
        this.setState({selectedId: tabId})
    );

    getActiveTabName() {
        const urlParams = this.props.location.search;
        const tabName = new URLSearchParams(urlParams).get('tab');
        return this.isTabNameExists(tabName) && this.renderFieldHelper.displayOrNot(tabName)
            ? tabName.toLowerCase()
            : this.state.defaults.defaultSelectedTab;
    }

    isTabNameExists(name) {
        return this.state.defaults.defaultTabNames.includes(String(name).toLowerCase());
    }
}

PWS.propTypes = {
    defaults: PropTypes.shape({
        loading: PropTypes.bool,
        payload: ProjectDefaults,
    }),
    loadData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
};
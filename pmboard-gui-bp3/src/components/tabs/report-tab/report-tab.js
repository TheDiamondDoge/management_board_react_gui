import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import UpdatedInfo from "../../updated-info/updated-info";
import styles from "./report-tab.module.css";
import Timeline from "../../timeline/timeline";
import classNames from "classnames";
import {Button, Divider, Intent, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";
import HealthIndicatorsMinimal from "../../health-indicators-minimal/health-indicators-minimal";
import CustomQuill from "../../custom-quill/custom-quill";
import RisksList from "../../risks-list/risks-list";
import TwoItemsLiner from "../../two-items-liner/two-items-liner";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {MilestoneShape, RiskReportType} from "../../../util/custom-types";
import RqsReportList from "../../rqs-report-list/rqs-report-list";
import {ReportTypes} from "../../../util/constants";

//TODO populate snapshots in popover
export default class ReportTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    render() {
        const {loading} = this.props.report;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {updatedOn, projectName, projectManager, indicators, milestones, risks} = this.props.report.payload;
            const uploadClasses = classNames(styles.inline_block, styles.float_right, styles.health_minimal);
            const risksObj = this.getRiskObj(risks);

            const rqsLoading = this.props.rqs.loading;
            const rqsPayload = this.props.rqs.payload;

            const userReportsLoading = this.props.userReports.loading;
            const userReportsPayload = this.props.userReports.payload;
            const userReportSubmit = this.props.saveData;
            const {details, green, orange, red, summary} = userReportsPayload;
            return (
                <>
                    <CustomCard>
                        <div className={styles.inline_block}>
                            <UpdatedInfo date={updatedOn}/>
                            <TwoItemsLiner first={"Project Name:"} second={<b>{projectName}</b>}/>
                            <TwoItemsLiner first={"Project manager:"} second={<b>{projectManager}</b>}/>
                        </div>
                        <div className={uploadClasses}>
                            {this.pptExportButton}
                        </div>
                        <HealthIndicatorsMinimal indicators={indicators} className={uploadClasses}/>
                        <br/>
                        <br/>
                        <br/>
                        <Timeline milestones={milestones}/>
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <CustomQuill value={summary}
                                     header={<h3>Executive Status Summary</h3>}
                                     onSubmit={this.onUserReportSaveFactory(ReportTypes.SUMMARY, userReportSubmit)}
                                     loading={userReportsLoading}
                        />
                        <br/>
                        <CustomQuill value={red}
                                     header={<h3 className={styles.red}>Red Flag (executive action needed)</h3>}
                                     onSubmit={this.onUserReportSaveFactory(ReportTypes.RED_FLAG, userReportSubmit)}
                                     loading={userReportsLoading}
                        />
                        <br/>
                        <CustomQuill value={orange}
                                     header={<h3 className={styles.orange}>Orange Flag (core team action needed)</h3>}
                                     onSubmit={this.onUserReportSaveFactory(ReportTypes.ORANGE_FLAG, userReportSubmit)}
                                     loading={userReportsLoading}
                        />
                        <br/>
                        <CustomQuill value={green}
                                     header={<h3 className={styles.green}>Green Flag</h3>}
                                     onSubmit={this.onUserReportSaveFactory(ReportTypes.GREEN_FLAG, userReportSubmit)}
                                     loading={userReportsLoading}
                        />
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <CustomQuill value={details}
                                     header={<h3>Current Project Details</h3>}
                                     onSubmit={this.onUserReportSaveFactory(ReportTypes.DETAILS, userReportSubmit)}
                                     loading={userReportsLoading}
                        />
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <h3>Scope Definition</h3>
                        {rqsLoading
                            ? <LoadingSpinner/>
                            : <RqsReportList data={rqsPayload} className={styles.scope_definition}/>
                        }
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <h3>Risks</h3>
                        <Divider/>
                        <div>
                            <div className={styles.risk_block}>
                                <h4 className={styles.red}>High</h4>
                                <RisksList data={risksObj.high}/>
                            </div>
                            <div className={styles.risk_block}>
                                <Divider/>
                                <h4 className={styles.orange}>Moderate</h4>
                                <RisksList data={risksObj.mod}/>
                            </div>
                            <div className={styles.risk_block}>
                                <Divider/>
                                <h4 className={styles.green}>Low</h4>
                                <RisksList data={risksObj.low}/>
                            </div>
                        </div>
                    </CustomCard>
                </>
            );
        }
    }

    onUserReportSaveFactory(type, submitFunc) {
        return function(value) {
            submitFunc({
                type: type,
                data: value
            })
        }
    }

    getRiskObj(risks) {
        let riskObj = {};
        riskObj.low = risks.filter(risk => risk.rating > 0 && risk.rating < 6);
        riskObj.mod = risks.filter(risk => risk.rating >= 6 && risk.rating <= 10);
        riskObj.high = risks.filter(risk => risk.rating > 10);
        return riskObj;
    }

    pptMenu = (
        <Menu>
            <MenuItem text={"PowerPoint, program template"}/>
            <MenuItem text={"PowerPoint, multi-page & customizable"}/>
            <MenuItem text={"PowerPoint, multi-page & indicators"}/>
            <MenuItem text={"PowerPoint Exec review"}/>
            <Divider/>
            <MenuItem text={"Snapshot at 2019-12-09"} icon={"archive"}/>
            <MenuItem text={"Snapshot at 2019-12-08"} icon={"archive"}/>
            <MenuItem text={"Snapshot at 2019-12-07"} icon={"archive"}/>
            <MenuItem text={"Snapshot at 2019-12-06"} icon={"archive"}/>
        </Menu>
    );

    pptExportButton = (
        <Popover content={this.pptMenu} position={Position.BOTTOM}>
            <Button
                large
                minimal
                icon={"download"}
                intent={Intent.PRIMARY}
                text={"PPT Upload"}
            />
        </Popover>
    );
}

ReportTab.propTypes = {
    loadData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
    report: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: PropTypes.shape({
            milestones: PropTypes.arrayOf(MilestoneShape),
            indicators: PropTypes.shape({
                schedule: PropTypes.number,
                scope: PropTypes.number,
                quality: PropTypes.number,
                cost: PropTypes.number
            }),
            risks: PropTypes.arrayOf(RiskReportType),
        })
    }).isRequired
};
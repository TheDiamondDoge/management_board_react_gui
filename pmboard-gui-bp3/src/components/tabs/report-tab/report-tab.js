import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import UpdatedInfo from "../../updated-info/updated-info";
import styles from "./report-tab.module.css";
import Timeline from "../../timeline/timeline";
import classNames from "classnames";
import {Button, Divider, Intent, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";
import HealthIndicatorsMinimal from "../../health-indicators-minimal/health-indicators-minimal";
import RisksList from "../../risks-list/risks-list";
import TwoItemsLiner from "../../two-items-liner/two-items-liner";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {
    HealthIndicatorsShape,
    MilestoneShape,
    ProjectDefaults,
    RiskMinimal,
    RiskReportType
} from "../../../util/custom-types";
import RqsReportList from "../../rqs-report-list/rqs-report-list";
import ReportQuillsForm from "./report-quills-form/report-quills-form";

//TODO populate snapshots in popover
export default class ReportTab extends React.Component {
    render() {
        const {loading} = this.props.report;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            this.projectId = this.props.defaults.payload.projectId;
            const {updatedOn, projectName, projectManager} = this.props.report.payload;
            const {payload: risks, loading: risksLoading} = this.props.risks;
            const {payload: milestones, loading: milestonesLoading} = this.props.milestones;
            const {payload: indicators, loading: indLoading} = this.props.indicators;
            const uploadClasses = classNames(styles.inline_block, styles.float_right, styles.health_minimal);
            const risksObj = this.getRiskObj(risks);

            const rqsLoading = this.props.rqs.loading;
            const rqsPayload = this.props.rqs.payload;

            const {loading: userReportsLoading, payload: userReportsPayload} = this.props.userReports;
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
                        {indLoading
                            ? <LoadingSpinner/>
                            : <HealthIndicatorsMinimal indicators={indicators.statuses.current}
                                                       className={uploadClasses}/>
                        }
                        <br/>
                        <br/>
                        <br/>
                        {milestonesLoading
                            ? <LoadingSpinner/>
                            : <Timeline milestones={milestones}/>
                        }
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        {userReportsLoading
                            ? <LoadingSpinner/>
                            : <ReportQuillsForm
                                data={userReportsPayload}
                                onCancel={this.handleUserReportReload}
                                onSubmit={this.handleSaveData}
                              />
                        }
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
                        {risksLoading
                            ? <LoadingSpinner/>
                            :
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
                        }
                    </CustomCard>
                </>
            );
        }
    }



    onUserReportSaveFactory(type, submitFunc) {
        return function (value) {
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

    pptMenu() {
        const projectId = this.props.defaults.payload.projectId;
        const onClick = this.props.downloadPptReport;
        return (
            <Menu>
                <MenuItem disabled text={"PowerPoint, program template"}/>
                <MenuItem text={"PowerPoint, multi-page & customizable"} onClick={() => onClick(projectId, "custom")}/>
                <MenuItem text={"PowerPoint, multi-page & indicators"}
                          onClick={() => onClick(projectId, "indicators")}/>
                <MenuItem text={"PowerPoint Exec review"} onClick={() => onClick(projectId, "review")}/>
                <Divider/>
                <MenuItem text={"Snapshot at 2019-12-09"} icon={"archive"}/>
                <MenuItem text={"Snapshot at 2019-12-08"} icon={"archive"}/>
                <MenuItem text={"Snapshot at 2019-12-07"} icon={"archive"}/>
                <MenuItem text={"Snapshot at 2019-12-06"} icon={"archive"}/>
            </Menu>
        )
    }

    pptExportButton = (
        <Popover content={this.pptMenu()} position={Position.BOTTOM}>
            <Button
                large
                minimal
                icon={"download"}
                intent={Intent.PRIMARY}
                text={"PPT Upload"}
            />
        </Popover>
    );

    handleSaveData = (data) => {
        this.props.saveData(this.projectId, data);
    };

    handleUserReportReload = () => {
        this.props.reloadUserReports(this.projectId);
    };
}

ReportTab.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    milestones: PropTypes.shape({
        payload: PropTypes.arrayOf(MilestoneShape).isRequired,
        loading: PropTypes.bool,
    }),
    indicators: PropTypes.shape({
        payload: HealthIndicatorsShape,
        loading: PropTypes.bool,
    }),
    risks: PropTypes.shape({
        payload: PropTypes.arrayOf(RiskMinimal).isRequired,
        loading: PropTypes.bool,
    }),
    reloadUserReports: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
    downloadPptReport: PropTypes.func,
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
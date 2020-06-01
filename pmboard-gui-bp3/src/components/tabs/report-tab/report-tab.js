import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import UpdatedInfo from "../../updated-info/updated-info";
import styles from "./report-tab.module.css";
import Timeline from "../../timeline/timeline";
import {Divider} from "@blueprintjs/core";
import HealthIndicatorsMinimal from "../../health-indicators-minimal/health-indicators-minimal";
import RisksList from "../../risks-list/risks-list";
import TwoItemsLiner from "../../two-items-liner/two-items-liner";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {
    HealthIndicatorsShape,
    MilestoneShape,
    ProjectDefaults, ReportImagesTypes, ReportSnapshotsTypes, ReportTabTypes,
    RiskMinimal,
} from "../../../util/custom-types";
import RqsReportList from "../../rqs-report-list/rqs-report-list";
import ReportQuillsForm from "./report-quills-form/report-quills-form";
import ExportMenu from "./export-menu/export-menu";
import {getIndicatorsColor} from "../../../util/transform-funcs";
import renderFields from "./fields";
import RenderFieldHelper from "../../../util/render-field-helper";
import UploadDisplaySection from "../../upload-display-section/upload-display-section";

export default class ReportTab extends React.Component {
    constructor(props) {
        super(props);
        this.amount = 5;
    }

    render() {
        const {loading} = this.props.report.tab;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            this.projectId = this.props.defaults.payload.projectId;
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const {updatedOn, projectName, projectManager} = this.props.report.tab.payload;
            const {payload: data, loading: risksLoading} = this.props.risks;
            const {payload: milestones, loading: milestonesLoading} = this.props.milestones;
            const {payload: indicators, loading: indLoading} = this.props.indicators;
            const risksObj = this.getRiskObj(data);
            const {loading: rqsLoading, payload: rqsPayload} = this.props.rqs;
            const {loading: userReportsLoading, payload: userReportsPayload} = this.props.userReports;
            const images = this.props.report.images.payload;
            const imagesLoading = this.props.report.images.loading;
            const snapshots = this.props.report.snapshots.payload;
            const snapshotLoading = this.props.report.snapshots.loading;
            const {isExportInProcess} = this.props;
            return (
                <>
                    <CustomCard>
                        <div className={styles.project_info}>
                            <UpdatedInfo date={updatedOn}/>
                            <TwoItemsLiner first={"Project Name:"} second={<b>{projectName}</b>}/>
                            <TwoItemsLiner first={"Project manager:"} second={<b>{projectManager}</b>}/>
                        </div>
                        <div className={styles.export_button}>
                            <ExportMenu
                                projectId={this.projectId}
                                onClickElement={this.props.downloadPptReport}
                                snapshots={snapshots}
                                snapshotLoading={snapshotLoading}
                                buttonLoading={isExportInProcess}
                            />
                        </div>
                        {indLoading
                            ? <LoadingSpinner/>
                            : (
                                <HealthIndicatorsMinimal
                                    indicators={indicators.statuses.current}
                                    className={styles.health_minimal}
                                />
                            )
                        }
                        {milestonesLoading || indLoading
                            ? <LoadingSpinner/>
                            : (
                                <Timeline
                                    milestones={milestones}
                                    status={getIndicatorsColor(indicators.statuses.current.overall)}
                                />
                            )
                        }
                    </CustomCard>
                    <CustomCard>
                        {userReportsLoading
                            ? <LoadingSpinner/>
                            : (
                                <ReportQuillsForm
                                    data={userReportsPayload}
                                    onCancel={this.handleUserReportReload}
                                    onSubmit={this.handleSaveData}
                                    blocked={!renderHelper.displayOrNot("controls")}
                                />
                            )
                        }
                    </CustomCard>
                    <CustomCard>
                        <h3>Scope Definition</h3>
                        {rqsLoading
                            ? <LoadingSpinner/>
                            : <RqsReportList data={rqsPayload} className={styles.scope_definition}/>
                        }
                    </CustomCard>
                    <CustomCard>
                        <h3>Risks</h3>
                        <Divider/>
                        {risksLoading
                            ? <LoadingSpinner/>
                            : (
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
                            )
                        }
                    </CustomCard>
                    <CustomCard>
                        <UploadDisplaySection
                            buttonName={"Upload image"}
                            isUploading={imagesLoading}
                            amount={this.amount}
                            files={images}
                            onUpload={(formData) => this.props.uploadImages(formData, this.projectId)}
                            onDelete={(filename) => this.props.deleteImage(filename, this.projectId)}
                            onError={this.handleOnAmountExceed}
                        />
                    </CustomCard>
                </>
            );
        }
    }

    handleOnAmountExceed = (message) => {
        this.props.pushWarningToast(message);
    };

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
    uploadImages: PropTypes.func,
    deleteImage: PropTypes.func,
    report: PropTypes.shape({
        tab: ReportTabTypes,
        images: ReportImagesTypes,
        snapshots: ReportSnapshotsTypes
    }),
    isExportInProcess: PropTypes.bool,
};
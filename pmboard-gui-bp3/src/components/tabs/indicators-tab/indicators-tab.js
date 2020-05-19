import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Timeline from "../../timeline/timeline";
import CustomCard from "../../card/custom-card";
import HealthIndicators from "../../health-indicators/health-indicators";
import healthFields from "../../health-indicators/health-fields";
import styles from "./indicators-tab.module.css";
import Requirements from "../../requirements/requirements";
import fieldsRequirements from "../../requirements/fields-requirements";
import MilestonesKpi from "../../milestones-kpi/milestones-kpi";
import Kpi from "../../dr4kpi/kpi";
import kpiFields from "../../dr4kpi/kpi-fields";
import Quality from "../../quality/quality";
import qualityFields from "../../quality/quality-fields";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {
    HealthIndicatorsShape,
    MilestoneKpiShape,
    MilestoneShape, ProjectDefaults,
    QualityIndicatorsShape,
    RequirementsShape
} from "../../../util/custom-types";
import ErrorBoundary from "../../error-boundary/error-boundary";
import {getPropFromStringPath} from "../../../util/util";
import {getIndicatorsColor} from "../../../util/transform-funcs";
import RenderFieldHelper from "../../../util/render-field-helper";
import fieldsParams from "./indicators-fields";
import {Messages} from "../../../util/constants";

export default class IndicatorsTab extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmitErrorHandler = () => this.props.pushWarningToast(Messages.FORM_SUBMIT_ERROR);
    }

    render() {
        this.projectId = this.props.defaults.payload.projectId;
        const validationParams = this.props.defaults.payload;
        const rqsRenderHelper = new RenderFieldHelper(fieldsRequirements, validationParams);
        const renderHelper = new RenderFieldHelper(fieldsParams, validationParams);
        const {milestones, healthIndicators, requirements, milestonesKpi, dr4Kpi, qualityKpi} = this.props;
        const overall = getPropFromStringPath(healthIndicators, "payload.statuses.current.overall");
        const overallIndicator = getIndicatorsColor(overall);
        const isControlsBlocked = renderHelper.displayOrNot("controls");
        const isQualityShowed = renderHelper.displayOrNot("quality");

        const rqsCardClasses = classNames(styles.rqs_kpi, styles.card);
        const milestonesKpiClasses = classNames(styles.milestones_kpi, styles.card);
        const dr4KpiClasses = classNames(styles.dr4_kpi, styles.card);
        const qualityClasses = classNames(styles.quality, styles.card);

        return (
            <div>
                <CustomCard className={styles.card}>
                    {
                        milestones.loading
                            ? <LoadingSpinner/>
                            : (
                                <ErrorBoundary>
                                    <Timeline
                                        milestones={milestones.payload}
                                        status={overallIndicator}
                                    />
                                </ErrorBoundary>
                            )
                    }
                </CustomCard>
                <CustomCard className={styles.card}>
                    <h3>Health</h3>
                    {
                        healthIndicators.loading
                            ? <LoadingSpinner/>
                            : (
                                <ErrorBoundary>
                                    <HealthIndicators
                                        indicators={healthIndicators.payload}
                                        fieldsToRender={healthFields}
                                        onIndicatorsSubmit={this.handleHealthIndicatorsSubmit}
                                        onCommentsSubmit={this.handleHealthCommentsSubmit}
                                        onCancel={this.handleHealthReload}
                                        blocked={isControlsBlocked}
                                        onSubmitErrorCallback={this.onSubmitErrorHandler}
                                    />
                                </ErrorBoundary>
                            )
                    }
                </CustomCard>
                <div className={styles.kpi_container}>
                    <CustomCard className={rqsCardClasses}>
                        <h3>Requirements</h3>
                        {
                            requirements.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <Requirements
                                            requirements={requirements.payload}
                                            renderHelper={rqsRenderHelper}
                                            fieldsToRender={fieldsRequirements}
                                            fieldsRenderValidation={validationParams}
                                            rqsSubmit={this.handleRqsSubmit}
                                            rqsReload={this.handleRqsReload}
                                            onSubmitErrorCallback={this.onSubmitErrorHandler}
                                        />
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                    <CustomCard className={milestonesKpiClasses}>
                        <h3>Milestones</h3>
                        {
                            milestonesKpi.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <MilestonesKpi milestonesKpi={milestonesKpi.payload}/>
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                    <CustomCard className={dr4KpiClasses}>
                        <h3>Project DR4 KPI</h3>
                        {
                            dr4Kpi.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <Kpi
                                            dr4Kpi={dr4Kpi.payload}
                                            fieldsToRender={kpiFields}
                                        />
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                </div>
                {
                    isQualityShowed &&
                    <CustomCard className={qualityClasses}>
                        <h3>Quality</h3>
                        {
                            qualityKpi.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <Quality
                                            qualityKpi={qualityKpi.payload}
                                            fieldsToRender={qualityFields}
                                            fieldsRenderValidation={validationParams}
                                            onSubmit={this.handleQualitySubmit}
                                            onCancel={this.handleQualityReload}
                                            onSubmitErrorCallback={this.onSubmitErrorHandler}
                                        />
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                }
            </div>
        )
    }

    handleHealthIndicatorsSubmit = (data) => {
        this.props.healthIndicatorsSubmit(this.projectId, data);
    };

    handleHealthCommentsSubmit = (data) => {
        this.props.healthCommentsSubmit(this.projectId, data);
    };

    handleHealthReload = () => {
        this.props.healthReload(this.projectId);
    };

    handleRqsSubmit = (data) => {
        this.props.rqsSubmit(this.projectId, data);
    };

    handleRqsReload = () => {
        this.props.rqsReload(this.projectId);
    };

    handleQualityReload = () => {
        this.props.qualityReload(this.projectId);
    };

    handleQualitySubmit = (data) => {
        this.props.qualitySubmit(this.projectId, data);
    };
};


IndicatorsTab.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    milestones: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(MilestoneShape)
    }),
    healthIndicators: PropTypes.shape({
        loading: PropTypes.bool,
        payload: HealthIndicatorsShape
    }),
    requirements: PropTypes.shape({
        loading: PropTypes.bool,
        payload: RequirementsShape
    }),
    milestonesKpi: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(MilestoneKpiShape)
    }),
    dr4Kpi: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.object,
    }),
    qualityKpi: PropTypes.shape({
        loading: PropTypes.bool,
        payload: QualityIndicatorsShape
    }),
    healthIndicatorsSubmit: PropTypes.func,
    healthCommentsSubmit: PropTypes.func,
    healthReload: PropTypes.func,
    rqsSubmit: PropTypes.func,
    rqsReload: PropTypes.func,
    qualityReload: PropTypes.func,
    qualitySubmit: PropTypes.func,
    pushWarningToast: PropTypes.func,
};
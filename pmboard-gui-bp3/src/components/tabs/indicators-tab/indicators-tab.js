import React from 'react';
import PropTypes from 'prop-types';
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
import Loading from "../../loading-card/loading";
import {
    HealthIndicatorsShape,
    MilestoneKpiShape,
    MilestoneShape,
    QualityIndicatorsShape,
    RequirementsShape
} from "../../../util/custom-types";

export default class IndicatorsTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetState();
    }
    //TODO: validation
    //TODO: use render-helper class
    render() {
        const {milestones, healthIndicators, requirements, milestonesKpi, dr4Kpi, qualityKpi} = this.props;
        const {
            healthIndicatorsSubmit, healthCommentsSubmit, healthReload, rqsSubmit, qualitySubmit, qualityReload, rqsReload
        } = this.props;
        return (
            <div className={styles.data_grid}>
                <CustomCard className={styles.timeline}>
                    {
                        milestones.loading
                            ? <Loading />
                            : <Timeline milestones={milestones.payload}/>
                    }
                </CustomCard>
                <CustomCard className={styles.health}>
                    <h3>Health</h3>
                    {
                        healthIndicators.loading
                            ? <Loading />
                            : <HealthIndicators
                                indicators={healthIndicators.payload}
                                isSummaryMode={false}
                                fieldsToRender={healthFields}
                                onIndicatorsSubmit={healthIndicatorsSubmit}
                                onCommentsSubmit={healthCommentsSubmit}
                                onCancel={healthReload}
                              />
                    }
                </CustomCard>
                <CustomCard className={styles.req}>
                    <h3>Requirements</h3>
                    {
                        requirements.loading
                            ? <Loading />
                            : <Requirements
                                requirements={requirements.payload}
                                fieldsToRender={fieldsRequirements}
                                rqsSubmit={rqsSubmit}
                                rqsReload={rqsReload}
                              />
                    }
                </CustomCard>
                <CustomCard className={styles.milestones}>
                    <h3>Milestones</h3>
                    {
                        milestonesKpi.loading
                            ? <Loading />
                            : <MilestonesKpi milestonesKpi={milestonesKpi.payload} />
                    }
                </CustomCard>
                <CustomCard className={styles.dr4_kpi}>
                    <h3>Project DR4 KPI</h3>
                    {
                        dr4Kpi.loading
                            ? <Loading />
                            : <Kpi
                                dr4Kpi={dr4Kpi.payload}
                                fieldsToRender={kpiFields}
                            />
                    }
                </CustomCard>
                <CustomCard className={styles.quality}>
                    <h3>Quality</h3>
                    {
                        qualityKpi.loading
                            ? <Loading />
                            : <Quality
                                qualityKpi={qualityKpi.payload}
                                fieldsToRender={qualityFields}
                                onSubmit={qualitySubmit}
                                onCancel={qualityReload}
                              />
                    }
                </CustomCard>
            </div>
        )
    }
}

IndicatorsTab.propTypes = {
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
    loadData: PropTypes.func,
    resetState: PropTypes.func,
    healthIndicatorsSubmit: PropTypes.func,
    healthCommentsSubmit: PropTypes.func,
    healthReload: PropTypes.func,
    rqsSubmit: PropTypes.func,
    rqsReload: PropTypes.func,
    qualityReload: PropTypes.func,
    qualitySubmit: PropTypes.func,
};
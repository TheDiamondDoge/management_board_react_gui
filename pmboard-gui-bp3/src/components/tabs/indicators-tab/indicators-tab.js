import React from 'react';
import PropTypes from 'prop-types';
import Timeline from "../../timeline/timeline";
import {CustomCard} from "../../card/custom-card";
import HealthIndicators from "../../health-indicators/health-indicators";
import styles from "./indicators-tab.module.css";
import Requirements from "../../requirements/requirements";
import MilestonesKpi from "../../milestones-kpi/milestones-kpi";
import Kpi from "../../dr4kpi/kpi";
import Quality from "../../quality/quality";
import qualityFields from "../../quality/qualityFields";
import Loading from "../../loading-card/loading";

//TODO: HINT: How to map json with fields - check summary realisation
//TODO: Check what should be displayed if no value in q, m and dr4 tables
export default class IndicatorsTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetState();
    }

    render() {
        const {milestones, healthIndicators, requirements, milestonesKpi, dr4Kpi, qualityKpi} = this.props;
        const {healthIndicatorsSubmit, healthCommentsSubmit, rqsSubmit, qualitySubmit, qualityReload, rqsReload} = this.props;
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
                                onIndicatorsSubmit={healthIndicatorsSubmit}
                                onCommentsSubmit={healthCommentsSubmit}
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
                            : <Kpi dr4Kpi={dr4Kpi.payload} />
                    }
                </CustomCard>
                <CustomCard className={styles.quality}>
                    <h3>Quality</h3>
                    {
                        qualityKpi.loading
                            ? <Loading />
                            : <Quality
                                qualityKpi={qualityKpi.payload}
                                fields={qualityFields}
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
    milestones: PropTypes.object,
    healthIndicators: PropTypes.object,
    requirements: PropTypes.object,
    milestonesKpi: PropTypes.object,
    dr4Kpi: PropTypes.object,
    qualityKpi: PropTypes.object,
    loadData: PropTypes.func,
    resetState: PropTypes.func,
    healthIndicatorsSubmit: PropTypes.func,
    healthCommentsSubmit: PropTypes.func,
    rqsSubmit: PropTypes.func,
    rqsReload: PropTypes.func,
    qualityReload: PropTypes.func,
    qualitySubmit: PropTypes.func,
};
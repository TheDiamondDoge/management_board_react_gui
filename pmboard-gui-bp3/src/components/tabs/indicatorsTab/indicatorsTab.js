import React from 'react';
import PropTypes from 'prop-types';
import Timeline from "../../timeline/timeline";
import {CustomCard} from "../../card/custom-card";
import HealthIndicators from "../../health-indicators/health-indicators";
import styles from "./indicatorsTab.module.css";
import Requirements from "./requirements/requirements";
import Milestones from "./milestones/milestones";
import Kpi from "./dr4kpi/kpi";
import Quality from "./quality/quality";

//TODO: HINT: How to map json with fields - check summary realisation
export default class IndicatorsTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <div className={styles.data_grid}>
                <CustomCard className={styles.timeline}>
                    {/*<Timeline />*/}
                </CustomCard>
                <CustomCard className={styles.health}>
                    <h3>Health</h3>
                    {/*<HealthIndicators isSummaryMode={false}/>*/}
                </CustomCard>
                <CustomCard className={styles.req}>
                    <h3>Requirements</h3>
                    <Requirements/>
                </CustomCard>
                <CustomCard className={styles.milestones}>
                    <h3>Milestones</h3>
                    <Milestones/>
                </CustomCard>
                <CustomCard className={styles.dr4_kpi}>
                    <h3>Project DR4 KPI</h3>
                    <Kpi/>
                </CustomCard>
                <CustomCard className={styles.quality}>
                    <h3>Quality</h3>
                    <Quality/>
                </CustomCard>
            </div>
        )
    }
}

IndicatorsTab.propTypes = {
    loadData: PropTypes.func,
};
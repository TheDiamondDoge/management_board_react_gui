import React from 'react';
import Timeline from "../../../../timeline/timeline";
import {CustomCard} from "../../../../card/customCard";
import HealthIndicators from "../../../../healthIndicators/healthIndicators";
import styles from "./indicatorsTab.module.css";
import Requirements from "./requirements/requirements";
import Milestones from "./milestones/milestones";
import Kpi from "./dr4kpi/kpi";
import Quality from "./quality/quality";

export default class IndicatorsTab extends React.Component {
    render() {
        return (
            <div className={styles.data_grid}>
                <Timeline className={styles.timeline} />
                <CustomCard className={styles.health}>
                    <h3>Health</h3>
                    <HealthIndicators/>
                </CustomCard>
                <CustomCard className={styles.req}>
                    <h3>Requirements</h3>
                    <Requirements />
                </CustomCard>
                <CustomCard className={styles.milestones}>
                    <h3>Milestones</h3>
                    <Milestones />
                </CustomCard>
                <CustomCard className={styles.dr4_kpi}>
                    <h3>Project DR4 KPI</h3>
                    <Kpi />
                </CustomCard>
                <CustomCard className={styles.quality}>
                    <h3>Quality</h3>
                    <Quality />
                </CustomCard>
            </div>
        )
    }
}
import React from 'react';
import Timeline from "../../timeline/timeline";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import styles from './summary-tab.module.css';
import classNames from 'classnames';
import {getLabelById, displayOrNot} from "./fields";
import {CustomCard} from "../../card/custom-card.js";
import HealthIndicators from "../../health-indicators/health-indicators";
import Loading from "../../loading-card/loading";
import PropTypes from 'prop-types';

export default class SummaryTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    render() {
        const {loading} = this.props.summaryData;

        if (loading) {
            return (<Loading />);
        } else {
            const {general, status, links, pwsInfo, validationParams} = this.props.summaryData.payload;
            const loadingMilestones = this.props.milestones.loading;
            const milestones = this.props.milestones.data;
            const healthIndicators = this.props.healthIndicators;

            const validationPrjParams = {...validationParams};
            let mainCardStyle = classNames(styles.data_fields);
            let secondaryCardStyle = classNames(styles.secondary_card);
            return (
                <div>
                    <CustomCard>
                        {loadingMilestones
                            ? <Loading />
                            : <Timeline milestones={milestones}/>
                        }
                    </CustomCard>
                    <br/>
                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(general).map((obj) => (
                                    displayOrNot(obj, validationPrjParams)
                                        ? <div key={obj} className={mainCardStyle}>
                                                <FieldName name={getLabelById(obj)}/>
                                                <FieldValue value={general[obj]}/>
                                            </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div className={styles.right_part}>
                            {healthIndicators.loading
                                ? <Loading />
                                : <HealthIndicators
                                    indicators={healthIndicators}
                                    isSummaryMode={true}
                                  />
                            }
                        </div>
                    </CustomCard>

                    <br/>

                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(status).map((obj) => (
                                    displayOrNot(obj, validationPrjParams)
                                        ? <div key={obj} className={styles.executive_block}>
                                              <FieldName name={getLabelById(obj)}/>
                                              <FieldValue value={`${status[obj]}`}/>
                                          </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div className="right_part">
                            {
                                Object.keys(links).map((obj) => (
                                    displayOrNot(obj, validationPrjParams)
                                        ? <div key={obj} className={secondaryCardStyle}>
                                             <FieldName name={getLabelById(obj)}/>
                                             <FieldValue value={`${links[obj]}`}/>
                                           </div>
                                        : ""
                                ))
                            }
                        </div>
                    </CustomCard>

                    <br/>

                    <CustomCard className={styles.pws_data_container}>
                        <div>
                            {
                                Object.keys(pwsInfo).map((obj) => (
                                    displayOrNot(obj, validationPrjParams)
                                        ? <div key={obj} className={styles.data_fields}>
                                              <FieldName name={getLabelById(obj)}/>
                                              <FieldValue value={`${pwsInfo[obj]}`}/>
                                          </div>
                                        : ""
                                ))
                            }
                        </div>
                    </CustomCard>
                </div>
            )
        }
    }
}

SummaryTab.propTypes = {
    loadData: PropTypes.func,
    resetData: PropTypes.func,
    summaryData: PropTypes.object.isRequired,
    milestones: PropTypes.object.isRequired,
    healthIndicators: PropTypes.object.isRequired,
};
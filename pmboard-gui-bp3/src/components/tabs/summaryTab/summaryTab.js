import React from 'react';
import Timeline from "../../timeline/timeline";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import styles from './summaryTab.module.css';
import classNames from 'classnames';
import {getLabelById, displayOrNot} from "./fields";
import {CustomCard} from "../../card/customCard.js";
import HealthIndicators from "../../health-indicators/health-indicators";
import PropTypes from 'prop-types';
import {Intent, ProgressBar} from "@blueprintjs/core";

//TODO: Grid problems on second card; Column gap required
export default class SummaryTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    render() {
        const loaded = this.props.loaded;

        if (!loaded) {
            return (<ProgressBar intent={Intent.PRIMARY}/>);
        } else {
            const {general, status, links, pwsInfo, validationParams} = this.props.summaryData;
            const validationPrjParams = {...validationParams};
            let mainCardStyle = classNames(styles.data_fields);
            let secondaryCardStyle = classNames(styles.secondary_card);
            return (
                <div>
                    <CustomCard>
                        <Timeline/>
                    </CustomCard>
                    <br/>
                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                general.map((obj) => (
                                    displayOrNot(obj.id, validationPrjParams)
                                        ? <div key={obj.id} className={mainCardStyle}>
                                                <FieldName name={getLabelById(obj.id)}/>
                                                <FieldValue value={obj.name}/>
                                            </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div className={styles.right_part}>
                            <HealthIndicators isSummaryMode={true}/>
                        </div>
                    </CustomCard>

                    <br/>

                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                status.map((obj) => (
                                    displayOrNot(obj.id, validationPrjParams)
                                        ? <div key={obj.id} className={secondaryCardStyle}>
                                              <FieldName name={getLabelById(obj.id)}/>
                                              <FieldValue value={`${obj.name}`}/>
                                          </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div className="right_part">
                            {
                                links.map((obj) => (
                                    displayOrNot(obj.id, validationPrjParams)
                                        ? <div key={obj.id} className={secondaryCardStyle}>
                                             <FieldName name={getLabelById(obj.id)}/>
                                             <FieldValue value={`${obj.name}`}/>
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
                                pwsInfo.map((obj) => (
                                    displayOrNot(obj.id, validationPrjParams)
                                        ? <div key={obj.id} className={styles.data_fields}>
                                              <FieldName name={getLabelById(obj.id)}/>
                                              <FieldValue value={`${obj.name}`}/>
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
    loaded: PropTypes.bool,
};
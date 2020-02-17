import React from 'react';
import Timeline from "../../timeline/timeline";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import styles from './summary-tab.module.css';
import classNames from 'classnames';
import summaryFieldsToRender from "./fields";
import CustomCard from "../../card/custom-card.js";
import HealthIndicators from "../../health-indicators/health-indicators";
import fieldsToRender from "../../health-indicators/health-fields";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import PropTypes from 'prop-types';
import RenderFieldHelper from "../../../util/render-field-helper";
import {HealthIndicatorsShape, MilestoneShape, SummaryShape} from "../../../util/custom-types";
import ErrorBoundary from "../../error-boundary/error-boundary";
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css';

//TODO Executive (flags) endpoint changed. Tune this
export default class SummaryTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    render() {
        const {loading} = this.props.summaryData;
        const renderHelper = new RenderFieldHelper(summaryFieldsToRender);
        if (loading) {
            return (<LoadingSpinner/>);
        } else {
            const {general, status, links, pwsInfo, validationParams} = this.props.summaryData.payload;
            const milestones = this.props.milestones;
            const healthIndicators = this.props.healthIndicators;

            let mainCardStyle = classNames(styles.data_fields);
            let secondaryCardStyle = classNames(styles.secondary_card);
            return (
                <div>
                    <CustomCard>
                        {
                            milestones.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <Timeline milestones={milestones.payload}/>
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                    <br/>
                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(general).map((obj) => (
                                    renderHelper.displayOrNot(obj, validationParams)
                                        ? <div key={obj} className={mainCardStyle}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
                                            <FieldValue value={general[obj]}/>
                                        </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div className={styles.right_part}>
                            {healthIndicators.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <HealthIndicators
                                            indicators={healthIndicators.payload}
                                            fieldsToRender={fieldsToRender}
                                            isSummaryMode={true}
                                        />
                                    </ErrorBoundary>
                                )
                            }
                        </div>
                    </CustomCard>

                    <br/>

                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(status).map((obj) => (
                                    renderHelper.displayOrNot(obj, validationParams)
                                        ? <div key={obj} className={styles.executive_block}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
                                            <ReactQuill defaultValue={status[obj]} modules={{toolbar: null}} readOnly/>
                                            {/*<FieldValue value={`${status[obj]}`}/>*/}
                                        </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div className={styles.right_part}>
                            {
                                Object.keys(links).map((obj) => (
                                    renderHelper.displayOrNot(obj, validationParams)
                                        ? <div key={obj} className={secondaryCardStyle}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
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
                                    renderHelper.displayOrNot(obj, validationParams)
                                        ? <div key={obj} className={styles.data_fields}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
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
    summaryData: SummaryShape.isRequired,
    milestones: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(MilestoneShape)
    }).isRequired,
    healthIndicators: HealthIndicatorsShape.isRequired,
};
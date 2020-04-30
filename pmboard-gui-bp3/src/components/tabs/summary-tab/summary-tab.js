import React from 'react';
import Timeline from "../../timeline/timeline";
import FieldName from "../../field-name/field-name";
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
import {
    ContribTable,
    HealthIndicatorsShape,
    MilestoneShape,
    ProjectDefaults,
    SummaryShape
} from "../../../util/custom-types";
import ErrorBoundary from "../../error-boundary/error-boundary";
import ReactQuill from "react-quill";
import ContributingOpenProjects from "../../contributing-projects-table/contributing-open-projects";
import Legend from "../../legend/legend";
import OfferProductTitle from "../../contributing-projects-table/components/offer-product-title/offer-product-title";
import {ProjectTypes} from "../../../util/constants";
import LastUpdated from "../../last-updated/last-updated";
import {getPropFromStringPath} from "../../../util/util";
import {getIndicatorsColor} from "../../../util/transform-funcs";

import 'react-quill/dist/quill.snow.css';

export default class SummaryTab extends React.Component {
    render() {
        const {loading} = this.props.summaryData;
        const renderHelper = new RenderFieldHelper(summaryFieldsToRender);
        if (loading) {
            return (<LoadingSpinner/>);
        } else {
            const {general, status, links, pwsInfo, validationParams} = this.props.summaryData.payload;
            const milestones = this.props.milestones;
            const healthIndicators = this.props.healthIndicators;
            const contribTable = this.props.contribTable;

            const overall = getPropFromStringPath(healthIndicators, "payload.statuses.current.overall");
            const overallIndicator = getIndicatorsColor(overall);

            let mainCardStyle = classNames(styles.data_fields);
            let secondaryCardStyle = classNames(styles.secondary_card);
            let contribTitleClasses = this.getContribTitleClasses(contribTable, validationParams.projectType);

            return (
                <div>
                    <CustomCard>
                        {
                            milestones.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <Timeline milestones={milestones.payload} status={overallIndicator}/>
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                    <br/>
                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(general).map((obj) => (
                                    renderHelper.displayOrNot(obj, validationParams) && (
                                        <div key={obj} className={mainCardStyle}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
                                            <FieldValue value={general[obj]}/>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                        <div className={styles.right_part}>
                            {healthIndicators.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <HealthIndicators
                                            isSummaryMode={true}
                                            indicators={healthIndicators.payload}
                                            fieldsToRender={fieldsToRender}
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
                                Object.keys(status).map((obj) => {
                                    const flagClassColor = this.getClassForFlag(obj);
                                    return (
                                    renderHelper.displayOrNot(obj, validationParams) && (
                                        <div key={obj} className={styles.executive_block}>
                                            <FieldName name={renderHelper.getLabelById(obj)} className={flagClassColor}/>
                                            <ReactQuill defaultValue={status[obj]} modules={{toolbar: null}} readOnly/>
                                        </div>
                                    )
                                )})
                            }
                        </div>
                        <div className={styles.right_part}>
                            {
                                Object.keys(links).map((obj) => (
                                    renderHelper.displayOrNot(obj, validationParams) && (
                                        <div key={obj} className={secondaryCardStyle}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
                                            <FieldValue value={`${links[obj]}`}/>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </CustomCard>

                    <br/>

                    <CustomCard className={styles.pws_data_container}>
                        <div>
                            {
                                Object.keys(pwsInfo).map((obj) => (
                                    renderHelper.displayOrNot(obj, validationParams) && (
                                        <div key={obj} className={styles.data_fields}>
                                            <FieldName name={renderHelper.getLabelById(obj)}/>
                                            {this.renderHelper(obj, pwsInfo[obj])}
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </CustomCard>

                    <br/>

                    <CustomCard autosize={"x"}>
                        {contribTable.loading
                            ? (<LoadingSpinner/>)
                            : (
                                <>
                                    <OfferProductTitle
                                        className={contribTitleClasses}
                                        isOffer={validationParams.projectType === ProjectTypes.OFFER}
                                        isContrib={!!contribTable.payload.offer}
                                    />
                                    {contribTable.payload.offer &&
                                    <ErrorBoundary>
                                        <div className={styles.overflow_x}>
                                            <ContributingOpenProjects
                                                offer={contribTable.payload.offer}
                                                contributed={contribTable.payload.products}
                                                minDate={contribTable.payload.minDate}
                                                maxDate={contribTable.payload.maxDate}
                                            />
                                        </div>
                                    </ErrorBoundary>
                                    }
                                </>
                            )
                        }
                        {contribTable.payload.offer && <Legend/>}
                    </CustomCard>
                </div>
            )
        }
    }

    renderHelper(id, data) {
        if (id === "pwsLastUpdatedDate") {
            return <LastUpdated dateStr={data}/>
        } else {
            return <FieldValue value={data}/>
        }
    }

    getClassForFlag(attrName) {
        switch (attrName) {
            case "redFlag":
                return styles.red;
            case "orangeFlag":
                return styles.orange;
            case "greenFlag":
                return styles.green;
            default:
                return "";
        }
    }

    getContribTitleClasses(contribTable, projectType) {
        if (!contribTable.loading) {
            return classNames({
                [styles.bottom_margin] : (projectType === ProjectTypes.OFFER || !!contribTable.payload.offer)
            });
        }
    }
}

SummaryTab.propTypes = {
    loadData: PropTypes.func.isRequired,
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    contribTable: PropTypes.shape({
        loading: PropTypes.bool,
        payload: ContribTable
    }),
    summaryData: SummaryShape.isRequired,
    milestones: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(MilestoneShape)
    }).isRequired,
    healthIndicators: HealthIndicatorsShape.isRequired,
};
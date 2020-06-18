import React from 'react';
import Timeline from "../../../../timeline/timeline";
import FieldName from "../../../../field-name/field-name";
import FieldValue from "../../../../field-value/field-value";
import styles from './summary-tab.module.scss';
import classNames from 'classnames';
import summaryFieldsToRender from "./fields";
import CustomCard from "../../../../card/custom-card.js";
import HealthIndicators from "../../../../health-indicators/health-indicators";
import fieldsToRender from "../../../../health-indicators/health-fields";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import PropTypes from 'prop-types';
import RenderFieldHelper from "../../../../../util/render-field-helper";
import {
    ContribTable,
    HealthIndicatorsShape,
    MilestoneShape,
    ProjectDefaults,
    SummaryShape
} from "../../../../../util/custom-types";
import ErrorBoundary from "../../../../error-boundary/error-boundary";
import ReactQuill from "react-quill";
import ContributingOpenProjects from "../../../../contributing-projects-table/contributing-open-projects";
import OfferProductTitle from "../../../../contributing-projects-table/components/offer-product-title/offer-product-title";
import {ProjectTypes} from "../../../../../util/constants";
import LastUpdated from "../../../../last-updated/last-updated";
import {getPropFromStringPath} from "../../../../../util/util";
import {getIndicatorsColor} from "../../../../../util/transform-funcs";

import 'react-quill/dist/quill.snow.css';
import Comment from "../../../../comment/comment";

export default class SummaryTab extends React.Component {
    constructor(props) {
        super(props);

        this.handleContribExport = this.handleContribExport.bind(this);
    }

    render() {
        const {loading} = this.props.summaryData;
        const {payload: validationParams} = this.props.defaults;
        const renderHelper = new RenderFieldHelper(summaryFieldsToRender, validationParams);
        if (loading) {
            return (<LoadingSpinner/>);
        } else {
            const {general, status, links, pwsInfo} = this.props.summaryData.payload;
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
                                        <Timeline
                                            milestones={milestones.payload}
                                            status={overallIndicator}
                                        />
                                    </ErrorBoundary>
                                )
                        }
                    </CustomCard>
                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(general).map((obj) => {
                                    const fieldLabel = renderHelper.getLabelById(obj);
                                    const shouldRender = renderHelper.displayOrNot(obj);
                                    return (
                                        shouldRender && (
                                            <div
                                                key={obj}
                                                className={mainCardStyle}
                                            >
                                                <FieldName name={fieldLabel}/>
                                                {obj === "projectDescription"
                                                    ? <Comment value={general[obj]}/>
                                                    : <FieldValue value={general[obj]}/>
                                                }
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>
                        <div className={styles.right_part}>
                            {healthIndicators.loading
                                ? <LoadingSpinner/>
                                : (
                                    <ErrorBoundary>
                                        <HealthIndicators
                                            isSummaryMode
                                            indicators={healthIndicators.payload}
                                            fieldsToRender={fieldsToRender}
                                        />
                                    </ErrorBoundary>
                                )
                            }
                        </div>
                    </CustomCard>
                    <CustomCard className={styles.data_container}>
                        <div className="left_part">
                            {
                                Object.keys(status).map((obj) => {
                                    const flagClassColor = this.getClassForFlag(obj);
                                    const shouldRender = renderHelper.displayOrNot(obj);
                                    const fieldLabel = renderHelper.getLabelById(obj);
                                    const quillModules = {toolbar: null};
                                    return (
                                        shouldRender && (
                                            <div
                                                key={obj}
                                                className={styles.executive_block}
                                            >
                                                <FieldName
                                                    name={fieldLabel}
                                                    className={flagClassColor}
                                                />
                                                <ReactQuill
                                                    defaultValue={status[obj]}
                                                    modules={quillModules}
                                                    readOnly
                                                />
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>
                        <div className={styles.right_part}>
                            {
                                Object.keys(links).map((obj) => {
                                    const shouldRender = renderHelper.displayOrNot(obj);
                                    const label = renderHelper.getLabelById(obj);
                                    const value = `${links[obj]}`;
                                    return (
                                        shouldRender && (
                                            <div
                                                key={obj}
                                                className={secondaryCardStyle}
                                            >
                                                <FieldName name={label}/>
                                                <FieldValue value={value}/>
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>
                    </CustomCard>
                    <CustomCard className={styles.pws_data_container}>
                        <div>
                            {
                                Object.keys(pwsInfo).map((obj) => {
                                    const shouldRender = renderHelper.displayOrNot(obj);
                                    const label = renderHelper.getLabelById(obj);
                                    const value = pwsInfo[obj];
                                    return (
                                        shouldRender && (
                                            <div
                                                key={obj}
                                                className={styles.data_fields}
                                            >
                                                <FieldName name={label}/>
                                                {this.renderHelper(obj, value)}
                                            </div>
                                        )
                                    )
                                })
                            }
                        </div>
                    </CustomCard>
                    <CustomCard>
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
                                        <ContributingOpenProjects
                                            offer={contribTable.payload.offer}
                                            contributed={contribTable.payload.products}
                                            minDate={contribTable.payload.minDate}
                                            maxDate={contribTable.payload.maxDate}
                                            onContribExport={this.handleContribExport}
                                            fileExport={this.props.contribTable.fileExport}
                                        />
                                    </ErrorBoundary>
                                    }
                                </>
                            )
                        }
                    </CustomCard>
                </div>
            )
        }
    }

    handleContribExport() {
        const {projectName} = this.props.defaults.payload;
        return this.props.onContribExport(projectName);
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
                [styles.bottom_margin]: (projectType === ProjectTypes.OFFER || !!contribTable.payload.offer)
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
    onContribExport: PropTypes.func,
};
import React from 'react';
import Timeline from "../../timeline/timeline";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import styles from './summaryTab.module.css';
import classNames from 'classnames';
import {CustomCard} from "../../card/customCard.js";
import HealthIndicators from "../../health-indicators/health-indicators";
import PropTypes from 'prop-types';

export default class SummaryTab extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        console.log("Summary tab", "Render");
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
                        <div className={mainCardStyle}>
                            <FieldName name="Product Name"/>
                            <FieldValue value={this.props.summaryData.productName}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Project Description"/>
                            <FieldValue value={this.props.summaryData.projectDescription}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Project Manager"/>
                            <FieldValue value={this.props.summaryData.projectManager}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Business Line Manager"/>
                            <FieldValue value={this.props.summaryData.businessLineManager}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Product Line Manager"/>
                            <FieldValue value={this.props.summaryData.productLineManager}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Project State"/>
                            <FieldValue value={this.props.summaryData.projectState}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Project Rigor"/>
                            <FieldValue value={this.props.summaryData.projectRigor}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Charter"/>
                            <FieldValue value={this.props.summaryData.charter}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="OR Business Plan"/>
                            <FieldValue value={this.props.summaryData.orBusinessPlan}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Updated Business Plan"/>
                            <FieldValue value={this.props.summaryData.updatedBusinessPlan}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Tailored DR-checklist"/>
                            <FieldValue value="null"/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Lessons Learned"/>
                            <FieldValue value={this.props.summaryData.lessonsLearned}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Sponsor"/>
                            <FieldValue value={this.props.summaryData.sponsor}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Business Division"/>
                            <FieldValue value={this.props.summaryData.businessDivision}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Business Unit"/>
                            <FieldValue value={this.props.summaryData.businessUnit}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Product Line"/>
                            <FieldValue value={this.props.summaryData.productLine}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="PWS State"/>
                            <FieldValue value={this.props.summaryData.workspaceState}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="Project Type"/>
                            <FieldValue value={this.props.summaryData.projectType}/>
                        </div>
                        <div className={mainCardStyle}>
                            <FieldName name="OEM Partner"/>
                            <FieldValue value={this.props.summaryData.oemPartner}/>
                        </div>
                    </div>
                    <div className={styles.right_part}>
                        <HealthIndicators isSummaryMode={true}/>
                    </div>
                </CustomCard>

                <br/>

                <CustomCard className={styles.data_container}>
                    <div className="left_part">
                        <div className={secondaryCardStyle}>
                            <FieldName name="test"/>
                            <FieldValue value="test"/>
                        </div>
                    </div>
                    <div className="right_part">
                        <div className={secondaryCardStyle}>
                            <FieldName name="test"/>
                            <FieldValue value="test"/>
                        </div>
                    </div>
                </CustomCard>

                <br/>

                <CustomCard className={styles.pws_data_container}>
                    <div>
                        <div className={styles.data_fields}>
                            <FieldName name="test"/>
                            <FieldValue value="test"/>
                        </div>
                    </div>
                </CustomCard>
            </div>
        )
    }
}

SummaryTab.propTypes = {
    loadData: PropTypes.func,
    summaryData: PropTypes.object.isRequired,
};
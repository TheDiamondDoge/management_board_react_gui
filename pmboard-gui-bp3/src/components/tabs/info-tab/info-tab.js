import React from 'react';
import {CustomCard} from "../../card/custom-card";
import MilestoneTable from "../../milestone-table/milestone-table";
import {FieldName} from "../../field-name/field-name";
import EditSaveControls from "../../edit-save-contols/edit-save-controls";
import styles from './info-tab.module.css'
import PropTypes from 'prop-types';
import Loading from "../../loading-card/loading";
import {displayOrNot, getLabelById} from "./fields";
import {Formik} from "formik";
import FormikInput from "../../mini-input-renderers/mini-input-renderers";
import FieldValue from "../../field-value/field-value";
import {MilestoneShape} from "../../../util/custom-types";
import {formikFieldHandleChange} from "../../../util/util";

export default class InfoTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    submitForm = null;

    bindFormSubmission = (formikSubmitForm) => {
        this.submitForm = formikSubmitForm;
    };

    editClickHandle = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode,
        }))
    };

    render() {
        const {information, milestones} = this.props;
        if (information.loading || milestones.loading) {
            return (<Loading/>)
        } else {
            const {general, urls, validationParams} = information.payload;
            const milestones = this.props.milestones.payload;

            return (
                <Formik
                    onSubmit={(values, formikActions) => {
                        formikActions.setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }}
                    initialValues={
                        {
                            general,
                            urls,
                            milestones
                        }
                    }

                    render={
                        (formikProps) => {
                            this.bindFormSubmission(formikProps.submitForm);
                            return (
                                <div>
                                    <EditSaveControls
                                        onClick={this.editClickHandle}
                                        onSubmit={this.submitForm}
                                        editMode={this.state.editMode}
                                    />
                                    <CustomCard>
                                        {
                                            this.mainRows(general, validationParams, this.state.editMode, "general")
                                        }
                                    </CustomCard>

                                    <br/>

                                    <CustomCard>
                                        {
                                            <MilestoneTable
                                                editMode={this.state.editMode}
                                                milestonesData={formikProps.values.milestones}
                                                onDateChangeFactory={formikFieldHandleChange(formikProps)}
                                            />
                                        }
                                    </CustomCard>

                                    <br/>

                                    <CustomCard>
                                        {
                                            this.mainRows(urls, validationParams, this.state.editMode, "urls")
                                        }
                                    </CustomCard>
                                </div>
                            )
                        }
                    }
                />
            )
        }
    }

    mainRows = (general, validationParams, editMode, stateBranch) => {
        const style = this.selectClass(stateBranch);
        return (Object.keys(general).map((obj) => {
            return (
                displayOrNot(obj, validationParams)
                    ? <div key={obj} className={style}>
                        <FieldName name={getLabelById(obj)}/>
                        {
                            editMode
                                ? <FormikInput
                                    type="text"
                                    name={`${stateBranch}.${obj}`}
                                  />
                                : <FieldValue value={general[obj]} />
                        }
                    </div>
                    : ""
            )
        }))
    };

    selectClass = (stateBranch) => {
        switch (stateBranch) {
            case "urls":
                return styles.url_container;
            case "general":
            default:
                return styles.data_container;
        }
    };
}

InfoTab.propTypes = {
    information: PropTypes.object.isRequired,
    milestones: PropTypes.arrayOf(MilestoneShape),
    loadData: PropTypes.func,
    resetData: PropTypes.func,
};
import React from 'react';
import {CustomCard} from "../../card/custom-card";
import MilestoneTable from "../../milestone-table/milestone-table";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import EditSaveControls from "../../edit-save-contols/edit-save-controls";
import styles from './info-tab.module.css'
import PropTypes from 'prop-types';
import Loading from "../../loading-card/loading";
import {displayOrNot, getLabelById} from "./fields";
import {Formik} from "formik";
import {renderInput} from "../../../util/util-renders";

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
            console.log("PROOOOOOOOOOOOPS", this.props);
            console.log("PROOOOOOOOOOOOPS", milestones);

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
                                            mainRows(general, validationParams, this.state.editMode, "general")
                                        }
                                    </CustomCard>

                                    <br/>

                                    <CustomCard>
                                        {
                                            milestones.loading
                                                ? <Loading/>
                                                : <MilestoneTable
                                                    editMode={this.state.editMode}
                                                    milestonesData={milestones}
                                                />
                                        }
                                    </CustomCard>

                                    <br/>

                                    <CustomCard>
                                        {
                                            mainRows(urls, validationParams, this.state.editMode, "urls")
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
}

let mainRows = (general, validationParams, editMode, stateBranch) => {
    const style = selectClass(stateBranch);
    console.log(general);
    return (Object.keys(general).map((obj) => (
        displayOrNot(obj, validationParams)
            ? <div key={obj} className={style}>
                <FieldName name={getLabelById(obj)}/>
                {renderInput(stateBranch + "." + obj, general[obj], editMode, "text")}
            </div>
            : ""
    )))
};

let selectClass = (stateBranch) => {
    switch (stateBranch) {
        case "urls":
            return styles.url_container;
        case "general":
        default:
            return styles.data_container;
    }
};

//TODO: shape of milestones???
InfoTab.propTypes = {
    information: PropTypes.object.isRequired,
    milestones: PropTypes.array.isRequired,
    loadData: PropTypes.func,
    resetData: PropTypes.func,
};
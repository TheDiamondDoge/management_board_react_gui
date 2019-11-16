import React from 'react';
import {CustomCard} from "../../card/custom-card";
import MilestoneTable from "../../milestone-table/milestone-table";
import {FieldName} from "../../field-name/field-name";
import EditSaveControls from "../../edit-save-contols/edit-save-controls";
import styles from './info-tab.module.css'
import PropTypes from 'prop-types';
import Loading from "../../loading-card/loading";
import {Field, Formik} from "formik";
import FormikInput from "../../mini-input-renderers/mini-input-renderers";
import FieldValue from "../../field-value/field-value";
import {MilestoneShape} from "../../../util/custom-types";
import {formikFieldHandleChange} from "../../../util/util";
import {infoFieldsToRender} from "./fields";
import RenderFieldHelper from "../../../util/render-field-helper";
import validationSchema from "./validationSchema";
import HelpIcon from "../../help-icon/help-icon";
import {isBoolean} from "../../../util/comparators";
import {boolToYesNo} from "../../../util/transformFuncs";
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";

//TODO: too slow and laggy (sometimes). Try fastField
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

    sendData = (data) => {
        const {saveInfo, saveMilestones} = this.props;
        const {milestones, ...infoDto} = data;
        saveInfo(infoDto);
        saveMilestones(milestones);
    };

    cancelInput = () => {
        this.props.loadData();
        this.editClickHandle();
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
            const {general, urls} = information.payload;
            const milestones = this.props.milestones.payload;

            return (
                <Formik
                    enableReinitialize
                    onSubmit={(values, formikActions) => {
                        formikActions.setSubmitting(false);
                        this.sendData(values);
                        this.editClickHandle();
                        alert(JSON.stringify(values, null, 2));
                    }}
                    initialValues={
                        {
                            general,
                            urls,
                            milestones
                        }
                    }
                    validationSchema={
                        validationSchema
                    }
                    render={
                        (formikProps) => {
                            this.bindFormSubmission(formikProps.submitForm);
                            return (
                                <div>
                                    <EditSaveControls
                                        onClick={this.editClickHandle}
                                        onSubmit={this.submitForm}
                                        onCancel={this.cancelInput}
                                        editMode={this.state.editMode}
                                    />
                                    <CustomCard>
                                        {this.mainRows(formikProps.values.general, "general")}
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
                                        {this.mainRows(formikProps.values.urls, "urls")}
                                    </CustomCard>
                                </div>
                            )
                        }
                    }
                />
            )
        }
    }

    mainRows = (values, stateBranch) => {
        const renderHelper = new RenderFieldHelper(infoFieldsToRender);
        return (Object.keys(values).map((obj) => {
            return this.renderRow(renderHelper, obj, stateBranch, values);
        }))
    };

    renderRow = (renderHelper, obj, stateBranch, values) => {
        const value = values[obj];
        switch (obj) {
            case "orBusinessPlan":
            case "updatedBusinessPlan":
            case "drChecklist":
                return this.renderRowWithComment(renderHelper, obj, stateBranch, value);
            case "ecmaBacklogTarget":
                return this.renderEcmaBacklogRow(renderHelper, obj, stateBranch, value);
            case "contributingProjects": {
                const isComposite = values.composite;
                return this.renderContributingProjectsRow(renderHelper, obj, stateBranch, value, isComposite);
            }
            default:
                return this.renderSimpleRow(renderHelper, obj, stateBranch, value);
        }
    };

    renderSimpleRow = (renderHelper, obj, stateBranch, value) => {
        const {editMode} = this.state;
        const {validationParams} = this.props.information.payload;
        const style = this.selectClass(stateBranch);
        const formikProps = renderHelper.getFieldProps(obj, value);
        const displayValue = isBoolean(value) ? boolToYesNo(value) : value;
        return (
            renderHelper.displayOrNot(obj, validationParams) &&
            <div key={obj} className={style}>
                <FieldName name={renderHelper.getLabelById(obj)}/>
                {
                    editMode && renderHelper.isEditable(obj)
                        ? <FormikInput
                            {...formikProps}
                            name={`${stateBranch}.${obj}`}
                        />
                        : <FieldValue value={displayValue}/>
                }
            </div>
        )
    };

    renderRowWithComment = (renderHelper, obj, stateBranch, value) => {
        const {editMode} = this.state;
        const {validationParams} = this.props.information.payload;
        const formikProps = renderHelper.getFieldProps(obj, value);
        return (
            renderHelper.displayOrNot(obj, validationParams) &&
            <div key={obj} className={styles.data_container_comment}>
                <div className={styles.comment_row_label}>
                    <FieldName name={renderHelper.getLabelById(obj)}/>
                </div>
                {
                    editMode && renderHelper.isEditable(obj)
                        ? <FormikInput
                            {...formikProps}
                            name={`${stateBranch}.${obj}`}
                            className={styles.comment_row_value}
                        />
                        : <FieldValue value={value} className={styles.comment_row_value}/>
                }
                <div className={styles.comment_row_comment}>
                    <FieldName name={"Comment"}/><HelpIcon className={styles.help_icon}/>
                </div>

                {
                    editMode
                        ? <FormikInput
                            type="textarea"
                            name={`${stateBranch}.${obj}`}
                            className={styles.comment_row_comment_value}
                        />
                        : <FieldValue value={value} className={styles.comment_row_comment_value}/>
                }
            </div>
        )
    };

    renderEcmaBacklogRow = (renderHelper, obj, stateBranch, value) => {
        const {editMode} = this.state;
        const {validationParams} = this.props.information.payload;
        return (
            renderHelper.displayOrNot(obj, validationParams) &&
            <div key={obj} className={styles.ecma_backlog_row}>
                <FieldName name={renderHelper.getLabelById(obj)} className={styles.ecma_label}/>
                {Object.keys(value).map((key, i) => (
                    <>
                        <FieldName name={"Milestone"} className={styles[`milestone_${i + 1}`]}/>
                        {
                            editMode
                                ? <Field component="select"
                                         name={`${stateBranch}.${obj}.${key}.milestone`}
                                         className={styles[`milestone_value_${i + 1}`]}
                                >
                                    <option value="">&nbsp;</option>
                                    <option value="CI">CI</option>
                                    <option value="TR">TR</option>
                                    <option value="DR4">DR4</option>
                                    <option value="DR5">DR5</option>
                                </Field>
                                : <FieldValue value={value[key]["milestone"]}
                                              className={styles[`milestone_value_${i + 1}`]}
                                />
                        }
                        <FieldName name={"Value"} className={styles[`value_label_${i + 1}`]}/>
                        {
                            editMode
                                ? <FormikInput type="text"
                                               name={`${stateBranch}.${obj}.${key}.value`}
                                               className={styles[`value_${i + 1}`]}
                                />
                                : <FieldValue value={value[key]["value"]} className={styles[`value_${i + 1}`]}/>
                        }
                    </>
                ))}
            </div>
        )
    };

    //TODO: connect with formik, do backend endpoint
    renderContributingProjectsRow = (renderHelper, obj, stateBranch, value, isComposite) => {
        const {editMode} = this.state;
        const {validationParams} = this.props.information.payload;
        const style = this.selectClass(stateBranch);
        return (
            renderHelper.displayOrNot(obj, validationParams) && isComposite &&
            <div key={obj} className={style}>
                <FieldName name={renderHelper.getLabelById(obj)}/>
                {
                    editMode && renderHelper.isEditable(obj) &&
                        <MultiSelect
                            items={["A", "B", "C"]}
                            itemRenderer={(item, {modifiers, handleClick}) =>
                                <MenuItem
                                    key={item}
                                    text={item}
                                    onClick={handleClick}
                                    active={modifiers.active}
                                />
                            }
                            selectedItems={[]}
                            onItemSelect={(elem) => {}}
                            tagRenderer={item => item}
                            tagInputProps={{onRemove: (item) => {}}}
                        />
                }
            </div>
        )
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
    saveInfo: PropTypes.func,
    saveMilestones: PropTypes.func,
};
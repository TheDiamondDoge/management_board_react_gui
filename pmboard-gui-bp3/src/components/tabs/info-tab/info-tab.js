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
import getValidationSchema from "./validationSchema";
import HelpIcon from "../../help-icon/help-icon";
import {isBoolean} from "../../../util/comparators";
import {boolToYesNo} from "../../../util/transformFuncs";
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import * as Yup from "yup";


//TODO: too slow and laggy (sometimes). Try fastField
//TODO: key prop is missing
//TODO: why not numeric inputs???
export default class InfoTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: true
        };

        this.mandatoryMilestones = ["OR", "DR0", "DR1", "DR2", "DR3", "DR4", "OBR", "CI"];
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

    handleChange = null;

    render() {

        const {information, milestones} = this.props;
        if (information.loading || milestones.loading) {
            return (<Loading/>)
        } else {
            const {general, urls} = information.payload;
            let milestones = this.props.milestones.payload;
            if (milestones.length === 0) {
                milestones = this.populateMandatoryMilestones();
            }

            return (
                <Formik
                    enableReinitialize
                    onSubmit={(values, formikActions) => {
                        formikActions.setSubmitting(false);

                        this.sendData(values);
                        this.editClickHandle();
                        // alert(JSON.stringify(values, null, 2));
                    }}
                    initialValues={
                        {
                            general,
                            urls,
                            milestones
                        }
                    }
                    validationSchema={
                        getValidationSchema
                    }
                    render={
                        (formikProps) => {
                            this.bindFormSubmission(formikProps.submitForm);
                            this.handleChange = formikFieldHandleChange(formikProps);
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
                                                mandatoryMilestones={this.mandatoryMilestones}
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

    populateMandatoryMilestones = () => {
        return this.mandatoryMilestones.map(label => (
            {
                label: label,
                actualDate: null,
                baselineDate: null,
                completion: 0,
                shown: false,
                meetingMinutes: ""
            }
        ))
    };

    mainRows = (values, stateBranch) => {
        const renderHelper = new RenderFieldHelper(infoFieldsToRender);
        return (Object.keys(values).map((obj) => {
            return this.renderRow(renderHelper, obj, stateBranch, values);
        }))
    };

    renderRow = (renderHelper, obj, stateBranch, values) => {
        const value = values[obj];
        switch (obj) {
            case "lessonsLearned":
            case "updatedBusinessPlan":
            case "drChecklist":
            case "launchingPlan":
            case "projectPlan":
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
                            name={`${stateBranch}.${obj}.value`}
                            className={styles.comment_row_value}
                        />
                        : <FieldValue value={value.value} className={styles.comment_row_value}/>
                }
                <div className={styles.comment_row_comment}>
                    <FieldName name={"Comment"}/><HelpIcon className={styles.help_icon}/>
                </div>

                {
                    editMode
                        ? <FormikInput
                            type="textarea"
                            name={`${stateBranch}.${obj}.comment`}
                            className={styles.comment_row_comment_value}
                        />
                        : <FieldValue value={value.comment} className={styles.comment_row_comment_value}/>
                }
            </div>
        )
    };

    renderEcmaBacklogRow = (renderHelper, obj, stateBranch, value) => {
        const {editMode} = this.state;
        const {validationParams} = this.props.information.payload;
        return (
            renderHelper.displayOrNot(obj, validationParams) &&
            <div key={obj} className={styles.data_container}>
                <FieldName name={renderHelper.getLabelById(obj)}/>
                <div className={styles.ecma_backlog_row}>
                    {
                        Object.keys(value).map((key, i) => (
                            <React.Fragment key={key}>
                                <FieldName
                                    key={`milestone_${i}`}
                                    name={"Milestone"}
                                    className={styles[`milestone_${i + 1}`]}/>
                                {
                                    editMode
                                        ? <Field key={`mil_val_${i}`}
                                                 component="select"
                                                 name={`${stateBranch}.${obj}.${key}.milestone`}
                                                 className={styles[`milestone_value_${i + 1}`]}
                                        >
                                            <option value="">&nbsp;</option>
                                            <option value="CI">CI</option>
                                            <option value="TR">TR</option>
                                            <option value="DR4">DR4</option>
                                            <option value="DR5">DR5</option>
                                        </Field>
                                        : <FieldValue key={`mil_val_${i}`}
                                                      value={value[key]["milestone"]}
                                                      className={styles[`milestone_value_${i + 1}`]}
                                        />
                                }
                                <FieldName key={`value_${i}`}
                                           name={"Value"}
                                           className={styles[`value_label_${i + 1}`]}
                                />
                                {
                                    editMode
                                        ? <FormikInput key={`val_val_${i}`}
                                                       type="text"
                                                       name={`${stateBranch}.${obj}.${key}.value`}
                                                       className={styles[`value_${i + 1}`]}
                                        />
                                        : <FieldValue key={`val_val_${i}`}
                                                      value={value[key]["value"]}
                                                      className={styles[`value_${i + 1}`]}
                                        />
                                }
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        )
    };

    //TODO: Refactor
    renderContributingProjectsRow = (renderHelper, obj, stateBranch, value, isComposite) => {
        const {loading, payload} = this.props.contrib;
        const {editMode} = this.state;
        const {validationParams} = this.props.information.payload;
        const valueStrings = value.map((val) => val.projectName);
        const editProjectList = this.handleChange(`${stateBranch}.${obj}`);
        const style = this.selectClass(stateBranch);
        return (
            renderHelper.displayOrNot(obj, validationParams) && isComposite &&
            <div key={obj} className={style}>
                <FieldName name={renderHelper.getLabelById(obj)}/>
                {
                    !loading && editMode && renderHelper.isEditable(obj) &&
                    <MultiSelect
                        items={payload}
                        itemRenderer={(item, {handleClick}) =>
                            <MenuItem
                                key={item.projectName}
                                text={item.projectName}
                                onClick={handleClick}
                                active={this.isActive(item.projectName, valueStrings)}
                            />
                        }
                        selectedItems={valueStrings}
                        onItemSelect={(elem) => {
                            editProjectList(this.addProject(elem, value))
                        }}
                        tagRenderer={item => item}
                        tagInputProps={
                            {
                                onRemove: (item) => {
                                    editProjectList(this.removeProject(item, value));
                                }
                            }
                        }
                    />
                }
                {
                    editMode ||
                    <div>
                        {
                            valueStrings.map((name) => (
                                <React.Fragment key={name}><FieldValue className={styles.prj_margin} value={name}/></React.Fragment>
                            ))
                        }
                    </div>
                }
            </div>
        )
    };

    addProject = (obj, projects) => {
        const projectNames = projects.map(prj => prj.projectName);
        if (!projectNames.includes(obj.projectName)) {
            return [...projects, obj];
        } else {
            return projects;
        }
    };

    removeProject = (projectName, projectsList) => (
        projectsList.filter(project => project.projectName !== projectName)
    );

    isActive = (projectName, selectedProjects) => (
        selectedProjects.includes(projectName)
    );

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
    milestones: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(MilestoneShape),
    }),
    contrib: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.array,
    }),
    loadData: PropTypes.func,
    resetData: PropTypes.func,
    saveInfo: PropTypes.func,
    saveMilestones: PropTypes.func,
};
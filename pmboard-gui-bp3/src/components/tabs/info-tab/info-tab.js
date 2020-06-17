import React from 'react';
import CustomCard from "../../card/custom-card";
import MilestoneTable from "../../milestone-table/milestone-table";
import FieldName from "../../field-name/field-name";
import EditSaveControls from "../../controls/edit-save-controls/edit-save-controls";
import styles from './info-tab.module.scss'
import PropTypes from 'prop-types';
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {Field, FieldArray, Formik} from "formik";
import FormikInput, {ArrayErrors} from "../../controls/util-renderers";
import FieldValue from "../../field-value/field-value";
import {MilestoneShape, ProjectDefaults} from "../../../util/custom-types";
import {formikFieldHandleChange} from "../../../util/util";
import infoFieldsToRender from "./fields";
import RenderFieldHelper from "../../../util/render-field-helper";
import getValidationSchema from "./validation-schema";
import HelpIcon from "../../help-icon/help-icon";
import {isBoolean} from "../../../util/comparators";
import {boolToYesNo} from "../../../util/transform-funcs";
import {MenuItem, Position, Tooltip} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import Comment from "../../comment/comment";
import {CommonMilestonesLabels, Messages} from "../../../util/constants";
import OnSubmitValidationError from "../../formik-onsubmit-validator";
import TooltipContent from "../../tooltip-content/tooltip-content";


export default class InfoTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };

        this.mandatoryMilestones = [
            CommonMilestonesLabels.OR, CommonMilestonesLabels.DR0, CommonMilestonesLabels.DR1,
            CommonMilestonesLabels.DR2, CommonMilestonesLabels.DR3, CommonMilestonesLabels.TR,
            CommonMilestonesLabels.DR4, CommonMilestonesLabels.DR5, CommonMilestonesLabels.OBR,
            CommonMilestonesLabels.CI
        ];
    }

    submitForm = null;

    bindFormSubmission = (formikSubmitForm) => {
        this.submitForm = formikSubmitForm;
    };

    sendData = (data) => {
        const {saveInfo} = this.props;
        saveInfo(data);
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

        const {information} = this.props;
        if (information.loading) {
            return (<LoadingSpinner/>)
        } else {
            const {general, urls} = information.payload;
            let milestones = this.props.milestones.payload;
            if (milestones.length === 0) {
                milestones = this.populateMandatoryMilestones();
            }

            const validationParams = this.props.defaults.payload;
            this.renderHelper = new RenderFieldHelper(infoFieldsToRender, validationParams);
            const showEditControls = this.renderHelper.displayOrNot("controls");
            return (
                <Formik
                    enableReinitialize
                    isInitialValid
                    onSubmit={(values, formikActions) => {
                        formikActions.setSubmitting(false);

                        this.sendData(values);
                        this.editClickHandle();
                    }}
                    initialValues={
                        {
                            general,
                            urls,
                            milestones
                        }
                    }
                    validationSchema={
                        getValidationSchema()
                    }
                    render={
                        (formikProps) => {
                            this.x = formikProps.validateForm;
                            this.bindFormSubmission(formikProps.submitForm);
                            this.handleChange = formikFieldHandleChange(formikProps);
                            return (
                                <div>
                                    {
                                        showEditControls &&
                                        <EditSaveControls
                                            sticky
                                            onClick={this.editClickHandle}
                                            onSubmit={this.submitForm}
                                            onCancel={this.cancelInput}
                                            editMode={this.state.editMode}
                                        />
                                    }
                                    <CustomCard>
                                        {this.mainRows(formikProps.values.general, "general")}
                                    </CustomCard>
                                    <CustomCard>
                                        {
                                            milestones.loading
                                                ? <LoadingSpinner/>
                                                : (
                                                    <MilestoneTable
                                                        editMode={this.state.editMode}
                                                        milestonesData={formikProps.values.milestones}
                                                        onDateChangeFactory={formikFieldHandleChange(formikProps)}
                                                        mandatoryMilestones={this.mandatoryMilestones}
                                                    />
                                                )
                                        }
                                    </CustomCard>
                                    <CustomCard>
                                        {this.mainRows(formikProps.values.urls, "urls")}
                                    </CustomCard>
                                    <OnSubmitValidationError callback={this.handleSubmitWithErrors}/>
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
        return (Object.keys(infoFieldsToRender).map((key) => {
            if (values[key] === undefined) return true;
            return this.renderRow(key, stateBranch, values);
        }))
    };

    renderRow = (obj, stateBranch, values) => {
        const value = values[obj];
        switch (obj) {
            case "lessonsLearned":
            case "updatedBusinessPlan":
            case "drChecklist":
            case "launchingPlan":
            case "projectPlan":
                return this.renderRowWithComment(obj, stateBranch, value);
            case "ecmaBacklogTarget":
                return this.renderEcmaBacklogRow(obj, stateBranch, value);
            case "contributingProjects": {
                const isComposite = values.composite;
                return this.renderContributingProjectsRow(obj, stateBranch, value, isComposite);
            }
            default:
                return this.renderSimpleRow(obj, stateBranch, value);
        }
    };

    renderSimpleRow = (obj, stateBranch, value) => {
        const {editMode} = this.state;
        const style = this.selectClass(stateBranch);
        const formikProps = this.renderHelper.getFieldProps(obj, value);
        const displayValue = isBoolean(value) ? boolToYesNo(value) : value;
        const shouldRender = this.renderHelper.displayOrNot(obj);
        const label = this.renderHelper.getLabelById(obj);
        const editForm = editMode && this.renderHelper.isEditable(obj);
        const fieldName = `${stateBranch}.${obj}`;

        return (
            shouldRender &&
            <div
                key={obj}
                className={style}
            >
                <FieldName name={label}/>
                {
                    editForm
                        ? (
                            <FormikInput
                                {...formikProps}
                                name={fieldName}
                            />
                        )
                        : this.renderValue(obj, displayValue)
                }
            </div>
        )
    };

    renderValue(attrName, value) {
        if (attrName === "projectDescription") return <Comment value={value}/>

        return <FieldValue value={value}/>
    }

    renderRowWithComment = (obj, stateBranch, value) => {
        const {editMode} = this.state;
        const help = this.renderHelper.getHelpObject(obj);
        const formikProps = this.renderHelper.getFieldProps(obj, value);
        const shouldRender = this.renderHelper.displayOrNot(obj);
        const label = this.renderHelper.getLabelById(obj);
        const editForm = editMode && this.renderHelper.isEditable(obj);
        const fieldName = `${stateBranch}.${obj}.value`;
        const commentFieldName = `${stateBranch}.${obj}.comment`;
        return (
            shouldRender &&
            <div
                key={obj}
                className={styles.data_container_comment}
            >
                <div className={styles.comment_row_label}>
                    <FieldName name={label}/>
                </div>
                {
                    editForm
                        ? (
                            <FormikInput
                                {...formikProps}
                                name={fieldName}
                                className={styles.comment_row_value}
                            />
                        )
                        : (
                            <FieldValue
                                value={value.value}
                                className={styles.comment_row_value}
                            />
                        )
                }
                <div className={styles.comment_row_comment}>
                    <FieldName name={"Comment"}/>
                    <Tooltip
                        position={Position.LEFT}
                        content={
                            <TooltipContent
                                title={help.title}
                                content={help.content}
                            />
                        }
                    >
                        <HelpIcon className={styles.help_icon}/>
                    </Tooltip>
                </div>

                {
                    editMode
                        ? (
                            <FormikInput
                                type="textarea"
                                name={commentFieldName}
                                className={styles.comment_row_comment_value}
                            />
                        )
                        : (
                            <Comment
                                value={value.comment}
                                className={styles.comment_row_comment_value}
                            />
                        )
                }
            </div>
        )
    };

    renderEcmaBacklogRow = (obj, stateBranch) => {
        const {editMode} = this.state;
        const shouldRender = this.renderHelper.displayOrNot(obj);
        const arrayName = `${stateBranch}.${obj}`;
        const label = this.renderHelper.getLabelById(obj);
        return (
            shouldRender &&
            <FieldArray
                key={arrayName}
                name={arrayName}
                render={(arrayHelpers) => {
                    const value = arrayHelpers.form.values[stateBranch][obj];
                    const arrayErrorName = `${stateBranch}.${obj}`;
                    const errors = arrayHelpers.form.errors;
                    return (
                        <div
                            key={obj}
                            className={styles.data_container}
                        >
                            <FieldName name={label}/>
                            <div className={styles.ecma_backlog_row}>
                                {
                                    Object.keys(value).map((key, i) => {
                                            const milestoneSelectName = `${stateBranch}.${obj}.${key}.milestone`;
                                            const valueInputName = `${stateBranch}.${obj}.${key}.value`;
                                            const milestoneValue = value[key]["milestone"];
                                            const backlogValue = value[key]["value"];
                                            return (
                                                <React.Fragment key={key}>
                                                    <FieldName
                                                        key={`milestone_${i}`}
                                                        name={"Milestone"}
                                                    />
                                                    {
                                                        editMode
                                                            ? this.getMilestoneSelector(milestoneSelectName, `mil_val_${i}`)
                                                            : (
                                                                <FieldValue
                                                                    key={`mil_val_${i}`}
                                                                    value={milestoneValue}
                                                                />
                                                            )
                                                    }
                                                    <FieldName
                                                        key={`value_${i}`}
                                                        name={"Value"}
                                                        className={styles.value_label}
                                                    />
                                                    {
                                                        editMode
                                                            ? (
                                                                <FormikInput
                                                                    key={`val_val_${i}`}
                                                                    type="numeric"
                                                                    onValueChange={this.handleChange(valueInputName)}
                                                                    name={valueInputName}
                                                                />
                                                            )
                                                            : (
                                                                <FieldValue
                                                                    key={`val_val_${i}`}
                                                                    value={backlogValue}
                                                                />
                                                            )
                                                    }
                                                </React.Fragment>
                                            )
                                        }
                                    )
                                }
                                <ArrayErrors
                                    name={arrayErrorName}
                                    errors={errors}
                                />
                            </div>
                        </div>
                    )
                }}
            />
        )
    };

    getMilestoneSelector(name, key) {
        return (
            <Field
                key={key}
                component="select"
                name={name}
            >
                <option value="">&nbsp;</option>
                <option value="CI">CI</option>
                <option value="TR">TR</option>
                <option value="DR4">DR4</option>
                <option value="DR5">DR5</option>
            </Field>
        )
    }

    renderContributingProjectsRow = (obj, stateBranch, value, isComposite) => {
        const {loading, payload} = this.props.contrib;
        const {editMode} = this.state;
        const valueStrings = value.map((val) => val.projectName);
        const editProjectList = this.handleChange(`${stateBranch}.${obj}`);
        const style = this.selectClass(stateBranch);

        const shouldRender = this.renderHelper.displayOrNot(obj) && isComposite;
        const shouldMultiselectRender = !loading && editMode && this.renderHelper.isEditable(obj);
        const label = this.renderHelper.getLabelById(obj);
        return (
            shouldRender &&
            <div
                key={obj}
                className={style}
            >
                <FieldName name={label}/>
                {
                    shouldMultiselectRender &&
                    <MultiSelect
                        items={payload}
                        itemListPredicate={(inputVal, itemArr) => {
                            return itemArr.filter(item => String(item.projectName).toLowerCase()
                                .includes(inputVal.toLowerCase()))
                        }}
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
                        noResults={<MenuItem disabled text="No results." />}
                        tagRenderer={item => item}
                        tagInputProps={
                            {
                                onRemove: (item) => {
                                    editProjectList(this.removeProject(item, value));
                                }
                            }
                        }
                        popoverProps={{
                            popoverClassName: styles.multiselect
                        }}
                    />
                }
                {
                    editMode ||
                    <div>
                        {
                            valueStrings.map((name) => (
                                <React.Fragment key={name}>
                                    <FieldValue
                                        className={styles.prj_margin}
                                        value={name}
                                    />
                                </React.Fragment>
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

    handleSubmitWithErrors = (formikProps) => {
        if (!formikProps.isValid) {
            this.props.pushWarningToast(Messages.FORM_SUBMIT_ERROR)
        }
    }
}

InfoTab.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    information: PropTypes.object.isRequired,
    milestones: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(MilestoneShape),
    }),
    contrib: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(
            PropTypes.shape({
                projectID: PropTypes.number.isRequired,
                projectName: PropTypes.string.isRequired
            })
        ),
    }),
    saveInfo: PropTypes.func,
    pushWarningToast: PropTypes.func,
};
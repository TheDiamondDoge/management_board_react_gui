import React from "react";
import {HTMLTable, Button, Classes, Intent, Tooltip, Position} from "@blueprintjs/core";
import CustomCard from "../../../../card/custom-card";
import styles from "./blc.module.scss";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BlcRow from "../../../../blc-rows/blc-row";
import EditSaveControls from "../../../../controls/edit-save-controls/edit-save-controls";
import style from "../../../../blc-rows/blc-row.module.scss";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import {Formik} from "formik";
import {formikFieldHandleChange} from "../../../../../util/util";
import {BlcTab, ProjectDefaults} from "../../../../../util/custom-types";
import renderFields from "./fields";
import RenderFieldHelper from "../../../../../util/render-field-helper";
import {BlcRowNames, Messages} from "../../../../../util/constants";
import validationSchema from "./validation-schema";
import OnSubmitValidationError from "../../../../formik-onsubmit-validator";
import TooltipContent from "../../../../tooltip-content/tooltip-content";
import HelpIcon from "../../../../help-icon/help-icon";

export default class BlcDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPmRow: false,
            isPmoRow: false,
            isSalesRow: false,
            isCommentsEdit: false,
        };
    }

    submitForm = null;
    handleChange = null;

    render() {
        const {loading} = this.props.blcTab;
        if (loading) {
            return <LoadingSpinner/>
        } else {
            this.projectId = this.props.defaults.payload.projectId;
            const validationParams = this.props.defaults.payload;
            this.renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const {pm, pmo, sales, rowToSave} = this.props.blcTab.payload;
            const showSubmitCancel = this.shouldShowSubmitCancel();
            const showControls = this.renderHelper.displayOrNot("controls");
            const publishDashboardLabel = "Publish Dashboard";
            return (
                <>
                    <CustomCard>
                        {
                            showControls &&
                            <Button
                                intent={Intent.SUCCESS}
                                className={classNames(Classes.MINIMAL, styles.publish_btn)}
                                icon={"upload"}
                                text={publishDashboardLabel}
                            />
                        }
                        <Formik
                            isInitialValid
                            enableReinitialize
                            onSubmit={(values, formikActions) => {
                                formikActions.setSubmitting(false);
                                values.rowToSave = this.getRowToSaveValue();
                                const {saveComments, saveIndicators} = this.props;
                                if (this.state.isCommentsEdit) {
                                    saveComments(values);
                                } else {
                                    saveIndicators(values);
                                }

                                this.cancelEdit();
                            }}
                            initialValues={{
                                pm, pmo, sales, rowToSave
                            }}
                            validationSchema={
                                validationSchema
                            }
                            render={
                                (formikProps) => {
                                    this.bindFormSubmission(formikProps.submitForm);
                                    this.handleChange = formikFieldHandleChange(formikProps);
                                    return this.renderBlcTab(formikProps);
                                }
                            }
                        />
                    </CustomCard>
                    {showSubmitCancel &&
                    <EditSaveControls
                        editMode
                        onCancel={this.handleCancel}
                        onSubmit={this.submitForm}
                        className={styles.controls}
                    />
                    }
                </>
            )
        }
    }

    handleCancel = () => {
        this.cancelEdit();
        this.props.loadData();
    }

    bindFormSubmission = (formikSubmitFunc) => {
        this.submitForm = formikSubmitFunc;
    };

    onClickEdit = (row) => {
        this.setState((prevState) => ({
                [row]: !prevState[row]
            }
        ))
    };

    onClickCommentsEdit = () => {
        this.setState({
            isCommentsEdit: true
        })
    };

    cancelEdit = () => {
        this.setState({
            isPmRow: false,
            isPmoRow: false,
            isSalesRow: false,
            isCommentsEdit: false,
        });
    };

    shouldShowSubmitCancel() {
        return this.shouldShowEditControls() && this.renderHelper.displayOrNot("controls");
    }

    shouldShowEditControls() {
        return this.state.isPmoRow || this.state.isPmRow || this.state.isSalesRow || this.state.isCommentsEdit;
    }

    getRowToSaveValue = () => {
        if (this.state.isPmRow) {
            return "pm";
        }

        if (this.state.isPmoRow) {
            return "pmo";
        }

        if (this.state.isSalesRow) {
            return "sales";
        }
    };

    renderBlcTab = (formikProps) => {
        const thClasses = styles.column_align_center;
        const thCommentClasses = classNames(styles.column_align_center);
        const controlsAllowed = this.renderHelper.displayOrNot("controls");
        const help = this.renderHelper.getHelpObject("title");
        const {pm, pmo, sales} = formikProps.values;
        return (
            <div className={styles.relative_wrapper}>
                <Tooltip
                    position={Position.TOP}
                    content={
                        <TooltipContent
                            title={help.title}
                            content={help.content}
                        />
                    }
                >
                    <HelpIcon className={styles.help_icon}/>
                </Tooltip>
                <div className={styles.overflow_wrapper}>
                    <HTMLTable
                        bordered
                        striped
                        className={styles.blc_table}
                    >
                        {this.renderColGroup()}
                        {this.renderHeader(thClasses, thCommentClasses, controlsAllowed)}

                        <tbody>
                        <BlcRow
                            rowName={BlcRowNames.PM}
                            roleName={this.renderHelper.getLabelById(BlcRowNames.PM)}
                            lastUpdatedBy={pm.csl}
                            updatedOn={pm.updatedOn}
                            rowValues={pm.indicators}
                            comment={pm.comment}
                            onClickEdit={() => (this.onClickEdit("isPmRow"))}
                            onChange={this.handleChange}
                            isValuesEdit={this.state.isPmRow}
                            isCommentsEdit={this.state.isCommentsEdit}
                            isControlsHidden={this.isInEditMode()}
                            blocked={!controlsAllowed}
                        />
                        <BlcRow
                            rowName={BlcRowNames.PMO}
                            roleName={this.renderHelper.getLabelById(BlcRowNames.PMO)}
                            lastUpdatedBy={pmo.csl}
                            updatedOn={pmo.updatedOn}
                            rowValues={pmo.indicators}
                            comment={pmo.comment}
                            onClickEdit={() => (this.onClickEdit("isPmoRow"))}
                            onChange={this.handleChange}
                            isValuesEdit={this.state.isPmoRow}
                            isCommentsEdit={this.state.isCommentsEdit}
                            isControlsHidden={this.isInEditMode()}
                            blocked={!controlsAllowed}
                        />
                        {
                            this.renderHelper.displayOrNot(BlcRowNames.SALES) &&
                            <BlcRow
                                rowName={BlcRowNames.SALES}
                                roleName={this.renderHelper.getLabelById(BlcRowNames.SALES)}
                                lastUpdatedBy={sales.csl}
                                updatedOn={sales.updatedOn}
                                rowValues={sales.indicators}
                                comment={sales.comment}
                                onClickEdit={() => (this.onClickEdit("isSalesRow"))}
                                onChange={this.handleChange}
                                isValuesEdit={this.state.isSalesRow}
                                isCommentsEdit={this.state.isCommentsEdit}
                                isControlsHidden={this.isInEditMode()}
                                blocked={!controlsAllowed}
                            />
                        }
                        </tbody>
                    </HTMLTable>
                </div>
                <OnSubmitValidationError callback={this.handleSubmitWithErrors}/>
            </div>
        );
    };

    renderColGroup = () => (
        <colgroup>
            <col className={styles.role_col}/>
            <col className={styles.who_col}/>
            <col className={styles.updated_col}/>
            <col className={styles.or_col}/>
            <col className={styles.charter_col}/>
            <col className={styles.proj_plan_col}/>
            <col className={styles.tailoring_col}/>
            <col className={styles.prog_mgr_col}/>
            <col className={styles.core_col}/>
            <col className={styles.bp_plan_col}/>
            <col className={styles.bp_sales}/>
            <col className={styles.lp_plan}/>
            <col className={styles.lp_sales}/>
            <col className={styles.les_learned}/>
            <col className={styles.risks_col}/>
            <col className={styles.comment}/>
        </colgroup>
    );

    renderHeader = (thClasses, thCommentClasses, allowed) => {
        const isEditButton = this.shouldShowEditButton() && allowed;
        const roleClasses = classNames(thClasses, style.sticky_white);
        return (
            <thead>
            <tr>
                <th className={roleClasses} rowSpan={2}>
                    Role
                </th>
                <th className={thClasses} rowSpan={2}>
                    Who</th>
                <th className={thClasses} rowSpan={2}>
                    Updated On
                </th>
                <th className={thClasses} rowSpan={2}>
                    Opportunity Review
                </th>
                <th className={thClasses} rowSpan={2}>
                    Charter
                </th>
                <th className={thClasses} rowSpan={2}>
                    Project Plan
                </th>
                <th className={thClasses} rowSpan={2}>
                    Tailoring
                </th>
                <th className={thClasses} colSpan={2}>
                    Accountability
                </th>
                <th className={thClasses} colSpan={2}>
                    Business Plan
                </th>
                <th className={thClasses} colSpan={2}>
                    Launch Plan
                </th>
                <th className={thClasses} rowSpan={2}>
                    Lessons Learned
                </th>
                <th className={thClasses} rowSpan={2}>
                    Risks
                </th>
                <th className={thCommentClasses} rowSpan={2}>
                    <div>
                        <div className={style.inline_block}>
                            {
                                isEditButton &&
                                <Button
                                    minimal
                                    icon={"edit"}
                                    intent={"primary"}
                                    onClick={this.onClickCommentsEdit}
                                />
                            }
                        </div>
                        <div className={style.inline_block}>
                            Comments
                        </div>
                    </div>
                </th>
            </tr>
            <tr>
                <th className={thClasses}>Program Mgr</th>
                <th className={thClasses}>Core team members</th>
                <th className={thClasses}>Plan</th>
                <th className={thClasses}>Sales Buy-in</th>
                <th className={thClasses}>Plan</th>
                <th className={thClasses}>Sales Buy-in</th>
            </tr>
            </thead>
        );
    };

    shouldShowEditButton() {
        return !this.state.isPmRow && !this.state.isPmoRow && !this.state.isSalesRow && !this.state.isCommentsEdit;
    }

    isInEditMode = () => {
        return (this.state.isPmRow || this.state.isPmoRow || this.state.isSalesRow || this.state.isCommentsEdit)
    };

    handleSubmitWithErrors = (formikProps) => {
        if (!formikProps.isValid) {
            this.props.pushWarningToast(Messages.FORM_SUBMIT_ERROR);
        }
    }
}

BlcDashboard.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    saveIndicators: PropTypes.func,
    saveComments: PropTypes.func,
    blcTab: BlcTab.isRequired,
    pushWarningToast: PropTypes.func
};
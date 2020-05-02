import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../controls/edit-save-controls/edit-save-controls";
import styles from "./requirements.module.css";
import classNames from "classnames";
import FieldName from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import PropTypes from 'prop-types';
import {dateFormatToString} from "../../util/transform-funcs";
import {Formik} from "formik";
import FormikInput from "../controls/util-renderers";
import {FieldsToRenderShape, RequirementsShape} from "../../util/custom-types";
import {formikFieldHandleChange} from "../../util/util";
import getValidationSchema from "./validation-schema";

export default class Requirements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    onClickEdit = () => {
        this.setState(
            (prevState) => ({editMode: !prevState.editMode})
        )
    };

    bindFormSubmission = (formikSubmitForm) => {
        this.onSubmit = formikSubmitForm;
    };

    onSubmit = null;
    updateFieldHandler = null;

    render() {
        const {requirements} = this.props;
        const {rqsSubmit} = this.props;
        return (
            <Formik
                onSubmit={(values, formikActions) => {
                    formikActions.setSubmitting(false);
                    rqsSubmit(values);
                }}
                initialValues={
                    requirements
                }
                validationSchema={
                    getValidationSchema()
                }
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
                        this.updateFieldHandler = formikFieldHandleChange(formikProps);
                        return this.renderRqsTable(formikProps.values);
                    }
                }
            />
        )
    }

    renderRqsTable = (values) => {
        let valueColumnClasses = classNames(styles.value_col, styles.column_align_center);
        const {rqsReload, fieldsToRender} = this.props;
        return (
            <HTMLTable
                className={styles.req_table}
                striped={true}
            >
                <colgroup>
                    <col className={styles.title_col}/>
                    <col className={valueColumnClasses}/>
                </colgroup>
                <thead>
                <tr>
                    <th className={styles.table_header} colSpan={2}>
                        <EditSaveControls smallSize
                                          onClick={this.onClickEdit}
                                          editMode={this.state.editMode}
                                          onSubmit={this.onSubmit}
                                          onCancel={rqsReload}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(fieldsToRender).map((field) => {
                        const label = fieldsToRender[field].label;
                        return (
                            <tr key={field}>
                                <td><FieldName name={label}/></td>
                                <td>{this.renderValueField(field, values)}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </HTMLTable>
        )
    };

    renderValueField = (propName, values) => {
        const {dr1Actual} = this.props.requirements;
        const dr1 = (dr1Actual === null || dr1Actual === "") ? "" : new Date(dr1Actual);
        const {sum} = this.props.requirements;
        const value = values[propName];
        switch (propName) {
            case "dr1Actual":
                return <FieldValue value={dateFormatToString(dr1)} className={styles.column_align_center}/>;
            case "sum":
                return <FieldValue value={sum} className={styles.column_align_center}/>;
            default: {
                if (this.state.editMode) {
                    return <FormikInput type="numeric" name={propName}
                                        onValueChange={this.updateFieldHandler(propName)}/>;
                } else {
                    return <FieldValue value={value} className={styles.column_align_center}/>
                }
            }
        }
    };

}

Requirements.propTypes = {
    requirements: RequirementsShape.isRequired,
    fieldsToRender: FieldsToRenderShape.isRequired,
    rqsSubmit: PropTypes.func,
    rqsReload: PropTypes.func
};

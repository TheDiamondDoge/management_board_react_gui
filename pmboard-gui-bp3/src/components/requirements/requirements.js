import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import styles from "./requirements.module.css";
import classNames from "classnames";
import {FieldName} from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import PropTypes from 'prop-types';
import {dateFormatToString} from "../../util/transformFuncs";
import {digitsOnly} from "../../util/filters";
import {Field, Formik} from "formik";
import FormikCustomField from "../formik-custom-field/formik-custom-field";

//TODO THink how to re-write it
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

    bindFormSubmittion = (formikSubmitForm) => {
        this.onSubmit = formikSubmitForm;
    };

    onSubmit = null;

    render() {
        console.log("RENDER REQUIEREDGHKASBDVASDHPOASDHJUO:IASHDASOLDHDHSHASDhs", this.props);
        const { addedAfterDr1, committedAtDr1, dr1Actual, modifiedAfterDr1, removedAfterDr1, sum } = this.props.requirements;
        const { rqsSubmit } = this.props;
        return (
           <Formik
               onSubmit={(values, formikActions) => {
                   formikActions.setSubmitting(false);
                   rqsSubmit(values);
                   this.onClickEdit();
               }}
               initialValues={{
                   committedAtDr1,
                   addedAfterDr1,
                   removedAfterDr1,
                   modifiedAfterDr1
               }}
               render={
                   (formikProps) => {
                       this.bindFormSubmittion(formikProps.submitForm);
                       return this.renderRqsTable(addedAfterDr1, committedAtDr1, dr1Actual, modifiedAfterDr1, removedAfterDr1, sum);
                   }
               }
           />
        )
    }

    renderRqsTable = (addedAfterDr1, committedAtDr1, dr1Actual, modifiedAfterDr1, removedAfterDr1, sum) => {
        let valueColumnClasses = classNames(styles.value_col, styles.column_align_center);
        return (
            <>
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
                            <EditSaveControls onClick={this.onClickEdit}
                                              editMode={this.state.editMode}
                                              onSubmit={this.onSubmit}
                                              onCancel={this.onClickEdit}
                                              smallSize={true}
                            />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><FieldName name={"DR1 date (actual)"}/></td>
                        <td><FieldValue value={dateFormatToString(new Date(dr1Actual))}/></td>
                    </tr>
                    <tr>
                        <td><FieldName name={"# Requirements committed (baseline) at DR1"}/></td>
                        <td>{this.renderInput("committedAtDr1", committedAtDr1, this.state.editMode)}</td>
                    </tr>
                    <tr>
                        <td><FieldName name={"Current # of requirements added after DR1"}/></td>
                        <td>{this.renderInput("addedAfterDr1", addedAfterDr1, this.state.editMode)}</td>
                    </tr>
                    <tr>
                        <td><FieldName name={"Current # of baselined requirements removed after DR1"}/></td>
                        <td>{this.renderInput("removedAfterDr1", removedAfterDr1, this.state.editMode)}</td>
                    </tr>
                    <tr>
                        <td><FieldName name={"Current # of baselined requirements modified after DR1"}/></td>
                        <td>{this.renderInput("modifiedAfterDr1", modifiedAfterDr1, this.state.editMode)}</td>
                    </tr>
                    <tr>
                        <td><FieldName name={"Current # of scoped requirements"}/></td>
                        <td><FieldValue value={sum}/></td>
                    </tr>
                    </tbody>
                </HTMLTable>
            </>
        )
    };

    renderInput = (name, value, isEditMode) => {
        if (isEditMode) {
            return <Field name={name} component={FormikCustomField} />
        } else {
            return <FieldValue value={value} />
        }
    }
}

Requirements.propTypes = {
    requirements: PropTypes.object.isRequired,
    rqsSubmit: PropTypes.func,
};

import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../edit-save-contols/edit-save-controls";
import styles from "./requirements.module.css";
import classNames from "classnames";
import {FieldName} from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import PropTypes from 'prop-types';
import {dateFormatToString} from "../../util/transformFuncs";
import {Formik} from "formik";
import {renderInput} from "../../util/util-renders";
import {FieldsToRenderShape, RequirementsShape} from "../../util/custom-types";

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

    render() {
        const {addedAfterDr1, committedAtDr1, modifiedAfterDr1, removedAfterDr1} = this.props.requirements;
        const {rqsSubmit} = this.props;
        return (
            <Formik
                onSubmit={(values, formikActions) => {
                    formikActions.setSubmitting(false);
                    rqsSubmit(values);
                }}
                initialValues={{
                    committedAtDr1,
                    addedAfterDr1,
                    removedAfterDr1,
                    modifiedAfterDr1
                }}
                render={
                    (formikProps) => {
                        this.bindFormSubmission(formikProps.submitForm);
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
                        <EditSaveControls onClick={this.onClickEdit}
                                          editMode={this.state.editMode}
                                          onSubmit={this.onSubmit}
                                          onCancel={rqsReload}
                                          smallSize={true}
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
                return <FieldValue value={dateFormatToString(dr1)}/>;
            case "sum":
                return <FieldValue value={sum}/>;
            default:
                return renderInput(propName, value, this.state.editMode, "numeric");
        }
    };

}

Requirements.propTypes = {
    requirements: RequirementsShape.isRequired,
    fieldsToRender: FieldsToRenderShape.isRequired,
    rqsSubmit: PropTypes.func,
    rqsReload: PropTypes.func
};

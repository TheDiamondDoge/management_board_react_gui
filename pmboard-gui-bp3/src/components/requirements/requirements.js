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
import fields from "./fields";
import {renderInput} from "../../util/util-renders";

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
                        this.bindFormSubmission(formikProps.submitForm);
                        return this.renderRqsTable();
                    }
                }
            />
        )
    }

    renderRqsTable = () => {
        let valueColumnClasses = classNames(styles.value_col, styles.column_align_center);
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
                                          onCancel={this.onClickEdit}
                                          smallSize={true}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(fields).map((field) => (
                        <tr key={field}>
                            <td><FieldName name={fields[field].label}/></td>
                            <td>{this.renderValueField(field)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </HTMLTable>
        )
    };

    renderValueField = (propName) => {
        switch (propName) {
            case "dr1Actual":
                return <FieldValue value={dateFormatToString(new Date(this.props.requirements.dr1Actual))}/>;
            case "sum":
                return <FieldValue value={this.props.requirements.sum}/>;
            default:
                return renderInput(propName, this.props.requirements[propName], this.state.editMode);
        }
    };

}

Requirements.propTypes = {
    requirements: PropTypes.object.isRequired,
    rqsSubmit: PropTypes.func,
};

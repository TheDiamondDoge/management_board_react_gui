import React from "react";
import EditSaveControls from "../../../controls/edit-save-controls";
import FormikInput from "../../../controls/util-renderers";
import styles from "../report-tab.module.css";
import {Formik} from "formik";
import {getQuillModuleToolbar} from "../../../../util/util";

export default class ReportQuillsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            default: {
                value: "<p>Empty</p>",
                modules: {
                    toolbar: getQuillModuleToolbar(),
                }
            }
        };
    }

    submitForm = null;

    render() {
        const {data, onCancel, onSubmit} = this.props;
        const formikNames = ["summary", "red", "orange", "green", "details"];
        return (
            <>
                <EditSaveControls
                    onClick={this.toggleEditMode}
                    editMode={this.state.editMode}
                    onCancel={() => {
                        onCancel();
                        this.toggleEditMode();
                    }}
                    onSubmit={this.submitForm}
                />
                <Formik
                    enableReinitialize
                    onSubmit={(values, formikActions) => {
                        formikActions.setSubmitting(false);
                        onSubmit(values);
                    }}
                    initialValues={data}
                    render={(formikProps) => {
                        this.submitForm = formikProps.submitForm;
                        const modules = this.getModules(this.state.editMode);
                        const readOnly = !this.state.editMode;
                        const headers = this.getHeaders();
                        return (
                            <>
                                {headers.map((elem, i) => (
                                    <React.Fragment key={formikNames[i]}>
                                        <div>{headers[i]}</div>
                                        <FormikInput
                                            type="quill"
                                            name={formikNames[i]}
                                            readOnly={readOnly}
                                            modules={modules}
                                        />
                                        <br/>
                                    </React.Fragment>
                                ))}
                            </>
                        )
                    }}
                />
            </>
        );
    }

    toggleEditMode = () => {
        this.setState(
            (prev) => ({
                editMode: !prev.editMode
            })
        )
    }

    getHeaders() {
        return [
            <h3>Executive Status Summary</h3>,
            <h3 className={styles.red}>Red Flag (executive action needed)</h3>,
            <h3 className={styles.orange}>Orange Flag (core team action needed)</h3>,
            <h3 className={styles.green}>Green Flag</h3>,
            <h3>Current Project Details</h3>
        ];
    }


    getModules(editMode) {
        if (!editMode) {
            let modules = {...this.state.default.modules};
            modules.toolbar = null;
            return modules;
        } else {
            return this.state.default.modules;
        }
    }
}
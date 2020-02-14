import React from 'react';
import PropTypes from 'prop-types';
import styles from './custom-quill.module.css';
import EditSaveControls from "../controls/edit-save-controls";
import {Formik} from "formik";

import 'react-quill/dist/quill.snow.css';
import FormikInput from "../controls/util-renderers";


export default class CustomQuill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            default: {
                value: "<p>(Empty)</p>",
                modules: {
                    toolbar: this.toolbarOptions,
                }
            }
        };

        this.onEditChange = this.onEditChange.bind(this);
    }

    submitForm = null;

    render() {
        const {header, onSubmit, loading, ...otherProps} = this.props;
        const value = this.props.value || this.state.default.value;
        const {editMode} = this.state;
        const readOnly = !editMode;
        let modules = this.getModules(editMode);
        return (
            <Formik
                enableReinitialize
                onSubmit={(values, formikActions) => {
                    formikActions.setSubmitting(false);
                    onSubmit(values);
                }}
                initialValues={{text: value || "AAA"}}
                render={(formikProps) => {
                    this.submitForm = formikProps.submitForm;
                    return (
                        <>
                            <div>
                                <div className={styles.inline_block}>
                                    {header}
                                </div>
                                <EditSaveControls smallSize
                                                  className={styles.inline_block}
                                                  onClick={this.onEditChange}
                                                  onCancel={this.onEditChange}
                                                  onSubmit={() => this.submitForm()}
                                                  editMode={editMode}
                                                  loading={loading}
                                />
                            </div>
                            <FormikInput
                                {...otherProps}
                                type={"quill"}
                                name={"text"}
                                readOnly={readOnly}
                                modules={modules}
                            />
                        </>
                    )
                }}
            />
        );
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

    onEditChange() {
        this.setState((prev => ({
            editMode: !prev.editMode
        })))
    }

    toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{'color': []}, {'background': []}],              // dropdown with defaults from theme
        [{'size': ['small', false, 'large', 'huge']}],    // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['blockquote', 'code-block'],
        [{'header': 1}, {'header': 2}],                   // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],         // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],             // outdent/indent
        [{'direction': 'rtl'}],                           // text direction
        [{'font': []}],
        [{'align': []}],
        ['link'],
        ['clean']                                         // remove formatting button
    ];
}

CustomQuill.propTypes = {
    header: PropTypes.node,
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool
};
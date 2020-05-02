import React from 'react';
import PropTypes from 'prop-types';
import styles from './custom-quill.module.css';
import EditSaveControls from "../controls/edit-save-controls/edit-save-controls";
import {Formik} from "formik";
import FormikInput from "../controls/util-renderers";

import 'react-quill/dist/quill.snow.css';
import {getQuillModuleToolbar} from "../../util/util";


export default class CustomQuill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            default: {
                value: "<p>(Empty)</p>",
                modules: {
                    toolbar: getQuillModuleToolbar(),
                }
            }
        };

        this.onEditChange = this.onEditChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
                    onSubmit(values.text);
                    this.onEditChange();
                }}
                initialValues={{text: value}}
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
                                                  onCancel={this.handleCancel}
                                                  onSubmit={this.submitForm}
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

    handleCancel() {
        this.onEditChange();
        this.props.onCancel();
    }

    onEditChange() {
        this.setState((prev => ({
            editMode: !prev.editMode
        })))
    }
}

CustomQuill.propTypes = {
    header: PropTypes.node,
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    loading: PropTypes.bool
};
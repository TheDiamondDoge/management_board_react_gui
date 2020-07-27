import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './custom-quill.module.scss';
import EditSaveControls from "../controls/edit-save-controls/edit-save-controls";
import {Formik} from "formik";
import FormikInput from "../controls/util-renderers";
import {getQuillModuleToolbar} from "../../util/util";
import classNames from "classnames";

import 'react-quill/dist/quill.snow.css';

export default function CustomQuill(props) {
    const {header, onSubmit, loading, ...otherProps} = props;
    const [editMode, setEditMode] = useState(false);
    const [defaultValue] = useState("<p>(Empty)</p>");
    const [toolbar] = useState(() => getQuillModuleToolbar());

    const value = props.value || defaultValue;
    const readOnly = !editMode;
    let modules = getModules(readOnly);
    const quillClasses = classNames({[styles.display_mode]: !editMode});
    return (
        <Formik
            enableReinitialize
            onSubmit={(values, formikActions) => {
                formikActions.setSubmitting(false);
                onSubmit(values.text);
                onEditChange();
            }}
            initialValues={{text: value}}
            render={(formikProps) => {
                return (
                    <>
                        <div>
                            <div className={styles.inline_block}>
                                {header}
                            </div>
                            <EditSaveControls
                                smallSize
                                className={styles.inline_block}
                                onClick={onEditChange}
                                onCancel={handleCancel}
                                onSubmit={formikProps.submitForm}
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
                            className={quillClasses}
                        />
                    </>
                )
            }}
        />
    );

    function getModules(isReadOnly) {
        if (isReadOnly) {
            return {toolbar: null};
        } else {
            return {toolbar};
        }
    }

    function handleCancel() {
        onEditChange();
        props.onCancel();
    }

    function onEditChange() {
        setEditMode(prev => !prev);
    }
}

CustomQuill.propTypes = {
    header: PropTypes.node,
    value: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    loading: PropTypes.bool
};

CustomQuill.defaultProps = {
    header: '',
    value: '',
    onSubmit: () => {
    },
    onCancel: () => {
    },
    loading: false,
};
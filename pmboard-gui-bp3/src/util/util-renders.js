import {Field} from "formik";
import FormikCustomField from "../components/formik-custom-field/formik-custom-field";
import FieldValue from "../components/field-value/field-value";
import React from "react";

export const renderInput = (name, value, isEditMode, type) => {
    if (isEditMode) {
        return <Field type={type} name={name} component={FormikCustomField}/>
    } else {
        return <FieldValue value={value}/>
    }
};

export const renderComment = (name, value, isEditMode) => {
    if (isEditMode) {
        return <Field type="area" name={name} component={FormikCustomField}/>
    } else {
        return <FieldValue value={value}/>
    }
};
import {Field} from "formik";
import FormikCustomField from "../components/formik-custom-field/formik-custom-field";
import FieldValue from "../components/field-value/field-value";
import React from "react";
import {Button, Intent} from "@blueprintjs/core";

export default function FormikInput(props) {
    return <Field {...props} component={FormikCustomField} />;
};

//TODO: get rid of renderInput/Comment
//TODO: renderControls -> should be component
export const renderInput = (name, value, isEditMode, type, onChange) => {
    if (isEditMode) {
        if (onChange) {
            return <Field type={type} name={name} onChange={onChange} component={FormikCustomField}/>
        } else {
            return <Field type={type} name={name} component={FormikCustomField}/>
        }
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

export const renderControls = (type, onClick, isControlled) => {
    const args = getControlProps(type);
    return (
        isControlled
            ? getMiniButton(onClick, args.icon, args.intent)
            : <>&nbsp;</>
    )
};

const getControlProps = (type) => {
    if (type === "delete") {
        return ({
            icon: "delete",
            intent: Intent.DANGER
        })
    } else {
        return ({
            icon: "add",
            intent: Intent.SUCCESS
        })
    }
};

const getMiniButton = (onClick, icon, intent) => (
    <Button
        style={{display: "inline-block", textAlign: "center"}}
        onClick={onClick}
        minimal
        icon={icon}
        intent={intent}
    />
);
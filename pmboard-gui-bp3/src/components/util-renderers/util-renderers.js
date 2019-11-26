import {FastField} from "formik";
import FormikCustomField from "../formik-custom-field/formik-custom-field";
import React from "react";
import {Button, Intent} from "@blueprintjs/core";

export default function FormikInput(props) {
    return <FastField {...props} component={FormikCustomField}/>;
};

export const RenderControls = (props) => {
    const {type, ...others} = props;
    const args = getControlProps(type);
    return (<MiniButton {...others} icon={args.icon} intent={args.intent}/>)
};

const getControlProps = (type) => {
    switch (type) {
        case "delete":
            return ({
                icon: "delete",
                intent: Intent.DANGER
            });
        case "add":
            return ({
                icon: "add",
                intent: Intent.SUCCESS
            });
        default:
            return ({
                icon: "circle",
                intent: Intent.PRIMARY
            })
    }
};

export const MiniButton = (props) => (
    <Button
        style={{display: "inline-block", textAlign: "center"}}
        minimal
        {...props}
    />
);

export const ArrayErrors = ({errors, name}) => (
    typeof errors[name] === 'string' ? <div style={{color: "red"}}>{errors[name]}</div> : null
);
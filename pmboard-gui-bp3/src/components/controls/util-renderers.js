import {Field} from "formik";
import FormikCustomField from "../formik-custom-field/formik-custom-field";
import React from "react";
import {Button, Intent} from "@blueprintjs/core";
import {getPropFromStringPath} from "../../util/util";

export default function FormikInput(props) {
    return <Field {...props} component={FormikCustomField}/>;
};

export const RenderControls = React.memo((props) => {
    const {type, ...others} = props;
    const args = getControlProps(type);
    return (
        <MiniButton
            {...others}
            {...args}
        />
    )
});

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

const MiniButton = React.memo((props) => (
    <Button
        style={{display: "inline-block", textAlign: "center"}}
        minimal
        {...props}
    />
));

export const ArrayErrors = ({errors, name}) => {
    const error = getPropFromStringPath(errors, name);
    return (
        typeof error === 'string'
            ? <div style={{color: "red"}}>{error}</div>
            : null
    );
}
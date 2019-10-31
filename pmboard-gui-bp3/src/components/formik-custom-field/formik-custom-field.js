import React from 'react';
import PropTypes from 'prop-types';
import {TextArea, InputGroup} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import {dateFormatToString, stringToDateFormat} from "../../util/transformFuncs";
import {digitsOnly} from "../../util/filters";
import {Field} from "formik";

//TODO rename to smthing like "FormikCustomField" (for formik forms only)
export default class FormikCustomField extends React.Component {
    render() {
        if (!(this.props === undefined)) {
            const {field, form: {touched, errors}, type, ...props} = this.props;
            return (
                <div>
                    {this.fieldFactory(type, field, props)}
                    {touched[field.name] &&
                    errors[field.name] && <div className="error">{errors[field.name]}</div>}
                </div>
            );
        } else {
            return (
                <div>
                    {this.fieldFactory("text", null, null)}
                </div>
            )
        }
    }

    fieldFactory = (type, field, props) => {
        type = type || "";
        switch (type.toLowerCase()) {
            case "area":
                return (<TextArea fill={true} {...field} {...props} />);
            case "date":
                return (
                    <DateInput {...field} {...props}
                               formatDate={
                                   date => {
                                       return dateFormatToString(date)
                                   }
                               }
                               parseDate={
                                   str => {
                                       return stringToDateFormat(str.toString())
                                   }
                               }
                               onChange={(e) => {
                                   //Think about it (digitsOnly)
                                   this.props.form.setFieldValue(field.name, e)
                               }}
                    />
                );
            case "numeric":
                return (<InputGroup {...field} {...props} onChange={(e) => digitsOnly(e, this.props.form.setFieldValue, field.name)} />);
            case "text":
            default:
                return (<InputGroup {...field} {...props} />);
        }
    }
}

FormikCustomField
    .propTypes = {};
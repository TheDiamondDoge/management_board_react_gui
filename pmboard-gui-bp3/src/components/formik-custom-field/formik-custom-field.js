import React from 'react';
import {TextArea, InputGroup, Checkbox} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import {dateFormatToString, stringToDateFormat} from "../../util/transformFuncs";
import {digitsOnly} from "../../util/filters";

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
                const date = this.transformDateForInput(field.value);
                return (
                    <DateInput {...field} {...props} value={date}
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
                               maxDate={new Date("2040-01-01")}
                               minDate={new Date("2000-01-01")}


                    />
                );
            case "numeric":
                return (<InputGroup {...field} {...props} onChange={(e) => digitsOnly(e, this.props.form.setFieldValue, field.name)} />);
            case "checkbox":
                return (<Checkbox {...field} {...props} defaultChecked={field.value} />);
            case "text":
            default:
                return (<InputGroup {...field} {...props} />);
        }
    };

    transformDateForInput = (str) => {
        if (!str) return null;
        try {
            return new Date(str);
        } catch (e) {
            return null;
        }
    }

}

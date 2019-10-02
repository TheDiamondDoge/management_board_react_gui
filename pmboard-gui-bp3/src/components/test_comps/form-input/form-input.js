import React from 'react';
import PropTypes from 'prop-types';
import {TextArea, InputGroup} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import {dateFormatToString, dateToDashedString, stringToDateFormat} from "../../../util/transformFuncs";

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            defaultValue: ""
        }
    }

    render() {
        const {field, form: {touched, errors}, type, ...props} = this.props;
        console.log("CHANGE", this.props);
        console.log(this.props);
        return (
            <div>
                {this.fieldFactory(type, field, props)}
                {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
            </div>
        );
    }

    fieldFactory = (type, field, props) => {
        switch (type.toLowerCase()) {
            case "area":
                return (<TextArea {...field} {...props} />);
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
                               onChange={(e) => {this.props.form.setFieldValue(field.name, e)}}
                    />
                );
            case "text":
            default:
                return (<InputGroup {...field} {...props} />);
        }
    }
}

FormInput.propTypes = {};
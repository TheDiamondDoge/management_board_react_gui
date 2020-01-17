import React from 'react';
import {TextArea, InputGroup, Checkbox, NumericInput} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import {dateFormatToString, stringToDateFormat, transformDateForInput} from "../../util/transform-funcs";
import {getPropFromStringPath} from "../../util/util";
import styles from "./formik-custom-field.module.css";
import {FastField} from "formik";
import PropTypes from "prop-types";
import FormikSelectList from "../formik-select-list";

export default class FormikCustomField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateRange: {
                min: new Date("1900-01-01"),
                max: new Date("2040-01-01")
            }
        }
    }

    render() {
        if (!(this.props === undefined)) {
            const {field, form: {touched, errors}, type, values, ...props} = this.props;
            const touchedValue = getPropFromStringPath(touched, field.name);
            const errorsValue = getPropFromStringPath(errors, field.name);

            return (
                <div>
                    {this.fieldFactory(type, field, props, values)}
                    {touchedValue &&
                    errorsValue && <div className={styles.error}>{errorsValue}</div>}
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

    fieldFactory = (type, field, props, values = []) => {
        type = type || "";
        switch (type.toLowerCase()) {
            case "textarea":
                return (<TextArea fill={true} {...field} {...props} />);
            case "date":
                const date = transformDateForInput(field.value);
                const {min, max} = this.state.dateRange;
                return (
                    <DateInput formatDate={date => dateFormatToString(date)}
                               parseDate={str => stringToDateFormat(str.toString())}
                               maxDate={max}
                               minDate={min}
                               {...field} {...props}
                               value={date}
                    />
                );
            case "numeric":
                return (
                    //onValueChange handler should be passed instead of onChange
                    <NumericInput allowNumericCharactersOnly={true}
                                  buttonPosition="none"
                                  fill={true}
                                  {...field} {...props}

                    />
                );
            case "checkbox":
                return (<Checkbox defaultChecked={field.value} {...field} {...props} />);
            case "select":
                return (
                    <FastField component="select" {...field} {...props}>
                        {values.map((obj) => (
                            <option value={obj.value}>{obj.label}</option>
                        ))}
                    </FastField>
                );
            case "multiselect":
                return (
                    <FormikSelectList {...props} {...field}/>
                );
            case "text":
            default:
                return (<InputGroup {...field} {...props} />);
        }
    };
}

FormikCustomField.propTypes = {
    values: PropTypes.shape({
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]).isRequired,
        label: PropTypes.string.isRequired
    }),
    type: PropTypes.string
};
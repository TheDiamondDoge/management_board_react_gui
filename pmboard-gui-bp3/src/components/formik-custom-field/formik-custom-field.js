import React from 'react';
import {TextArea, InputGroup, Checkbox, NumericInput} from "@blueprintjs/core";
import {DateInput} from "@blueprintjs/datetime";
import {dateFormatToString, stringToDateFormat} from "../../util/transformFuncs";

export default class FormikCustomField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateRange: {
                min: new Date("2000-01-01"),
                max: new Date("2040-01-01")
            }
        }
    }

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
                    <NumericInput allowNumericCharactersOnly={true}
                                  buttonPosition="none"
                                  fill={true}
                                  {...field} {...props}
                    />
                );
            case "checkbox":
                return (<Checkbox defaultChecked={field.value} {...field} {...props} />);
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

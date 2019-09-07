import React from 'react';
import {Checkbox, HTMLTable, NumericInput} from "@blueprintjs/core";
import {FieldName} from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import {DateInput} from "@blueprintjs/datetime";
import styles from './milestone-table.module.css';
import PropTypes from "prop-types";
import {dateFormatToString, dateToDashedString, stringToDateFormat} from "../../util/transformFuncs";

export default class MilestoneTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date("2019-10-15")
        };
    }
    render() {
        const {editMode, milestonesData} = this.props;
        return (
            <div>
                <HTMLTable striped={true}>
                    <thead>
                    <tr>
                        <th>
                            <FieldName name={"Project Milestone Label"}/>
                        </th>
                        <th>
                            <FieldName name={"Actual/Forecast Date"}/>
                        </th>
                        <th>
                            <FieldName name={"Baseline Date"}/>
                        </th>
                        <th>
                            <FieldName name={"Milestone Completion (%)"}/>
                        </th>
                        <th className={styles.column_align_center}>
                            <FieldName name={"Shown in Timeline"}/>
                        </th>
                        <th>
                            <FieldName name={"Milestone meeting minutes"}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.renderValues(milestonesData, editMode)
                    }
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    renderValues = (milestoneData, editMode) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA",milestoneData);
        if (editMode) {
            let {onChange} = this.props;
            return milestoneData.map((milestone, key) => (
                <tr key={key}>
                    <td>
                        <FieldValue value={milestone.label}/>
                    </td>
                    <td>
                        <DateInput
                            formatDate={
                                date => {
                                    console.log("FORMATDATE", typeof date, date)
                                    return dateFormatToString(date)
                                }
                            }
                            parseDate={
                                str => {
                                    console.log("PARSEDATE", typeof str, str);
                                    return stringToDateFormat(str.toString())
                                }
                            }
                            onChange={
                                date => {
                                    console.log("DATE", date);
                                    return onChange("actualDate", dateToDashedString(date), key)
                                }
                            }
                            value={new Date(milestone.actualDate)}
                        />
                    </td>
                    <td>
                        <DateInput
                            formatDate={date => dateFormatToString(date)}
                            parseDate={str => stringToDateFormat(str.toString())}
                            onChange={date => onChange("baselineDate", dateToDashedString(date), key)}
                            value={new Date(milestone.baselineDate)}
                        />
                    </td>
                    <td>
                        <NumericInput
                            allowNumericCharactersOnly={true}
                            min={0}
                            max={100}
                            minorStepSize={1}
                            value={milestone.completion}
                            buttonPosition="none"
                            onValueChange={value => onChange("completion", value, key)}
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        <Checkbox
                            defaultChecked={milestone.shown}
                            onChange={event => onChange("shown", event.target.checked, key)}
                        />
                    </td>
                    <td>
                        <FieldValue
                            editMode={editMode}
                            value={this.ifEmpty(milestone.meetingMinutes)}
                            onChange={value => onChange("meetingMinutes", value, key)}
                        />
                    </td>
                </tr>
            ))
        } else {
            return milestoneData.map((milestone, key) => (
                <tr key={key}>
                    <td>{this.ifEmpty(milestone.label)}</td>
                    <td>{this.ifEmpty(milestone.actualDate)}</td>
                    <td>{this.ifEmpty(milestone.baselineDate)}</td>
                    <td>{this.ifEmpty(milestone.completion)}</td>
                    <td>{this.ifEmpty(milestone.shown)}</td>
                    <td><FieldValue value={this.ifEmpty(milestone.meetingMinutes)}/></td>
                </tr>
            ))
        }
    };

    ifEmpty = (objProp) => (
        objProp ? objProp : "-"
    );
}

MilestoneTable.propTypes = {
    editMode: PropTypes.bool,
    milestonesData: PropTypes.array,
    onChange: PropTypes.func,
};
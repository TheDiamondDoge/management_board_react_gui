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
                <HTMLTable striped={true} className={styles.table}>
                    <thead>
                    <tr>
                        <th className={styles.label}>
                            <FieldName name={"Project Milestone Label"}/>
                        </th>
                        <th className={styles.actual}>
                            <FieldName name={"Actual/Forecast Date"}/>
                        </th>
                        <th className={styles.baseline}>
                            <FieldName name={"Baseline Date"}/>
                        </th>
                        <th className={styles.completion}>
                            <FieldName name={"Milestone Completion (%)"}/>
                        </th>
                        {/*<th className={styles.column_align_center}>*/}
                        <th className={styles.timeline}>
                            <FieldName name={"Shown in Timeline"}/>
                        </th>
                        <th className={styles.minutes}>
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
        if (editMode) {
            let {onChange} = this.props;
            return milestoneData.map((milestone, key) => (
                <tr key={key}>
                    <td className={styles.label}>
                        <FieldValue value={milestone.label}/>
                    </td>
                    <td className={styles.actual}>
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
                    <td className={styles.baseline}>
                        <DateInput
                            formatDate={date => dateFormatToString(date)}
                            parseDate={str => stringToDateFormat(str.toString())}
                            onChange={date => onChange("baselineDate", dateToDashedString(date), key)}
                            value={new Date(milestone.baselineDate)}
                        />
                    </td>
                    <td className={styles.completion}>
                        <NumericInput
                            style={{width: "50px", display: "inline-block"}}
                            allowNumericCharactersOnly={true}
                            min={0}
                            max={100}
                            minorStepSize={1}
                            value={milestone.completion}
                            buttonPosition="none"
                            onValueChange={value => onChange("completion", value, key)}
                        />
                    </td>
                    <td className={styles.timeline}>
                        <Checkbox
                            defaultChecked={milestone.shown}
                            onChange={event => onChange("shown", event.target.checked, key)}
                        />
                    </td>
                    <td className={styles.minutes}>
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
                    <td className={styles.label}>{this.ifEmpty(milestone.label)}</td>
                    <td className={styles.actual}>{dateFormatToString(milestone.actualDate ? new Date(milestone.actualDate) : "")}</td>
                    <td className={styles.baseline}>{dateFormatToString(milestone.baselineDate ? new Date(milestone.baselineDate) : "")}</td>
                    <td className={styles.completion}>{this.ifEmpty(milestone.completion)}</td>
                    <td className={styles.timeline}>{this.ifChecked(milestone.shown)}</td>
                    <td className={styles.minutes}><FieldValue value={this.ifEmpty(milestone.meetingMinutes)}/></td>
                </tr>
            ))
        }
    };

    ifEmpty = (objProp) => (
        objProp ? objProp : "-"
    );

    ifChecked = (checked) => (
        checked ? "Yes" : "No"
    );
}

MilestoneTable.propTypes = {
    editMode: PropTypes.bool,
    milestonesData: PropTypes.array,
    onChange: PropTypes.func,
};
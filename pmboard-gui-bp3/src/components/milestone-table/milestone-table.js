import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import {FieldName} from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import styles from './milestone-table.module.css';
import PropTypes from "prop-types";
import {FieldArray} from "formik";
import FormikInput from "../../util/util-renders";

export default class MilestoneTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date("2019-10-15")
        };
    }
    render() {
        const {editMode, milestonesData, onDateChangeFactory} = this.props;
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
                        <th className={styles.timeline}>
                            <FieldName name={"Shown in Timeline"}/>
                        </th>
                        <th className={styles.minutes}>
                            <FieldName name={"Milestone meeting minutes"}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <FieldArray
                        name="milestones"
                        render={(arrayHelpers) => {
                            return milestonesData.map((milestone, key) => {
                                const shownString = this.isChecked(milestone.shown);
                                return(
                                <tr key={key}>
                                    <td className={styles.label}>
                                        <FieldValue value={milestone.label}/>
                                    </td>
                                    <td className={styles.actual}>
                                        {
                                            editMode
                                                ? <FormikInput
                                                    type="date"
                                                    name={`milestones[${key}].actualDate`}
                                                    onChange={onDateChangeFactory(`milestones[${key}].actualDate`)}
                                                />
                                                : <FieldValue value={milestone.actualDate} />
                                        }
                                    </td>
                                    <td className={styles.baseline}>
                                        {
                                            editMode
                                                ? <FormikInput
                                                    type="date"
                                                    name={`milestones[${key}].baselineDate`}
                                                    onChange={onDateChangeFactory(`milestones[${key}].baselineDate`)}
                                                />
                                                : <FieldValue value={milestone.baselineDate} />
                                        }
                                    </td>
                                    <td className={styles.completion}>
                                        {
                                            editMode
                                                ? <FormikInput
                                                    type="numeric"
                                                    name={`milestones[${key}].completion`}
                                                />
                                                : <FieldValue value={milestone.completion} />
                                        }

                                        {/*TODO: Instead of input with 'digitsOnly'????*/}
                                        {/*<NumericInput*/}
                                        {/*    style={{width: "50px", display: "inline-block"}}*/}
                                        {/*    allowNumericCharactersOnly={true}*/}
                                        {/*    min={0}*/}
                                        {/*    max={100}*/}
                                        {/*    minorStepSize={1}*/}
                                        {/*    value={milestone.completion}*/}
                                        {/*    buttonPosition="none"*/}
                                        {/*    onValueChange={value => onChange("completion", value, key)}*/}
                                        {/*/>*/}
                                    </td>
                                    <td className={styles.timeline}>
                                        {
                                            editMode
                                                ? <FormikInput
                                                    type="checkbox"
                                                    name={`milestones[${key}].shown`}
                                                    value={milestone.shown}
                                                />
                                                : <FieldValue value={shownString} />
                                        }
                                    </td>
                                    <td className={styles.minutes}>
                                        {
                                            editMode
                                                ? <FormikInput
                                                    type="text"
                                                    name={`milestones[${key}].meetingMinutes`}
                                                  />
                                                : <FieldValue value={milestone.meetingMinutes} />
                                        }
                                    </td>
                                </tr>
                            )})
                        }}
                    />
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    isChecked = (checked) => (
        checked ? "Yes" : "No"
    );
}

MilestoneTable.propTypes = {
    editMode: PropTypes.bool,
    milestonesData: PropTypes.array,
    onChange: PropTypes.func,
};
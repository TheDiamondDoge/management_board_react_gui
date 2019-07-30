import React from 'react';
import {Checkbox, HTMLTable, NumericInput} from "@blueprintjs/core";
import {FieldName} from "../fieldName/fieldName";
import {MILESTONE_DATA} from "./milestoneTableObject";
import FieldValue from "../fieldValue/fieldValue";
import {DateInput} from "@blueprintjs/datetime";
import styles from './milestoneTable.module.css';
import PropTypes from "prop-types";

export default class MilestoneTable extends React.Component {
    state = {
        date: new Date("2019-10-15")
    };

    render() {
        const {editMode} = this.props;
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
                        this.renderValues(MILESTONE_DATA, editMode)
                    }
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    renderValues = (milestoneData, editMode) => {
        if (editMode) {
            return milestoneData.map((milestone, key) => (
                <tr key={key}>
                    <td>
                        <FieldValue value={milestone.label}/>
                    </td>
                    <td>
                        <DateInput
                            formatDate={date => date.toLocaleString()}
                            parseDate={str => console.log(str)}
                            onChange={date => this.setState({date})}
                            value={this.state.date}
                        />
                    </td>
                    <td>
                        <DateInput
                            formatDate={date => date.toLocaleString()}
                            parseDate={str => console.log(str)}
                            onChange={date => this.setState({date})}
                            value={this.state.date}
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
                        />
                    </td>
                    <td className={styles.column_align_center}>
                        <Checkbox checked={true}/>
                    </td>
                    <td>
                        <FieldValue editMode={true} value={this.ifEmpty(milestone.meetingMinutes)}/>
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
                    <td>{this.ifEmpty(milestone.isShown)}</td>
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
};
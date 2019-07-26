import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import {FieldName} from "../fieldName/fieldName";
import {MILESTONE_DATA} from "./milestoneTableObject";
import FieldValue from "../fieldValue/fieldValue";
import PropTypes from "prop-types";

export default class MilestoneTable extends React.Component {
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
                        <th>
                            <FieldName name={"Shown in Timeline"}/>
                        </th>
                        <th>
                            <FieldName name={"Milestone meeting minutes"}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        MILESTONE_DATA.map((milestone, key) => (
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
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    ifEmpty = (objProp) => (
        objProp ? objProp : "-"
    );
}

MilestoneTable.propTypes = {
    editMode: PropTypes.bool,
};
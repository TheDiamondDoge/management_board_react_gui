import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import {FieldName} from "../../../../../fieldName/fieldName";

export default class Milestones extends React.Component {
    render() {
        return (
            <HTMLTable>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th colSpan={2}>COMMITTED versus ACTUAL</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <th>Milestone</th>
                        <th>Schedule Adherence</th>
                        <th>Delay (in days)</th>
                        <th>Project Duration from DR1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FieldName name={"TR"}/></td>
                        <td>100%</td>
                        <td>0</td>
                        <td>188 days</td>
                    </tr>
                    <tr>
                        <td><FieldName name={"DR4"}/></td>
                        <td>100%</td>
                        <td>0</td>
                        <td>202 days</td>
                    </tr>
                    <tr>
                        <td><FieldName name={"CI"}/></td>
                        <td>100%</td>
                        <td>0</td>
                        <td>104 days</td>
                    </tr>
                </tbody>
            </HTMLTable>
        );
    }
}
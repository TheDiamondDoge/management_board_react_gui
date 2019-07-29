import React from 'react';
import {HTMLTable} from "@blueprintjs/core";

export default class Kpi extends React.Component {
    render() {
        return (
            <HTMLTable>
                <thead>
                    <tr>
                        <td>Year (based on DR1 date)</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{textAlign: "right"}}>COMMITTED vs ACTUAL</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Schedule Adherence</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>Content Adherence</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Requirements Change</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Cost Adherence</td>
                        <td>N/A</td>
                    </tr>
                </tbody>
            </HTMLTable>
        )
    }
}
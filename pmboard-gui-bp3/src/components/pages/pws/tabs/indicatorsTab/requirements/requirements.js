import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import EditSaveControls from "../../../../../editSaveContols/editSaveControls";

export default class Requirements extends React.Component {
    render() {
        return (
            <>
                <HTMLTable>
                    <thead>
                        <tr>
                            <th colSpan={2} style={{textAlign: "right"}}><EditSaveControls /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DR1 date (actual)</td>
                            <td>05-Mar-19</td>
                        </tr>
                        <tr>
                            <td># Requirements committed (baseline) at DR1</td>
                            <td>06-Mar-19</td>
                        </tr>
                        <tr>
                            <td>Current # of requirements added after DR1 </td>
                            <td>07-Mar-19</td>
                        </tr>
                        <tr>
                            <td>Current # of baselined requirements removed after DR1 </td>
                            <td>08-Mar-19</td>
                        </tr>
                        <tr>
                            <td>Current # of baselined requirements modified after DR1 </td>
                            <td>09-Mar-19</td>
                        </tr>
                        <tr>
                            <td>Current # of scoped requirements</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </HTMLTable>
            </>
        )
    }
}
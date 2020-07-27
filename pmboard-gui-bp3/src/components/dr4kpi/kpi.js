import React from 'react';
import {HTMLTable, Position, Tooltip} from "@blueprintjs/core";
import styles from "./kpi.module.scss";
import FieldName from "../field-name/field-name";
import PropTypes from "prop-types";
import {toPercentsOrNA} from "../../util/transform-funcs";
import HelpIcon from "../help-icon/help-icon";
import FieldValue from "../field-value/field-value";
import TooltipContent from "../tooltip-content/tooltip-content";

export default function Kpi({dr4Kpi, fieldsToRender}) {
    const headerClasses = styles.header;
    const {label} = fieldsToRender.year;
    const {year} = dr4Kpi;
    return (
        <HTMLTable
            striped
            className={styles.kpi_table}
        >
            <colgroup>
                <col className={styles.name_col}/>
                <col className={styles.value_col}/>
            </colgroup>
            <thead>
            <tr>
                <td>
                    <FieldName name={label}/>
                </td>
                <td>{year}</td>
            </tr>
            <tr>
                <td className={headerClasses}/>
                <td className={headerClasses}>
                    COMMITTED vs ACTUAL
                </td>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(fieldsToRender).map((field) => {
                    const label = fieldsToRender[field].label;
                    const value = toPercentsOrNA(dr4Kpi[field]);
                    const help = fieldsToRender[field].help;
                    return (
                        <tr key={field}>
                            <td>
                                <FieldName name={label}/>
                                <Tooltip
                                    position={Position.TOP}
                                    className={styles.help}
                                    content={
                                        <TooltipContent
                                            title={help.title}
                                            content={help.content}
                                        />
                                    }
                                >
                                    <HelpIcon/>
                                </Tooltip>
                            </td>
                            <td>
                                <FieldValue
                                    value={value}
                                    className={styles.value_col}
                                />
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </HTMLTable>
    )
}

Kpi.propTypes = {
    dr4Kpi: PropTypes.object.isRequired,
    //Config object (kpi-fields.js)
    fieldsToRender: PropTypes.object.isRequired,
};
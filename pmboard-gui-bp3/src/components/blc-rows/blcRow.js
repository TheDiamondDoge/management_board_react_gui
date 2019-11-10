import React from "react";
import PropTypes from "prop-types";
import StatusIndicator from "../status-indicator/status-indicator";
import classNames from "classnames";
import style from "./blcRow.module.css";
import {Button, TextArea} from "@blueprintjs/core";
import {blcNumberToState, dateFormatToString} from "../../util/transformFuncs";

export default class BlcRow extends React.Component {
    render() {
        console.log("RENDER BLC ROW");
        const {
            roleName, lastUpdatedBy, updatedOn, rowValues, comment,
            onClickEdit, isValuesEdit, isCommentsEdit, isControlsHidden
        } = this.props;
        const tdClasses = classNames(style.column_align_center, style.word_break);
        return (
            <tr>
                <td>
                    <div>
                        <div className={style.inline_block}>
                            {
                                !isValuesEdit && !isCommentsEdit && !isControlsHidden &&
                                <Button
                                    minimal={true}
                                    icon={"edit"}
                                    intent={"primary"}
                                    onClick={onClickEdit}
                                />
                            }
                        </div>
                        <div className={style.inline_block}>
                            {roleName}
                        </div>
                    </div>
                </td>

                <td className={tdClasses}>{lastUpdatedBy}</td>

                <td className={tdClasses}>{dateFormatToString(new Date(updatedOn))}</td>

                {Object.keys(rowValues).map((key) => (
                    <td key={key} className={tdClasses}>
                        {
                            isValuesEdit
                                ? this.selectElement(rowValues[key], key)
                                : <StatusIndicator className={style.inline_block} status={blcNumberToState(rowValues[key])}/>
                        }
                    </td>
                ))}

                <td className={tdClasses}>
                    {isCommentsEdit ? <TextArea fill={true} onChange={(e) => this.props.onChange("comment", e.target.value)} defaultValue={comment}/> : comment}
                </td>
            </tr>
        )
    }

    selectElement = (num, key) => {
        num = num || "";
        return (
            <select onChange={(e) => this.props.onChange(key, e.target.value)} defaultValue={num}>
                <option value="">&nbsp;</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
            </select>
        )
    };
}

BlcRow.propTypes = {
    roleName: PropTypes.string.isRequired,
    lastUpdatedBy: PropTypes.string,
    updatedOn: PropTypes.string,
    className: PropTypes.string,
    onClickEdit: PropTypes.func,
    onChange: PropTypes.func,
    isValuesEdit: PropTypes.bool,
    isCommentsEdit: PropTypes.bool,
    isControlsHidden: PropTypes.bool,
    rowValues: PropTypes.object.isRequired,
    comment: PropTypes.string,
};
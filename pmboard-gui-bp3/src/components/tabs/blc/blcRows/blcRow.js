import React from "react";
import PropTypes from "prop-types";
import StatusIndicator from "../../../statusIndicator/statusIndicator";
import classNames from "classnames";
import style from "./blcRow.module.css";
import {Button, TextArea} from "@blueprintjs/core";
import {blcNumberToState} from "../../../../util/transformFuncs";

export default class BlcRow extends React.Component {
    render() {
        const {roleName, lastUpdatedBy, updatedOn, rowValues, onClickEdit, isValuesEdit, isCommentsEdit, isControlsHidden} = this.props;
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
                <td className={tdClasses}>{updatedOn}</td>
                {rowValues.map((val, key) => (
                    <td key={key} className={tdClasses}>
                        {
                            isValuesEdit
                                ? this.selectElement(val)
                                : <StatusIndicator className={style.inline_block} status={blcNumberToState(val)}/>
                        }
                    </td>
                ))}

                <td className={tdClasses}>
                    {isCommentsEdit ? <TextArea fill={true} defaultValue={"Hello There!"}/> : "Hello There!"}
                </td>
            </tr>
        )
    }

    selectElement = (num) => (
        <select defaultValue={num}>
            <option value="">&nbsp;</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="6">6</option>
        </select>
    );
}

BlcRow.propTypes = {
    roleName: PropTypes.string.isRequired,
    lastUpdatedBy: PropTypes.string,
    updatedOn: PropTypes.string,
    className: PropTypes.string,
    onClickEdit: PropTypes.func,
    isValuesEdit: PropTypes.bool,
    isCommentsEdit: PropTypes.bool,
    isControlsHidden: PropTypes.bool,
    rowValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};
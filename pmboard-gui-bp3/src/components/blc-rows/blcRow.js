import React from "react";
import PropTypes from "prop-types";
import StatusIndicator from "../status-indicator/status-indicator";
import classNames from "classnames";
import style from "./blcRow.module.css";
import {Button} from "@blueprintjs/core";
import {blcNumberToState, dateFormatToString} from "../../util/transform-funcs";
import {FastField} from "formik";
import FormikInput from "../util-renderers/util-renderers";

export default class BlcRow extends React.Component {
    render() {
        const {
            roleName, lastUpdatedBy, updatedOn,
            rowValues, comment,
            onClickEdit, isValuesEdit, isCommentsEdit, isControlsHidden
        } = this.props;
        const tdClasses = classNames(style.column_align_center, style.word_break);
        const commentName = `${this.props.rowName}.comment`;
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
                                : (<StatusIndicator className={style.inline_block}
                                                    status={blcNumberToState(rowValues[key])}
                                />)
                        }
                    </td>
                ))}

                <td className={tdClasses}>
                    {isCommentsEdit
                        ? (<FormikInput type="textarea"
                                        fill={true}
                                        name={commentName}
                        />)
                        : comment}
                </td>
            </tr>
        )
    }

    selectElement = (num, key) => {
        const name = `${this.props.rowName}.indicators.${key}`;
        return (
            <FastField
                component="select"
                name={name}
            >
                <option value="">&nbsp;</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="8">8</option>
            </FastField>
        )
    };
}

BlcRow.propTypes = {
    rowName: PropTypes.string.isRequired,
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
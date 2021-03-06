import React from "react";
import PropTypes from "prop-types";
import StatusIndicator from "../status-indicator/status-indicator";
import style from "./blc-row.module.scss";
import {Button} from "@blueprintjs/core";
import {blcNumberToState, getDateFromStringWithTime} from "../../util/transform-funcs";
import {FastField} from "formik";
import FormikInput from "../controls/util-renderers";
import Comment from "../comment/comment";

export default class BlcRow extends React.Component {
    render() {
        const {roleName, lastUpdatedBy, updatedOn, rowValues, comment, onClickEdit, isValuesEdit, isCommentsEdit} = this.props;
        const tdClasses = style.td_style;
        const commentName = `${this.props.rowName}.comment`;
        const updatedOnString = getDateFromStringWithTime(updatedOn);
        const isEditShown = this.shouldShowEditButton();
        return (
            <tr>
                <td className={style.sticky_white}>
                    <div>
                        <div className={style.inline_block}>
                            {
                                isEditShown &&
                                <Button
                                    minimal
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
                <td className={tdClasses}>
                    {lastUpdatedBy}
                </td>
                <td className={tdClasses}>
                    {updatedOnString}
                </td>

                {Object.keys(rowValues).map((key) => {
                    const status = blcNumberToState(rowValues[key]);
                    return (
                        <td
                            key={key}
                            className={tdClasses}
                        >
                            {
                                isValuesEdit
                                    ? this.selectElement(rowValues[key], key)
                                    : (
                                        <StatusIndicator
                                            className={style.inline_block}
                                            status={status}
                                        />
                                    )
                            }
                        </td>
                    )
                })}

                <td className={tdClasses}>
                    {isCommentsEdit
                        ? (
                            <FormikInput
                                fill
                                type="textarea"
                                name={commentName}
                            />
                        )
                        : <Comment value={comment}/>
                    }
                </td>
            </tr>
        )
    }

    shouldShowEditButton() {
        return !this.props.isValuesEdit && !this.props.isCommentsEdit && !this.props.isControlsHidden && !this.props.blocked
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
    blocked: PropTypes.bool,
};

BlcRow.defaultProps = {
    lastUpdatedBy: '',
    updatedOn: '',
    className: '',
    onClickEdit: () => {},
    onChange: () => {},
    isValuesEdit: false,
    isCommentsEdit: false,
    isControlsHidden: false,
    comment: '',
    blocked: false,
}
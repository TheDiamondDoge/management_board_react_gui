import React from "react";
import PropTypes from "prop-types";
import StatusIndicator from "../../../../../statusIndicator/statusIndicator";
import style from "./blcRow.module.css";

export default class BlcRow extends React.Component {
    render() {
        const {roleName, lastUpdatedBy, updatedOn} = this.props;
        return (
            <tr>
                <td>{roleName}</td>
                <td>{lastUpdatedBy}</td>
                <td>{updatedOn}</td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block} status={"red"}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block} status={"yellow"}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block} status={"green"}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>
                    <StatusIndicator className={style.inline_block}/>
                </td>
                <td className={style.column_align_center}>

                </td>
            </tr>
        )
    }
}

BlcRow.propTypes = {
    roleName: PropTypes.string.isRequired,
    lastUpdatedBy: PropTypes.string,
    updatedOn: PropTypes.string,
    className: PropTypes.string,
};
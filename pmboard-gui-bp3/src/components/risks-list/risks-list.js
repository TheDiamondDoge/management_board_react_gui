import React from "react";
import {RiskReportType} from "../../util/custom-types";
import PropTypes from "prop-types";

export default function RisksList(props) {
    const {data, ...others} = props;
    return (
        <ul {...others}>
            {data.map((item, i) =>
                <li key={i}>
                    <div><b>Risk:</b> {item.riskDescription}</div>
                    <div><b>Description:</b> {item.impactDescription}</div>
                    <div><b>Mitigation:</b> {item.mitigation}</div>
                </li>
            )}
        </ul>
    )
}

RisksList.propTypes = {
    data: PropTypes.arrayOf(RiskReportType).isRequired,
};
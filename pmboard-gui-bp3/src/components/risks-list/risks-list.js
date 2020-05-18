import React from "react";
import {RiskReportType} from "../../util/custom-types";
import PropTypes from "prop-types";
import styles from "./risks-list.module.css";
import Comment from "../comment/comment";

export default class RisksList extends React.PureComponent {
    render() {
        const {data, ...others} = this.props;
        return (
            <ul {...others}>
                {data.map((item, i) => {
                    const riskTitle = item.riskDescription;
                    const riskDescription = item.impactDescription;
                    const riskMitigation = item.mitigation;
                    return (
                            <li
                                key={i}
                                className={styles.li_margin}
                            >
                                <div><b>Risk:</b> {riskTitle}</div>
                                <div><b>Description:</b> <Comment value={riskDescription} /></div>
                                <div><b>Mitigation:</b> <Comment value={riskMitigation} /></div>
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }
}

RisksList.propTypes = {
    data: PropTypes.arrayOf(RiskReportType).isRequired,
};
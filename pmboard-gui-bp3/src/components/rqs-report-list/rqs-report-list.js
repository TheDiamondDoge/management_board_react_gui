import React from 'react';
import SafeUrl from "../safe-url/safe-url";
import PropTypes from "prop-types";
import styles from "./rqs-report-list.module.css";

export default class RqsReportList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            baseUrl: "https://jira.com/browse/"
        }
    }

    render() {
        const {className, data} = this.props;
        return (
            <div className={className}>
                <ul className={styles.list}>
                    {data.map(rq => {
                        const id = rq.reqId;
                        const url = this.state.baseUrl + `${id}`;
                        const headline = rq.headline;
                        const status = rq.status;
                        return (
                            <li
                                key={id}
                                className={styles.list_item}
                            >
                                <div>
                                    <SafeUrl label={id}
                                             url={url}
                                             className={styles.url}
                                    />
                                </div>
                                <div>{headline}</div>
                                <div><u>Status</u>: {status}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

RqsReportList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            reqId: PropTypes.string.isRequired,
            headline: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        })
    ),
    className: PropTypes.string
};

RqsReportList.defaultProps = {
    data: [],
    className: ''
};


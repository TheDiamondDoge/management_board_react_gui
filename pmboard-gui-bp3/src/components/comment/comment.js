import React from "react";
import styles from "./comment.module.css";
import PropTypes from "prop-types";

export default class Comment extends React.PureComponent {
    render() {
        const {value} = this.props;
        return (
            <div className={styles.container}>
                <pre className={styles.pre}>
                    {value}
                </pre>
            </div>
        )
    }
}

Comment.propTypes = {
    value: PropTypes.string,
};
import React from "react";
import styles from "./comment.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Comment extends React.PureComponent {
    render() {
        const {value, className} = this.props;
        const containerClasses = classNames(className, styles.container);
        return (
            <div className={containerClasses}>
                <pre className={styles.pre}>
                    {value}
                </pre>
            </div>
        )
    }
}

Comment.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string
};

Comment.defaultProps = {
    value: '',
    className: ''
}
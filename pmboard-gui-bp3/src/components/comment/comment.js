import React from "react";
import styles from "./comment.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Comment = ({value, className}) => {
    const containerClasses = classNames(className, styles.container);
    return (
        <div className={containerClasses}>
            <pre className={styles.pre}>
                {value}
            </pre>
        </div>
    )
}

Comment.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string
};

Comment.defaultProps = {
    value: '',
    className: ''
}

export default React.memo(Comment);
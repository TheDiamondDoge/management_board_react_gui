import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./two-items-liner.module.css";

export default function TwoItemsLiner(props) {
    const {first, second, className, ...others} = props;
    const blockStyles = classNames(styles.naming_block, className);
    return (
        <div className={blockStyles} {...others}>
            <span className={styles.name}>{first}</span>
            <span>{second}</span>
        </div>
    )
}

TwoItemsLiner.propTypes = {
    first: PropTypes.node,
    second: PropTypes.node,
    className: PropTypes.string,
};
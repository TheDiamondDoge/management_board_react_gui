import React from 'react';
import classNames from "classnames";
import styles from "./working-area.module.css";
import PropTypes from 'prop-types';

export default class WorkingArea extends React.Component {
    render() {
        const {children, className} = this.props;
        const classes = classNames(styles.container, className);

        return (
            <div className={classes}>
                {children}
            </div>
        )
    }
}

WorkingArea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
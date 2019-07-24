import React from 'react';
import classNames from "classnames";
import styles from "./workingArea.module.css";
import PropTypes from 'prop-types';

export default class WorkingArea extends React.Component {
    render() {
        const {children, className} = this.props;
        const style = classNames(styles.container, className);

        return (
            <div className={style}>
                {children}
            </div>
        )
    }
}

WorkingArea.propTypes = {
    children: PropTypes.array,
};
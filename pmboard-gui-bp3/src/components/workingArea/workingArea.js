import React from 'react';
import classNames from "classnames";
import styles from "./workingArea.module.css";
import PropTypes from 'prop-types';

export default class WorkingArea extends React.Component {
    render() {
        console.log(this.props);
        const {children} = this.props;
        let style = classNames(styles.container);
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
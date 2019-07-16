import React from 'react';
import classNames from "classnames";
import styles from "./workingArea.module.css";

export default class WorkingArea extends React.Component {
    render() {
        const {children} = this.props;
        let style = classNames(styles.container);
        return (
            <div className={style}>
                {children}
            </div>
        )
    }
}
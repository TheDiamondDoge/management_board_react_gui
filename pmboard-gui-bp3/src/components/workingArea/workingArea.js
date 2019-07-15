import React from 'react';
import styles from './workingArea.module.css';
import classNames from "classnames";

export default class WorkingArea extends React.Component {
    render() {
        const {children} = this.props;
        let style = classNames(this.props.flexItemStyle);
        return (
            <div className={style}>
                {children}
            </div>
        )
    }
}
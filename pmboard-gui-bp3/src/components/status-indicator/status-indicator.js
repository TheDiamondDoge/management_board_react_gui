import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './status-indicator.module.css';

export default class StatusIndicator extends React.PureComponent {
    render() {
        const {className, status} = this.props;
        const classes = classNames(className, styles.indicator, styles[this.getClassName(status)]);
        const indicatorSymbol = this.getIndicatorSymbol(status);
        return (
            <>
                <div className={classes}>
                    <span className={styles.text_container}>
                        {indicatorSymbol}
                    </span>
                </div>
            </>
        );
    }

    getClassName = (status) => {
        if (!status) status = "blank";
        switch (status.toLowerCase()) {
            case 'red':
                return 'color_red';
            case 'yellow':
                return 'color_yellow';
            case 'green':
                return 'color_green';
            default:
                return 'color_blank';
        }
    };

    getIndicatorSymbol = (status) => {
        if (!status) status = "blank";
        switch (status.toLowerCase()) {
            case 'red':
                return 'R';
            case 'yellow':
                return 'Y';
            case 'green':
                return 'G';
            case 'blank':
            default:
                return '';
        }
    }
}

StatusIndicator.propTypes = {
    classNames: PropTypes.string,
    status: PropTypes.string,
};

StatusIndicator.defaultProps = {
    status: '',
    className: ''
}
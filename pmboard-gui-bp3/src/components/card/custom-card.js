import React from 'react';
import {Card, Elevation} from "@blueprintjs/core";
import styles from './custom-card.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ErrorBoundary from "../error-boundary/error-boundary";

export default function CustomCard({className, children}) {
    let classes = classNames(className, styles.custom_card);
    return (
        <ErrorBoundary>
            <Card
                interactive={false}
                elevation={Elevation.THREE}
                className={classes}
            >
                {children}
            </Card>
        </ErrorBoundary>
    )
};

CustomCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
};

CustomCard.defaultProps = {
    className: '',
    children: null,
};
import React from 'react';
import {Card, Elevation} from "@blueprintjs/core";
import styles from './customCard.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const CustomCard = ({className, children}) => {
    let classes = classNames(className, styles.custom_card);
    return (
        <Card
            interactive={false}
            elevation={Elevation.THREE}
            className={classes}
        >
            {children}
        </Card>
    )
};

CustomCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
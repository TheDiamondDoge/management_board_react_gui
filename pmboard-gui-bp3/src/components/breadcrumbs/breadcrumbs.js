import React from 'react';
import {Breadcrumbs} from "@blueprintjs/core";
import styles from './breadcrumbs.module.scss';
import classNames from 'classnames';
import PropTypes from "prop-types";

export const CustomBreadcrumbs = React.memo(({className}) => {
    const BREADCRUMBS = [
        {href: "/", icon: "folder-close", text: "Home"},
        {href: "/test", icon: "folder-close", text: "Test page"},
        {href: "/pws", icon: "folder-close", text: "PWS"},
    ];

    let classes = classNames(className, styles.container);
    return (
        <div className={classes}>
            <Breadcrumbs
                className={className}
                items={BREADCRUMBS}
            />
        </div>
    )
});

CustomBreadcrumbs.propTypes = {
    className: PropTypes.string,
};

CustomBreadcrumbs.defaultProps = {
    className: ''
};


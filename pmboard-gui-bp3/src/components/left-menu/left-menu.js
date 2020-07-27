import React from 'react';
import styles from './left-menu.module.scss';
import MenuNavigation from "../menu-navigation/menu-navigation.container";
import {MENU_ITEMS_ARRAY} from "../menu-navigation/menu-navigation-object";
import classNames from 'classnames';
import PropTypes from 'prop-types';

function LeftMenu({className}) {
    let classes = classNames(styles.container, className);

    return (
        <div className={classes}>
            <MenuNavigation menuNavigationObjects={MENU_ITEMS_ARRAY}/>
        </div>
    )
}

LeftMenu.propTypes = {
    className: PropTypes.string,
};

LeftMenu.defaultProps = {
    className: ''
};

export default React.memo(LeftMenu);
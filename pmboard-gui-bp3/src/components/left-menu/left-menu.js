import React from 'react';
import styles from './left-menu.module.css';
import MenuNavigation from "../menu-navigation/menu-navigation.container";
import { MENU_ITEMS_ARRAY } from "../menu-navigation/menu-navigation-object";
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class LeftMenu extends React.PureComponent {
    render() {
        const { className } = this.props;
        let classes = classNames(styles.container, className);

        return (
            <div className={classes}>
                <MenuNavigation menuNavigationObjects={MENU_ITEMS_ARRAY} />
            </div>
        )
    }
}

LeftMenu.propTypes = {
    className: PropTypes.string,
};

LeftMenu.defaultProps = {
    className: ''
};
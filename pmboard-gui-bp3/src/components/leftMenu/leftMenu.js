import React from 'react';
import styles from './leftMenu.module.css';
import MenuNavigation from "../menuNavigation/menuNavigation";
import { MENU_ITEMS_ARRAY } from "../menuNavigation/menuNavigationObject";
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class LeftMenu extends React.Component {
    render() {
        let style = classNames(styles.container);

        return (
            <div className={style}>
                <MenuNavigation menuNavigationObjects={MENU_ITEMS_ARRAY}/>
            </div>
        )
    }
}
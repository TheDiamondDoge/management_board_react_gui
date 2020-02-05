import React from 'react';
import styles from './menu-navigation.module.css';
import classNames from 'classnames';
import {Button, Collapse, Alignment} from '@blueprintjs/core';
import PropTypes from 'prop-types';
import {NavigationMenuItemShape} from "../../util/custom-types";

export default class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            projects: false,
            kpi: false,
            internals: false,
            portfolio: false,
            bp: false,
            blc: false,
            navigation: false,
        };
    }

    handleClick = (stateName) => {
        const {id} = stateName;
        this.setState({[id]: !this.state[id]})
    };

    render() {
        const {menuNavigationObjects} = this.props;

        let menuButtonStyle = classNames("bp3-minimal", styles.menuButton);
        let menuItemStyle = classNames("bp3-minimal", styles.menuItem);
        let menuItemsContainerStyle = classNames(styles.menuItemsContainer);

        return (
            <div>
                {menuNavigationObjects.map(
                    (obj) => {
                        const {id, catButtonName, subMenus} = obj;
                        const isOpen = this.state[id];
                        return (
                            <div key={id}>
                                <Button
                                    fill
                                    className={menuButtonStyle}
                                    alignText={Alignment.LEFT}
                                    onClick={() => this.handleClick(obj)}
                                    text={catButtonName}
                                />
                                <Collapse isOpen={isOpen}>
                                    <div className={menuItemsContainerStyle}>
                                        {subMenus.map((subItem, i) => {
                                            const key = "subItem" + i;
                                            const {name} = subItem;
                                            return (
                                                <Button
                                                    fill
                                                    key={key}
                                                    className={menuItemStyle}
                                                    alignText={Alignment.LEFT}
                                                    text={name}
                                                />
                                            )
                                        })}
                                    </div>
                                </Collapse>
                            </div>
                        )
                    }
                )}
            </div>
        );
    }
};

MenuNavigation.propTypes = {
    menuNavigationObjects: PropTypes.arrayOf(
        NavigationMenuItemShape.isRequired
    ).isRequired,
};
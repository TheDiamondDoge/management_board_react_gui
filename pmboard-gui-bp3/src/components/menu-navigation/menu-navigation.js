import React from 'react';
import styles from './menu-navigation.module.scss';
import classNames from 'classnames';
import {Button, Collapse, Alignment, Icon, Classes} from '@blueprintjs/core';
import PropTypes from 'prop-types';
import {NavigationMenuItemShape} from "../../util/custom-types";

export default class MenuNavigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = (stateName) => {
        const {id} = stateName;
        this.setState({[id]: !this.state[id]})
    };

    render() {
        const {menuNavigationObjects, onToggleMenuClick, isNavMenuExpanded} = this.props;

        const menuButtonStyle = classNames(Classes.MINIMAL, styles.menuButton);
        const menuItemStyle = classNames(Classes.MINIMAL, styles.menuItem);
        const menuItemsContainerStyle = classNames(styles.menuItemsContainer);
        const iconName = this.getIconName(isNavMenuExpanded);
        return (
            <div>
                {isNavMenuExpanded &&
                menuNavigationObjects.map((obj) => {
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
                <div className={styles.expand_toggle_button}>
                    <Button
                        large
                        minimal
                        onClick={onToggleMenuClick}
                    >
                        <Icon
                            icon={iconName}
                            iconSize={Icon.SIZE_LARGE}
                            className={styles.expand_toggle_icon}/>
                    </Button>
                </div>
            </div>
        );
    }

    getIconName(isNavMenuExpanded) {
        return isNavMenuExpanded
            ? "double-chevron-left"
            : "double-chevron-right"
    }
};

MenuNavigation.propTypes = {
    menuNavigationObjects: PropTypes.arrayOf(
        NavigationMenuItemShape.isRequired
    ).isRequired,
    onToggleMenuClick: PropTypes.func,
    isNavMenuExpanded: PropTypes.bool
};

MenuNavigation.defaultProps = {
    onToggleMenuClick: () => {},
    isNavMenuExpanded: true
}
import React from 'react';
import styles from './menuNavigation.module.css';
import classNames from 'classnames';
import {Button, Collapse, Alignment} from '@blueprintjs/core';
import PropTypes from 'prop-types';

export default class MenuNavigation extends React.Component {

    state = {
        adminOpen: false,
        projectsOpen: false,
        kpiOpen: false,
        internalsOpen: false,
        portfolioOpen: false,
        bpOpen: false,
        blcOpen: false,
        navigationOpen: false,
    };

    handleClick = (stateName) => {
        let stateProp = stateName + "Open";
        this.setState({[stateProp]: !this.state[stateProp]})
    };

    render() {
        const { menuNavigationObjects } = this.props;

        let menuButtonStyle = classNames("bp3-minimal", styles.menuButton);
        let menuItemStyle = classNames("bp3-minimal", styles.menuItem);
        let menuItemsContainerStyle = classNames(styles.menuItemsContainer);

        return (
            <div>
                {menuNavigationObjects.map(
                    (obj) => (
                        <div key={obj.id}>
                            <Button
                                className={menuButtonStyle}
                                alignText={Alignment.LEFT}
                                fill={true}
                                onClick={() => this.handleClick(obj.id)}
                                text={obj.catButtonName}
                            />
                            <Collapse isOpen={this.state[obj.id + "Open"]}>
                                <div className={menuItemsContainerStyle}>
                                    { obj.subMenus.map((subItem, i) => (
                                        <Button
                                            key={"subItem" + i}
                                            className={menuItemStyle}
                                            alignText={Alignment.LEFT}
                                            fill={true}
                                            text={subItem.name}
                                        />
                                    )) }
                                </div>
                            </Collapse>
                        </div>
                    )
                )}
            </div>
        );
    }
};

MenuNavigation.propTypes = {
    menuNavigationObjects: PropTypes.array.isRequired,
};
import React from 'react';
import {Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Classes, Alignment} from "@blueprintjs/core";
import styles from './navigationBar.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class NavigationBar extends React.Component {
    render() {
        const {className} = this.props;
        const style = classNames(styles.container, className);
        return (
            <nav className={style}>
                <Navbar>
                    <NavbarGroup align={Alignment.RIGHT}>
                        <NavbarHeading>PM BOARD</NavbarHeading>
                        <NavbarDivider />
                        <Button className={Classes.MINIMAL} icon="home" />
                        <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    </NavbarGroup>
                </Navbar>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    className: PropTypes.string,
};
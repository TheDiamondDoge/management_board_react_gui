import React from 'react';
import {Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Classes, Alignment} from "@blueprintjs/core";
import styles from './navigation-bar.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {CustomBreadcrumbs} from "../breadcrumbs/breadcrumbs";

export default class NavigationBar extends React.PureComponent {
    render() {
        const {className} = this.props;
        const style = classNames(styles.container, className);
        return (
            <nav className={style}>
                <Navbar>
                    <NavbarGroup>
                        <CustomBreadcrumbs/>
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT}>
                        <NavbarHeading>PM BOARD</NavbarHeading>
                        <NavbarDivider/>
                        <Button
                            className={Classes.MINIMAL}
                            icon="home"
                        />
                        <Button
                            className={Classes.MINIMAL}
                            icon="document"
                            text="Files"
                        />
                    </NavbarGroup>
                </Navbar>
            </nav>
        )
    }
}

NavigationBar.propTypes = {
    className: PropTypes.string,
};

NavigationBar.defaultProps = {
    className: ''
};
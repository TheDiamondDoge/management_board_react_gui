import React from 'react';
import {Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Classes, Alignment} from "@blueprintjs/core";
import styles from './navigationBar.css';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <nav className={styles.container}>
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
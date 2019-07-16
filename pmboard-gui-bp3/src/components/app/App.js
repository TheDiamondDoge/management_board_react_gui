import React from 'react';
import LeftMenu from '../leftMenu/leftMenu';
import WorkingArea from '../workingArea/workingArea';
import styles from './app.module.css';
import NavigationBar from "../navbar/navigationBar";

export default function App() {
    return (
        <div className={styles.container}>
            <LeftMenu />
            <WorkingArea>
                <NavigationBar />
                <div>Hello World!</div>
            </WorkingArea>
        </div>
    );
}

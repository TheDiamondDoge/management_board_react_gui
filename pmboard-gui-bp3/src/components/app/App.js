import React from 'react';
import LeftMenu from '../leftMenu/leftMenu';
import WorkingArea from '../workingArea/workingArea';
import styles from './app.module.css';

export default function App() {
    return (
        <div className={styles.container}>
            <LeftMenu flexItemStyle={styles.itemSidebar}/>
            <WorkingArea flexItemStyle={styles.itemWorkingArea}>
                Hello World!
            </WorkingArea>
        </div>
    );
}

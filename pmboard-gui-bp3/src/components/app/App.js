import React from 'react';
import LeftMenu from '../leftMenu/leftMenu';
import WorkingArea from '../workingArea/workingArea';
import styles from './app.module.css';
import NavigationBar from "../navbar/navigationBar";
import Test from "../test_comps/test";
import World from "../test_comps/world";
import PWS from "../pws/pws";
import { FocusStyleManager } from "@blueprintjs/core";
import { BrowserRouter as Router, Route} from "react-router-dom";

FocusStyleManager.onlyShowFocusOnTabs();

export default function App() {
    return (
        <div className={styles.container}>
            <LeftMenu className={styles.leftMenu}/>
            <NavigationBar className={styles.header} />
            <WorkingArea className={styles.page}>
                    <Router>
                        <Route path="/" exact component={World}/>
                        <Route path="/pws" exact component={PWS}/>
                        <Route path="/test" exact component={Test}/>
                    </Router>
            </WorkingArea>
        </div>
    );
}

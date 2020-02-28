import React, {Suspense} from 'react';
import LeftMenu from '../left-menu/left-menu';
import WorkingArea from '../working-area/working-area';
import styles from './app.module.css';
import NavigationBar from "../navbar/navigation-bar";
import {FocusStyleManager} from "@blueprintjs/core";
import {BrowserRouter as Router, Route} from "react-router-dom";
import StatusContainer from "../status-container/status-container";
import LoadingStatus from "../global-statuses/loading-status";
import AppToaster from "../app-toaster/app-toaster.container";

FocusStyleManager.onlyShowFocusOnTabs();

const Pws = React.lazy(() => import("../pages/pws/pws.container"));
const World = React.lazy(() => import("../test_comps/world"));
const Test = React.lazy(() => import("../test_comps/test"));
const suspenseFallback = <StatusContainer><LoadingStatus/></StatusContainer>;

export default function App() {
    return (
        <div className={styles.container}>
            <LeftMenu className={styles.leftMenu}/>
            <NavigationBar className={styles.header}/>
            <WorkingArea className={styles.page}>
                <Router>
                    <Suspense fallback={suspenseFallback}>
                        <Route path="/" exact component={World}/>
                        <Route path="/pws" exact component={Pws}/>
                        <Route path="/test" exact component={Test}/>
                    </Suspense>
                </Router>
            </WorkingArea>
            <AppToaster/>
        </div>
    );
}
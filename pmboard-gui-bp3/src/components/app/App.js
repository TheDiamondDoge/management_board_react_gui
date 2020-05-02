import React, {Suspense} from 'react';
import PropTypes from "prop-types";
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

//TODO: Adaptive
export default function App(props) {
    const {isNavMenuExpanded} = props.appSettings;
    const leftMenuSize = isNavMenuExpanded ? 230 : 60;
    const containerStyle = {gridTemplateColumns: `${leftMenuSize}px calc(100% - ${leftMenuSize}px)`};

    return (
        <div className={styles.container}
             style={containerStyle}
        >
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

App.propTypes = {
    appSettings: PropTypes.shape({
        isNavMenuExpanded: PropTypes.bool,
    })
}
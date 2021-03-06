import React, {Suspense} from 'react';
import PropTypes from "prop-types";
import LeftMenu from '../left-menu/left-menu';
import WorkingArea from '../working-area/working-area';
import styles from './app.module.scss';
import NavigationBar from "../navbar/navigation-bar";
import {FocusStyleManager} from "@blueprintjs/core";
import {BrowserRouter as Router, Route} from "react-router-dom";
import StatusContainer from "../status-container/status-container";
import LoadingStatus from "../global-statuses/loading-status";
import AppToaster from "../app-toaster/app-toaster.container";
import classNames from "classnames";

FocusStyleManager.onlyShowFocusOnTabs();

const Pws = React.lazy(() => import("../pages/pws/pws.container"));
const World = React.lazy(() => import("../test_comps/world"));
const Projects = React.lazy(() => import("../pages/list-of-projects/list-of-projects"));
const Test = React.lazy(() => import("../test_comps/test"));
const suspenseFallback = <StatusContainer><LoadingStatus/></StatusContainer>;

export default function App(props) {
    const {isNavMenuExpanded} = props.appSettings;
    const containerStyle = classNames(
        styles.container,
        {[styles.template_expanded] : isNavMenuExpanded},
        {[styles.template_shrinked] : !isNavMenuExpanded},
    );

    return (
        <div className={containerStyle}>
            <LeftMenu className={styles.leftMenu}/>
            <NavigationBar className={styles.header}/>
            <WorkingArea className={styles.page}>
                <Router>
                    <Suspense fallback={suspenseFallback}>
                        <Route path="/" exact component={Projects}/>
                        <Route path="/pws" exact component={Pws}/>
                        <Route path="/test" exact component={World}/>
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

App.defaultProps = {
    appSettings: {
        isNavMenuExpanded: true
    }
}
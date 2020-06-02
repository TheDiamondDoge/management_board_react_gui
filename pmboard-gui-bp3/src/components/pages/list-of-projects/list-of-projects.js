import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import ErrorBoundary from "../../error-boundary/error-boundary";
import ProjectsTab from "./tabs/projects/projects-tab.container";
import styles from "./list-of-projects.module.css";

export default class ListOfProjects extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>List of Projects</h1>
                <Tabs
                    id="projects_list"
                    large
                    renderActiveTabPanelOnly
                    className={styles.tabs}
                    selectedTabId={"projects"}
                >
                    <Tab
                        id={"projects"}
                        title={"Projects"}
                        className={styles.container}
                        panel={(
                            <ErrorBoundary>
                                <ProjectsTab className={styles.container} />
                            </ErrorBoundary>
                        )}
                    />
                </Tabs>
            </div>
        );
    }
}
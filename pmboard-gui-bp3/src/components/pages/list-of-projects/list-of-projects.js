import React from 'react';
import {Tab, Tabs} from "@blueprintjs/core";
import ErrorBoundary from "../../error-boundary/error-boundary";
import ProjectsTab from "./tabs/projects/projects-tab.container";
import styles from "./list-of-projects.module.scss";
import {ListOfProjectsTabs, WorkspaceStatus} from "../../../util/constants";

export default class ListOfProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: ListOfProjectsTabs.PROJECTS
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>List of Projects</h1>
                <Tabs
                    id="projects_list"
                    large
                    renderActiveTabPanelOnly
                    className={styles.tabs}
                    selectedTabId={this.state.selectedTab}
                    onChange={this.handleTabClick}
                >
                    <Tab
                        id={ListOfProjectsTabs.PROJECTS}
                        title={"Projects"}
                        className={styles.container}
                        panel={(
                            <ErrorBoundary>
                                <ProjectsTab className={styles.container} workspaceStatus={WorkspaceStatus.ENABLED} />
                            </ErrorBoundary>
                        )}
                    />
                    <Tab
                        id={ListOfProjectsTabs.HISTORICAL}
                        title={"Historical tab"}
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

    handleTabClick = (id) => {
        this.setState({
            selectedTab: id
        })
    }
}
import React from 'react';

//TODO: bind projectId to load function
export function withPwsOnMountCall(Component, config) {
    return class extends React.Component {
        componentDidMount() {
            if (config.onMount) {
                const {projectId} = this.props.defaults.payload;
                this.props[config.onMount](projectId);
            }
        }

        componentWillUnmount() {
            if (config.onUnmount) {
                this.props[config.onUnmount]();
            }
        }

        render() {
            return <Component {...this.props}/>
        }
    }
}

export function withPwsTabNameUrlChanger(Component) {
    return class extends React.Component {
        componentDidMount() {
            const tabId = this.props.tabId;
            if (tabId) {
                const urlParams = new URLSearchParams(window.location.search);
                const urlBase = window.location.pathname;
                urlParams.set("tab", tabId);

                const url = `${urlBase}?${urlParams.toString()}`;
                window.history.pushState("Tabs", `${tabId} tab`, url);
            }
        }

        render() {
            const {tabId, ...others} = this.props;
            return <Component {...others}/>;
        }
    }
}

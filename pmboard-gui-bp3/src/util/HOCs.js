import React from 'react';

export function withPwsOnMountCall(Component, config) {
    const WithPwsOnMountCall = class extends React.Component {
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
    };

    WithPwsOnMountCall.displayName = `WithPwsOnMountCall(${getDisplayName(Component)})`;
    return WithPwsOnMountCall;
}

export function withPwsTabNameUrlChanger(Component) {
    const WithPwsTabNameUrlChanger = class extends React.Component {
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
    };

    WithPwsTabNameUrlChanger.displayName = `WithPwsTabNameUrlChanger(${getDisplayName(Component)})`;
    return WithPwsTabNameUrlChanger;
}

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

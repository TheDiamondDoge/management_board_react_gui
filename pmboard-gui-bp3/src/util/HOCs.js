import React from 'react';

export function withOnMountCall(Component) {
    return function (config) {
        return class extends React.Component {
            componentDidMount() {
                this.props[config.onMount]();
            }

            componentWillUnmount() {
                try {
                    this.props[config.onUnmount]();
                } catch (e) {
                    console.log("HMMMMMM", this.props, config);
                    throw e;
                }
            }

            render() {
                return <Component {...this.props}/>
            }
        }
    }
}

export function withPwsTabNameUrlChanger(Component) {
    return class extends React.Component {
        componentDidMount() {
            const tabId = this.props.tabId;
            if (tabId) {
                const urlParams = new URLSearchParams(window.location.search);
                urlParams.set("tab", tabId);
                // urlParams.set("projectId", this.props.projectId);
                window.history.pushState("Tabs", `${this.props.tabId} tab`, `/pws?${urlParams.toString()}`);
            }
        }

        render() {
            const {tabId, ...others} = this.props;
            return <Component {...others}/>;
        }
    }
}

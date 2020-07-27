import React, {useEffect} from 'react';
import {callAllFuncs} from "./util";

export function useOnMountCall(mountFuncsArr, unmountFuncsArr) {
    useEffect(() => {
        callAllFuncs(mountFuncsArr);
        return () => {
            callAllFuncs(unmountFuncsArr);
        }
    }, [mountFuncsArr, unmountFuncsArr])
}

export function withOnMountCall(Component, config) {
    const WithOnMountCall = class extends React.Component {
        componentDidMount() {
            if (config.onMount) {
                this.props[config.onMount]();
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

    WithOnMountCall.displayName = `WithOnMountCall(${getDisplayName(Component)})`;
    return WithOnMountCall;
}

export function usePwsTabNameUrlChanger(tabId) {
    useEffect(() => {
        if (tabId) {
            const urlParams = new URLSearchParams(window.location.search);
            const urlBase = window.location.pathname;
            urlParams.set("tab", tabId);

            const url = `${urlBase}?${urlParams.toString()}`;
            window.history.pushState("Tabs", `${tabId} tab`, url);
        }
    }, [tabId])
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

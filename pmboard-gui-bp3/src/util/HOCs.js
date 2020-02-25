import React from 'react';

export function withOnMountCall(Component) {
    return function (config) {
        return class extends React.Component {
            componentDidMount() {
                this.props[config.onMount]();
            }

            componentWillUnmount() {
                this.props[config.onUnmount]();
            }

            render() {
                return <Component {...this.props}/>
            }
        }
    }
}

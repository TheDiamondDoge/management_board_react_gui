import React from 'react';
import ErrorStatus from "../global-statuses/error-status/error-status";
import StatusContainer from "../status-container/status-container";

export default class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        //TODO: logger
        // console.log(error, errorInfo);
    }

    render() {
        const {children} = this.props;
        const {hasError} = this.state;
        if (hasError)
            return (
                <StatusContainer>
                    <ErrorStatus/>
                </StatusContainer>
            );

        return children;
    }
}
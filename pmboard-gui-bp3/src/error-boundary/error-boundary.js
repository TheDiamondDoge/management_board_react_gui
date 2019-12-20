import React from 'react';
import ErrorStatus from "../components/global-statuses/error-status";
import StatusContainer from "../components/status-container/status-container";

export default class ErrorBoundary extends React.Component {
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
        console.log(error, errorInfo);
    }

    render() {
        const {children} = this.props;
        if (this.state.hasError)
            return (
                <StatusContainer>
                    <ErrorStatus/>
                </StatusContainer>
            );

        return children;
    }
}
import React from 'react';

//TODO: create error UI
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log("ERRR", error);
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        //TODO: logger
        console.log(error, errorInfo);
    }

    render() {
        const {children, ...props} = this.props;
        if(this.state.hasError)
            return <div {...props}>Error!</div>;

        return children;
    }
}
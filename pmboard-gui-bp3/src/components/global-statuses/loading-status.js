import React from 'react';
import LoadingSpinner from "../loading-spinner/loading-spinner";

export default class LoadingStatus extends React.PureComponent {
    render() {
        return (
            <>
                <LoadingSpinner/>
                Loading...
            </>
        );
    }
}
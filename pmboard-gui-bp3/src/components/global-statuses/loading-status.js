import React from 'react';
import LoadingSpinner from "../loading-spinner/loading-spinner";

function LoadingStatus() {
    return (
        <>
            <LoadingSpinner/>
            Loading...
        </>
    );
}

export default React.memo(LoadingStatus);
import React from 'react';
import {Icon, Intent} from '@blueprintjs/core';

export default function ErrorStatus() {
    return (
        <>
            <Icon icon={"error"} iconSize={50} intent={Intent.PRIMARY} style={{marginBottom: "15px"}} />
            Something went wrong. Please try again.
        </>
    )
}
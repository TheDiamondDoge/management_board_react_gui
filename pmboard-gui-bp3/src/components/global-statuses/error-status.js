import React from 'react';
import {Icon, Intent} from '@blueprintjs/core';

export default function ErrorStatus() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            marginBottom: "17px"
        }}>
            <Icon icon={"error"} iconSize={50} intent={Intent.PRIMARY} style={{marginBottom: "15px"}} />
            Something went wrong. Please try again.
        </div>
    )
}
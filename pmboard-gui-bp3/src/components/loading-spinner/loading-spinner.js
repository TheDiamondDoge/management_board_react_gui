import React from 'react';
import {Spinner} from "@blueprintjs/core";

export default class LoadingSpinner extends React.PureComponent {
    render() {
        return (<Spinner intent={"primary"}/>)
    }
}
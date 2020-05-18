import {Icon, Intent} from "@blueprintjs/core";
import React from "react";

export default class HelpIcon extends React.PureComponent {
    render() {
        return (
            <Icon
                icon={"help"}
                intent={Intent.PRIMARY}
                {...this.props}
            />
        )
    }
};
import {Icon, Intent} from "@blueprintjs/core";
import React from "react";

function HelpIcon(props) {
    return (
        <Icon
            icon={"help"}
            intent={Intent.PRIMARY}
            {...props}
        />
    )
}

export default React.memo(HelpIcon);
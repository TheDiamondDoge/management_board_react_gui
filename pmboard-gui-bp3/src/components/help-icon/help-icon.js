import {Icon, Intent} from "@blueprintjs/core";
import React from "react";

export default React.memo(function HelpIcon(props) {
    return <Icon icon={"help"} intent={Intent.PRIMARY} {...props}/>
});
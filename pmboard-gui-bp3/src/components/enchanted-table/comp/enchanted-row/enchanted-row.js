import React from 'react';
import {ContextMenu} from "@blueprintjs/core";

export default class EnchantedRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, ...others} = this.props;
        return (
            <tr onContextMenu={(e) => this.onContextMenu(e)} {...others}>
                {children}
            </tr>
        );
    }

    onContextMenu(event) {
        event.preventDefault();
        const {contextMenu} = this.props;

        ContextMenu.show(contextMenu, {left: event.clientX, top: event.clientY})
    }
}

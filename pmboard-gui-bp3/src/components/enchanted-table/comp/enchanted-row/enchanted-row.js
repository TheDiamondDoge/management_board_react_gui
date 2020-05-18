import React from 'react';
import {ContextMenu} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default class EnchantedRow extends React.Component {
    render() {
        const {children, ...others} = this.props;
        return (
            <tr
                onContextMenu={(e) => this.onContextMenu(e)}
                {...others}
            >
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

EnchantedRow.propTypes = {
    contextMenu: PropTypes.object
};

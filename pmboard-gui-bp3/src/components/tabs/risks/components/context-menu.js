import React from 'react';
import {Menu, MenuItem} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default class ContextMenu extends React.PureComponent {
    render() {
        const {onEdit, ...menuProps} = this.props;
        return (
            <Menu {...menuProps}>
                <MenuItem icon={"edit"}
                          text="Edit 'Reported' flag"
                          onClick={onEdit}
                />
            </Menu>
        )
    }
}

ContextMenu.propTypes = {
    onEdit: PropTypes.func.isRequired
};